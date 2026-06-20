import { setRequestLocale } from 'next-intl/server';
import LegalShell from '@/components/legal/LegalShell';

export default async function DatenschutzPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <LegalShell
      title="Datenschutzerklärung"
      updated="Vorlage – vor Veröffentlichung anwaltlich prüfen lassen."
    >
      <div className="mb-8 rounded-lg border border-white/30 bg-white/[0.06] p-4 text-sm text-black/70">
        Hinweis: Beispiel-/Platzhalterinhalt. An die tatsächliche Datenverarbeitung, eingesetzte Tools und das Hosting anpassen und vor Veröffentlichung rechtlich prüfen lassen.
      </div>

      <DatenschutzDE />
    </LegalShell>
  );
}

function DatenschutzDE() {
  return (
    <>
      <h2>1. Verantwortlicher</h2>
      <p>
        Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der
        Datenschutz-Grundverordnung (DSGVO) ist:
      </p>
      <p>
        Hoffmann · Vogel Rechtsanwälte [Platzhalter]
        <br />
        Maximilianstraße 12, 80539 München
        <br />
        E-Mail: datenschutz@hoffmann-vogel.example [Platzhalter]
      </p>

      <h2>2. Ihre Rechte als betroffene Person</h2>
      <p>Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:</p>
      <ul>
        <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
        <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
        <li>Recht auf Löschung (Art. 17 DSGVO)</li>
        <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
        <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
        <li>Widerspruchsrecht gegen die Verarbeitung (Art. 21 DSGVO)</li>
        <li>Recht auf Widerruf einer erteilten Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
      </ul>

      <h2>3. Erhebung von Daten beim Besuch der Website (Server-Logfiles)</h2>
      <p>
        Beim Aufruf der Website werden automatisch Informationen an den Server
        übermittelt (z. B. IP-Adresse, Datum und Uhrzeit, abgerufene Seite, Browsertyp,
        Betriebssystem). Dies dient dem sicheren und stabilen Betrieb der Website.
        Rechtsgrundlage ist unser berechtigtes Interesse gemäß Art. 6 Abs. 1 lit. f DSGVO.
      </p>

      <h2>4. Hosting</h2>
      <p>
        Diese Website wird bei der Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789,
        USA, gehostet. Dabei können personenbezogene Daten (insb. Zugriffsdaten) in die
        USA übermittelt werden. Grundlage der Übermittlung sind die
        Standardvertragsklauseln der EU-Kommission. Rechtsgrundlage: Art. 6 Abs. 1 lit. f
        DSGVO. Ein Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO liegt vor.
      </p>

      <h2>5. Kontaktformular und Kontaktaufnahme</h2>
      <p>
        Wenn Sie uns über das Kontaktformular oder per E-Mail kontaktieren, werden Ihre
        Angaben zur Bearbeitung der Anfrage gespeichert. Rechtsgrundlage ist Ihre
        Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sowie, bei Anbahnung eines Mandats,
        Art. 6 Abs. 1 lit. b DSGVO. Die Daten werden gelöscht, sobald sie für den Zweck
        nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten
        entgegenstehen. Bitte beachten Sie, dass eine unverschlüsselte E-Mail-Übermittlung
        Sicherheitsrisiken birgt.
      </p>

      <h2>6. Cookies</h2>
      <p>
        Diese Website verwendet technisch notwendige Cookies, die für den Betrieb
        erforderlich sind (Rechtsgrundlage Art. 6 Abs. 1 lit. f DSGVO bzw. § 25 Abs. 2
        TDDDG). Nicht notwendige Cookies oder Tracking werden nur mit Ihrer Einwilligung
        gemäß § 25 Abs. 1 TDDDG eingesetzt. [Falls keine Tracking-Cookies eingesetzt
        werden, hier vermerken.]
      </p>

      <h2>7. Eingebundener Kartendienst (OpenStreetMap)</h2>
      <p>
        Zur Darstellung der Anfahrt binden wir Karten von OpenStreetMap (OpenStreetMap
        Foundation, St John&apos;s Innovation Centre, Cowley Road, Cambridge, CB4 0WS, UK)
        ein. Beim Laden der Karte wird Ihre IP-Adresse an OpenStreetMap übermittelt.
        Rechtsgrundlage ist unser berechtigtes Interesse an einer ansprechenden
        Darstellung (Art. 6 Abs. 1 lit. f DSGVO) bzw. Ihre Einwilligung.
      </p>

      <h2>8. SSL-/TLS-Verschlüsselung</h2>
      <p>
        Diese Website nutzt aus Sicherheitsgründen eine SSL-/TLS-Verschlüsselung. Eine
        verschlüsselte Verbindung erkennen Sie an „https://" in der Adresszeile.
      </p>

      <h2>9. Beschwerderecht bei der Aufsichtsbehörde</h2>
      <p>
        Ihnen steht ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde zu.
        Zuständig ist das Bayerische Landesamt für Datenschutzaufsicht (BayLDA),
        Promenade 27, 91522 Ansbach [ggf. anpassen].
      </p>

      <h2>10. Aktualität und Änderung</h2>
      <p>
        Diese Datenschutzerklärung ist aktuell gültig. Durch Weiterentwicklung der
        Website oder geänderte gesetzliche Vorgaben kann eine Anpassung erforderlich
        werden.
      </p>
    </>
  );
}
