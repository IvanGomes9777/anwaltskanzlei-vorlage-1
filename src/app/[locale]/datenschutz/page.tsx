import { setRequestLocale } from 'next-intl/server';
import { pageMetadata } from '@/lib/metadata';
import LegalShell from '@/components/legal/LegalShell';

export const metadata = pageMetadata({
  path: '/datenschutz',
  title: 'Datenschutzerklärung',
  description:
    'Informationen zur Verarbeitung personenbezogener Daten auf dieser Website (DSGVO).',
});

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
        Lübbersmann Rechtsanwälte
        <br />
        Südstraße 11, 48153 Münster
        <br />
        E-Mail: luebbersmann@luebbersmann-rechtsanwaelte.de
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

      <h2>6. Datenverarbeitung im Rahmen des Mandats</h2>
      <p>
        Bei Anbahnung und Durchführung eines Mandats verarbeiten wir die von Ihnen
        mitgeteilten personenbezogenen Daten zur Erfüllung des Anwaltsvertrags
        (Art. 6 Abs. 1 lit. b DSGVO) sowie zur Erfüllung rechtlicher Verpflichtungen
        (Art. 6 Abs. 1 lit. c DSGVO). Soweit dabei besondere Kategorien
        personenbezogener Daten (Art. 9 Abs. 1 DSGVO, z. B. Gesundheitsdaten in
        medizinstrafrechtlichen Verfahren) betroffen sind, erfolgt die Verarbeitung
        zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen
        (Art. 9 Abs. 2 lit. f DSGVO) oder auf Grundlage Ihrer ausdrücklichen
        Einwilligung (Art. 9 Abs. 2 lit. a DSGVO).
      </p>
      <p>
        Als Rechtsanwälte unterliegen wir der gesetzlichen Verschwiegenheitspflicht
        (§ 43a Abs. 2 BRAO, § 2 BORA). Mandatsbezogene Daten werden nur offengelegt,
        soweit dies zur Mandatsbearbeitung erforderlich ist (z. B. gegenüber
        Gerichten, Behörden oder der Gegenseite) oder eine gesetzliche Pflicht
        besteht. Auskunftsrechte Dritter können insoweit nach § 29 Abs. 1 BDSG
        eingeschränkt sein.
      </p>

      <h2>7. E-Mail-Versand über Resend</h2>
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

      <h2>8. Cookies und lokale Speicherung</h2>
      <p>
        Diese Website verwendet ausschließlich technisch notwendige Cookies und
        vergleichbare Speichertechniken (Rechtsgrundlage § 25 Abs. 2 TDDDG,
        Art. 6 Abs. 1 lit. f DSGVO). Tracking-, Analyse- oder Werbe-Cookies setzen
        wir nicht ein. Im Einzelnen werden verwendet:
      </p>
      <ul>
        <li>
          Cookie „NEXT_LOCALE": speichert die Spracheinstellung der Website,
          sofern diese von der Standardeinstellung abweicht (technisch notwendig).
        </li>
        <li>
          Local-Storage-Eintrag „cookie-consent": merkt sich Ihre Entscheidung im
          Cookie-Hinweis, damit dieser nicht bei jedem Besuch erneut erscheint.
        </li>
        <li>
          Local-Storage-Eintrag „map-consent": merkt sich Ihre Einwilligung zum
          Laden der Anfahrtskarte (siehe Abschnitt 9).
        </li>
      </ul>
      <p>
        Nach Ihrer Einwilligung zum Laden der Google-Maps-Karte kann Google eigene
        Cookies setzen (Abschnitt 9). Sonstige nicht notwendige Cookies würden nur
        mit Ihrer Einwilligung gemäß § 25 Abs. 1 TDDDG eingesetzt. Die
        Local-Storage-Einträge können Sie jederzeit über die Browserdaten löschen.
      </p>

      <h2>9. Eingebundener Kartendienst (Google Maps)</h2>
      <p>
        Zur Darstellung der Anfahrt binden wir Karten von Google Maps ein (Anbieter:
        Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland). Die
        Karte wird erst geladen, nachdem Sie eingewilligt haben — entweder über den
        Cookie-Hinweis („Akzeptieren") oder durch Klick auf „Karte laden" direkt auf
        dem Karten-Platzhalter (Zwei-Klick-Lösung). Erst dann wird Ihre IP-Adresse an
        Google übermittelt; dabei können Daten auch in die USA übertragen werden
        (Google LLC ist nach dem EU-US Data Privacy Framework zertifiziert).
        Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO, § 25
        Abs. 1 TDDDG); Ihre Auswahl wird lokal in Ihrem Browser gespeichert und kann
        durch Löschen der Browserdaten widerrufen werden.
      </p>

      <h2>10. Speicherdauer und Löschfristen</h2>
      <p>
        Wir verarbeiten personenbezogene Daten nur so lange, wie es für den jeweiligen
        Zweck erforderlich ist, und löschen sie anschließend, soweit keine gesetzlichen
        Aufbewahrungspflichten entgegenstehen. Insbesondere gelten:
      </p>
      <ul>
        <li>
          Anfragen ohne anschließendes Mandat: Löschung, sobald die Anfrage
          abschließend beantwortet ist.
        </li>
        <li>
          Handakten: Aufbewahrung für sechs Jahre nach Beendigung des Mandats
          (§ 50 Abs. 1 BRAO).
        </li>
        <li>
          Buchhaltungs- und steuerrelevante Unterlagen: Aufbewahrung nach den
          handels- und steuerrechtlichen Fristen (§ 257 HGB, § 147 AO) von bis zu
          zehn Jahren.
        </li>
        <li>Server-Logfiles: Löschung nach kurzer Frist.</li>
      </ul>

      <h2>11. SSL-/TLS-Verschlüsselung</h2>
      <p>
        Diese Website nutzt aus Sicherheitsgründen eine SSL-/TLS-Verschlüsselung. Eine
        verschlüsselte Verbindung erkennen Sie an „https://" in der Adresszeile.
      </p>

      <h2>12. Beschwerderecht bei der Aufsichtsbehörde</h2>
      <p>
        Ihnen steht ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde zu.
        Zuständig ist die Landesbeauftragte für Datenschutz und Informationsfreiheit
        Nordrhein-Westfalen (LDI NRW), Kavalleriestraße 2–4, 40213 Düsseldorf,
        www.ldi.nrw.de.
      </p>

      <h2>13. Aktualität und Änderung</h2>
      <p>
        Diese Datenschutzerklärung ist aktuell gültig. Durch Weiterentwicklung der
        Website oder geänderte gesetzliche Vorgaben kann eine Anpassung erforderlich
        werden.
      </p>
    </>
  );
}
