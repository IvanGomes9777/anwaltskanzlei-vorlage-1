import { setRequestLocale } from 'next-intl/server';
import LegalShell from '@/components/legal/LegalShell';

export default async function DatenschutzPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const en = locale === 'en';

  return (
    <LegalShell
      title={en ? 'Privacy Policy' : 'Datenschutzerklärung'}
      updated={en ? 'Template – to be reviewed by a lawyer before going live.' : 'Vorlage – vor Veröffentlichung anwaltlich prüfen lassen.'}
    >
      <div className="mb-8 rounded-lg border border-gold/30 bg-gold/[0.06] p-4 text-sm text-navy/70">
        {en
          ? 'Note: Sample/placeholder content. Adapt to your actual data processing, tools and hosting, and have it reviewed legally before publishing.'
          : 'Hinweis: Beispiel-/Platzhalterinhalt. An die tatsächliche Datenverarbeitung, eingesetzte Tools und das Hosting anpassen und vor Veröffentlichung rechtlich prüfen lassen.'}
      </div>

      {en ? <DatenschutzEN /> : <DatenschutzDE />}
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

      <h2>6. E-Mail-Versand über Resend</h2>
      <p>
        Für den Versand der Formular-E-Mails (Benachrichtigung an die Kanzlei und
        Eingangsbestätigung an Sie) setzen wir den Dienst Resend (Resend, Inc., 2261
        Market Street #5039, San Francisco, CA 94114, USA) als Auftragsverarbeiter
        gemäß Art. 28 DSGVO ein. Dabei werden die von Ihnen im Formular angegebenen
        Daten an Resend übermittelt; eine Übermittlung in die USA ist möglich. Diese
        wird durch die Standardvertragsklauseln der EU-Kommission (Art. 46 Abs. 2
        lit. c DSGVO) abgesichert. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO
        (Bearbeitung Ihrer Anfrage) sowie Art. 6 Abs. 1 lit. f DSGVO. Weitere
        Informationen: resend.com/legal/privacy-policy. [Hinweis: Abschluss des
        Auftragsverarbeitungsvertrags (DPA) mit Resend sicherstellen; für besonders
        vertrauliche Mandatsanfragen einen EU-basierten Versandweg erwägen.]
      </p>

      <h2>7. Cookies</h2>
      <p>
        Diese Website verwendet technisch notwendige Cookies, die für den Betrieb
        erforderlich sind (Rechtsgrundlage Art. 6 Abs. 1 lit. f DSGVO bzw. § 25 Abs. 2
        TDDDG). Dazu zählt insbesondere das Cookie „NEXT_LOCALE", das Ihre
        Sprachauswahl speichert. Nicht notwendige Cookies oder Tracking werden nur mit
        Ihrer Einwilligung gemäß § 25 Abs. 1 TDDDG eingesetzt. [Falls keine
        Tracking-Cookies eingesetzt werden, hier vermerken.]
      </p>

      <h2>8. Eingebundener Kartendienst (OpenStreetMap)</h2>
      <p>
        Zur Darstellung der Anfahrt binden wir Karten von OpenStreetMap (OpenStreetMap
        Foundation, St John&apos;s Innovation Centre, Cowley Road, Cambridge, CB4 0WS, UK)
        ein. Beim Laden der Karte wird Ihre IP-Adresse an OpenStreetMap übermittelt.
        Rechtsgrundlage ist unser berechtigtes Interesse an einer ansprechenden
        Darstellung (Art. 6 Abs. 1 lit. f DSGVO) bzw. Ihre Einwilligung.
      </p>

      <h2>9. SSL-/TLS-Verschlüsselung</h2>
      <p>
        Diese Website nutzt aus Sicherheitsgründen eine SSL-/TLS-Verschlüsselung. Eine
        verschlüsselte Verbindung erkennen Sie an „https://" in der Adresszeile.
      </p>

      <h2>10. Beschwerderecht bei der Aufsichtsbehörde</h2>
      <p>
        Ihnen steht ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde zu.
        Zuständig ist die Aufsichtsbehörde des Bundeslandes, in dem die Kanzlei ihren
        Sitz hat. [Anpassen — z. B. LDI NRW für Nordrhein-Westfalen oder das
        Bayerische Landesamt für Datenschutzaufsicht (BayLDA) für Bayern.]
      </p>

      <h2>11. Aktualität und Änderung</h2>
      <p>
        Diese Datenschutzerklärung ist aktuell gültig. Durch Weiterentwicklung der
        Website oder geänderte gesetzliche Vorgaben kann eine Anpassung erforderlich
        werden.
      </p>
    </>
  );
}

