import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { rateLimit } from '@/lib/rate-limit';

// Stabile Slugs → Klartext-Label (für die E-Mail) und Empfänger (aus Env)
const AREA_LABELS: Record<string, string> = {
  arbeitsrecht: 'Arbeitsrecht',
  familienrecht: 'Familien- & Erbrecht',
  wirtschaftsrecht: 'Vertrags- & Wirtschaftsrecht',
  strafrecht: 'Strafrecht',
  other: 'Sonstiges / noch unklar',
};

function recipientFor(area: string): string | null {
  const map: Record<string, string | undefined> = {
    arbeitsrecht: process.env.CONTACT_TO_ARBEITSRECHT,
    familienrecht: process.env.CONTACT_TO_FAMILIENRECHT,
    wirtschaftsrecht: process.env.CONTACT_TO_WIRTSCHAFTSRECHT,
    strafrecht: process.env.CONTACT_TO_STRAFRECHT,
  };
  return map[area] || process.env.CONTACT_TO_DEFAULT || null;
}

const isEmail = (v: unknown): v is string =>
  typeof v === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

// Einzeilige Felder: Zeilenumbrüche/Steuerzeichen entfernen (verhindert
// E-Mail-Header-Injection, z. B. über den Namen im Betreff) und Länge begrenzen.
const cleanLine = (v: unknown, max: number): string =>
  String(v ?? '')
    .replace(/[\r\n\u2028\u2029]/g, " ")
    .trim()
    .slice(0, max);

export async function POST(request: Request) {
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  const limit = rateLimit(ip);
  if (!limit.ok) {
    return NextResponse.json(
      { error: 'rate_limited' },
      { status: 429, headers: { 'Retry-After': String(limit.retryAfter) } }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 });
  }

  const name = cleanLine(body.name, 100);
  const email = cleanLine(body.email, 200);
  const phone = cleanLine(body.phone, 50);
  const area = cleanLine(body.area, 40);
  const message = String(body.message ?? '').replace(/\r/g, '').trim().slice(0, 5000);
  const consent = body.consent === true || body.consent === 'on';
  const honeypot = String(body.company ?? '').trim(); // Spam-Falle
  const locale = body.locale === 'en' ? 'en' : 'de';

  // Spam: Honeypot ausgefüllt → still „erfolgreich", aber nichts senden
  if (honeypot) return NextResponse.json({ ok: true });

  if (!name || !isEmail(email) || !message || !consent) {
    return NextResponse.json({ error: 'invalid_input' }, { status: 422 });
  }

  const areaLabel = AREA_LABELS[area] ?? AREA_LABELS.other;
  const to = recipientFor(area);
  const from = process.env.CONTACT_FROM || 'Kanzlei <onboarding@resend.dev>';
  const apiKey = process.env.RESEND_API_KEY;

  // Demo-Modus: kein API-Key gesetzt → nichts senden, aber Formular „funktioniert"
  if (!apiKey) {
    console.log('[contact] DEMO – kein RESEND_API_KEY gesetzt, es wird nichts versendet');
    return NextResponse.json({ ok: true, demo: true });
  }

  // Kein Empfänger konfiguriert → Konfigurationsfehler statt Versand an
  // eine Platzhalter-Adresse.
  if (!to) {
    console.error('[contact] Kein Empfänger konfiguriert (CONTACT_TO_* / CONTACT_TO_DEFAULT)');
    return NextResponse.json({ error: 'send_failed' }, { status: 502 });
  }

  const resend = new Resend(apiKey);

  try {
    // 1) Interne Benachrichtigung an die zuständige Person
    await resend.emails.send({
      from,
      to,
      replyTo: email,
      cc: process.env.CONTACT_CC || undefined,
      subject: `Neue Anfrage (${areaLabel}) – ${name}`,
      text:
        `Neue Kontaktanfrage über die Website\n\n` +
        `Rechtsgebiet: ${areaLabel}\n` +
        `Name: ${name}\n` +
        `E-Mail: ${email}\n` +
        `Telefon: ${phone || '–'}\n\n` +
        `Nachricht:\n${message}\n`,
    });

    // 2) Automatische Eingangsbestätigung an den Absender
    const ackSubject =
      locale === 'en'
        ? 'We have received your request'
        : 'Ihre Anfrage ist bei uns eingegangen';
    const ackText =
      locale === 'en'
        ? `Dear ${name},\n\nthank you for your message regarding "${areaLabel}". The responsible attorney will get back to you shortly.\n\nKind regards\nHoffmann · Vogel Rechtsanwälte`
        : `Guten Tag ${name},\n\nvielen Dank für Ihre Nachricht zum Thema „${areaLabel}". Die zuständige Person meldet sich zeitnah bei Ihnen.\n\nMit freundlichen Grüßen\nHoffmann · Vogel Rechtsanwälte`;

    await resend.emails.send({
      from,
      to: email,
      subject: ackSubject,
      text: ackText,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact] send failed', err);
    return NextResponse.json({ error: 'send_failed' }, { status: 502 });
  }
}
