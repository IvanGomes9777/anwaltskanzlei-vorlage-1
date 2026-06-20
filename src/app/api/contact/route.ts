import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Stabile Slugs → Klartext-Label (für die E-Mail) und Empfänger (aus Env)
const AREA_LABELS: Record<string, string> = {
  arbeitsrecht: 'Arbeitsrecht',
  familienrecht: 'Familien- & Erbrecht',
  wirtschaftsrecht: 'Vertrags- & Wirtschaftsrecht',
  strafrecht: 'Strafrecht',
  other: 'Sonstiges / noch unklar',
};

function recipientFor(area: string): string {
  const map: Record<string, string | undefined> = {
    arbeitsrecht: process.env.CONTACT_TO_ARBEITSRECHT,
    familienrecht: process.env.CONTACT_TO_FAMILIENRECHT,
    wirtschaftsrecht: process.env.CONTACT_TO_WIRTSCHAFTSRECHT,
    strafrecht: process.env.CONTACT_TO_STRAFRECHT,
  };
  return map[area] || process.env.CONTACT_TO_DEFAULT || 'info@example.com';
}

const isEmail = (v: unknown): v is string =>
  typeof v === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 });
  }

  const name = String(body.name ?? '').trim();
  const email = String(body.email ?? '').trim();
  const phone = String(body.phone ?? '').trim();
  const area = String(body.area ?? '').trim();
  const message = String(body.message ?? '').trim();
  const consent = body.consent === true || body.consent === 'on';
  const honeypot = String(body.company ?? '').trim(); // Spam-Falle

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
    console.log('[contact] DEMO – würde senden an', to, { name, email, area });
    return NextResponse.json({ ok: true, demo: true });
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
    const ackSubject = 'Ihre Anfrage ist bei uns eingegangen';
    const ackText = `Guten Tag ${name},\n\nvielen Dank für Ihre Nachricht zum Thema „${areaLabel}". Die zuständige Person meldet sich zeitnah bei Ihnen.\n\nMit freundlichen Grüßen\nHoffmann · Vogel Rechtsanwälte`;

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