function DatenschutzEN() {
  return (
    <>
      <h2>1. Controller</h2>
      <p>
        The controller responsible for data processing on this website within the meaning
        of the General Data Protection Regulation (GDPR) is:
      </p>
      <p>
        Hoffmann · Vogel Rechtsanwälte [placeholder]
        <br />
        Maximilianstraße 12, 80539 Munich, Germany
        <br />
        Email: datenschutz@hoffmann-vogel.example [placeholder]
      </p>

      <h2>2. Your rights as a data subject</h2>
      <ul>
        <li>Right of access (Art. 15 GDPR)</li>
        <li>Right to rectification (Art. 16 GDPR)</li>
        <li>Right to erasure (Art. 17 GDPR)</li>
        <li>Right to restriction of processing (Art. 18 GDPR)</li>
        <li>Right to data portability (Art. 20 GDPR)</li>
        <li>Right to object (Art. 21 GDPR)</li>
        <li>Right to withdraw consent (Art. 7(3) GDPR)</li>
      </ul>

      <h2>3. Server log files</h2>
      <p>
        When you access the website, information is automatically transmitted to the
        server (e.g. IP address, date and time, page accessed, browser type, operating
        system) to ensure secure and stable operation. The legal basis is our legitimate
        interest under Art. 6(1)(f) GDPR.
      </p>

      <h2>4. Hosting</h2>
      <p>
        This website is hosted by Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789,
        USA. Personal data (in particular access data) may be transferred to the USA on
        the basis of the EU Commission&apos;s Standard Contractual Clauses. Legal basis:
        Art. 6(1)(f) GDPR. A data processing agreement under Art. 28 GDPR is in place.
      </p>

      <h2>5. Contact form and contact</h2>
      <p>
        If you contact us via the form or by email, your details are stored to process
        the enquiry. The legal basis is your consent (Art. 6(1)(a) GDPR) and, where a
        mandate is initiated, Art. 6(1)(b) GDPR. Data is deleted once it is no longer
        required and no statutory retention obligations apply. Please note that
        unencrypted email transmission carries security risks.
      </p>

      <h2>6. Email dispatch via Resend</h2>
      <p>
        To send the form emails (notification to the firm and confirmation of receipt
        to you), we use the service Resend (Resend, Inc., 2261 Market Street #5039,
        San Francisco, CA 94114, USA) as a processor pursuant to Art. 28 GDPR. The
        data you enter in the form is transmitted to Resend; a transfer to the USA is
        possible and is safeguarded by the EU Commission&apos;s Standard Contractual
        Clauses (Art. 46(2)(c) GDPR). Legal basis: Art. 6(1)(b) GDPR (processing your
        enquiry) and Art. 6(1)(f) GDPR. Further information:
        resend.com/legal/privacy-policy. [Note: ensure a data processing agreement
        (DPA) with Resend is in place; consider an EU-based dispatch route for
        particularly confidential mandate enquiries.]
      </p>

      <h2>7. Cookies</h2>
      <p>
        This website uses technically necessary cookies required for operation (legal
        basis Art. 6(1)(f) GDPR and § 25(2) TDDDG). This includes in particular the
        &quot;NEXT_LOCALE&quot; cookie, which stores your language selection.
        Non-essential cookies or tracking are only used with your consent under
        § 25(1) TDDDG. [Note here if no tracking cookies are used.]
      </p>

      <h2>8. Embedded map service (OpenStreetMap)</h2>
      <p>
        To show directions we embed maps from OpenStreetMap (OpenStreetMap Foundation,
        Cambridge, UK). When the map loads, your IP address is transmitted to
        OpenStreetMap. The legal basis is our legitimate interest in an appealing
        presentation (Art. 6(1)(f) GDPR) or your consent.
      </p>

      <h2>9. SSL/TLS encryption</h2>
      <p>
        For security reasons this website uses SSL/TLS encryption. You can recognise an
        encrypted connection by &quot;https://&quot; in the address bar.
      </p>

      <h2>10. Right to lodge a complaint</h2>
      <p>
        You have the right to lodge a complaint with a data protection supervisory
        authority. The competent authority is the supervisory authority of the German
        federal state in which the firm has its seat. [Adjust — e.g. LDI NRW for
        North Rhine-Westphalia or the Bavarian State Office for Data Protection
        Supervision (BayLDA) for Bavaria.]
      </p>

      <h2>11. Updates</h2>
      <p>
        This privacy policy is currently valid. Further development of the website or
        changes in legal requirements may make adjustments necessary.
      </p>
    </>
  );
}
