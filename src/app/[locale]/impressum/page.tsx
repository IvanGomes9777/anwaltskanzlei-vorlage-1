import { setRequestLocale } from 'next-intl/server';
import LegalShell from '@/components/legal/LegalShell';

export default async function ImpressumPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const en = locale === 'en';

  return (
    <LegalShell
      title={en ? 'Legal Notice' : 'Impressum'}
      updated={en ? 'Template – to be reviewed by a lawyer before going live.' : 'Vorlage – vor Veröffentlichung anwaltlich prüfen lassen.'}
    >
      <div className="mb-8 rounded-lg border border-gold/30 bg-gold/[0.06] p-4 text-sm text-navy/70">
        {en
          ? 'Note: This is sample/placeholder content for a template. Replace all data marked [...] with the real firm details and have it reviewed legally before publishing.'
          : 'Hinweis: Dies ist Beispiel-/Platzhalterinhalt einer Vorlage. Ersetzen Sie alle mit [...] markierten Angaben durch die echten Kanzleidaten und lassen Sie das Impressum vor Veröffentlichung rechtlich prüfen.'}
      </div>

      {en ? <ImpressumEN /> : <ImpressumDE />}
    </LegalShell>
  );
}

function ImpressumDE() {
  return (
    <>
      <h2>Angaben gemäß § 5 DDG</h2>
      <p>
        <strong>Hoffmann · Vogel Rechtsanwälte [Platzhalter]</strong>
        <br />
        Maximilianstraße 12
        <br />
        80539 München
      </p>
      <p>
        <strong>Vertreten durch:</strong>
        <br />
        Dr. Katharina Hoffmann, Michael Vogel [Platzhalter]
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon: +49 89 1234 567 [Platzhalter]
        <br />
        E-Mail: kanzlei@hoffmann-vogel.example [Platzhalter]
      </p>

      <h2>Umsatzsteuer-ID</h2>
      <p>
        Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:
        <br />
        DE000000000 [Platzhalter]
      </p>

      <h2>Berufsrechtliche Angaben</h2>
      <p>
        <strong>Gesetzliche Berufsbezeichnung:</strong> Rechtsanwältin / Rechtsanwalt
        (verliehen in der Bundesrepublik Deutschland)
      </p>
      <p>
        <strong>Zuständige Rechtsanwaltskammer:</strong> Rechtsanwaltskammer München,
        Tal 33, 80331 München [ggf. anpassen]
      </p>
      <p>
        <strong>Berufsrechtliche Regelungen:</strong> Es gelten insbesondere die
        Bundesrechtsanwaltsordnung (BRAO), die Berufsordnung für Rechtsanwälte (BORA),
        die Fachanwaltsordnung (FAO), das Rechtsanwaltsvergütungsgesetz (RVG) sowie die
        Berufsregeln der Rechtsanwälte der Europäischen Union (CCBE). Die Regelungen
        sind einsehbar unter{' '}
        <a href="https://www.brak.de" target="_blank" rel="noopener noreferrer">
          www.brak.de
        </a>
        .
      </p>
      <p>
        <strong>Berufshaftpflichtversicherung:</strong> [Name und Anschrift des
        Versicherers]. Räumlicher Geltungsbereich der Versicherung: Deutschland /
        Europäische Union [anpassen].
      </p>

      <h2>Verbraucherstreitbeilegung</h2>
      <p>
        Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor
        einer Verbraucherschlichtungsstelle teilzunehmen (§ 36 VSBG). Zuständig ist die{' '}
        <a href="https://www.s-d-r.org" target="_blank" rel="noopener noreferrer">
          Schlichtungsstelle der Rechtsanwaltschaft
        </a>
        , Neue Grünstraße 17, 10179 Berlin.
      </p>

      <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
      <p>Dr. Katharina Hoffmann, Anschrift wie oben [Platzhalter]</p>

      <h2>Haftung für Inhalte</h2>
      <p>
        Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den
        allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet,
        übermittelte oder gespeicherte fremde Informationen zu überwachen. Die Inhalte
        dieser Seiten wurden mit größter Sorgfalt erstellt; für die Richtigkeit,
        Vollständigkeit und Aktualität können wir jedoch keine Gewähr übernehmen.
      </p>

      <h2>Haftung für Links</h2>
      <p>
        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir
        keinen Einfluss haben. Für diese fremden Inhalte ist stets der jeweilige
        Anbieter verantwortlich. Bei Bekanntwerden von Rechtsverletzungen entfernen wir
        derartige Links umgehend.
      </p>

      <h2>Urheberrecht</h2>
      <p>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
        unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche
        gekennzeichnet. Vervielfältigung, Bearbeitung und Verbreitung außerhalb der
        Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung.
      </p>
    </>
  );
}

function ImpressumEN() {
  return (
    <>
      <h2>Information pursuant to § 5 DDG</h2>
      <p>
        <strong>Hoffmann · Vogel Rechtsanwälte [placeholder]</strong>
        <br />
        Maximilianstraße 12
        <br />
        80539 Munich, Germany
      </p>
      <p>
        <strong>Represented by:</strong>
        <br />
        Dr. Katharina Hoffmann, Michael Vogel [placeholder]
      </p>

      <h2>Contact</h2>
      <p>
        Phone: +49 89 1234 567 [placeholder]
        <br />
        Email: kanzlei@hoffmann-vogel.example [placeholder]
      </p>

      <h2>VAT ID</h2>
      <p>
        VAT identification number pursuant to § 27a German VAT Act:
        <br />
        DE000000000 [placeholder]
      </p>

      <h2>Professional information</h2>
      <p>
        <strong>Statutory professional title:</strong> Rechtsanwältin / Rechtsanwalt
        (attorney admitted in the Federal Republic of Germany)
      </p>
      <p>
        <strong>Competent bar association:</strong> Rechtsanwaltskammer München (Munich
        Bar Association), Tal 33, 80331 Munich [adjust if applicable]
      </p>
      <p>
        <strong>Professional regulations:</strong> In particular the Federal Lawyers&apos;
        Act (BRAO), the Code of Professional Conduct (BORA), the Specialist Lawyers&apos;
        Regulation (FAO), the Lawyers&apos; Remuneration Act (RVG) and the CCBE Code of
        Conduct. Available at{' '}
        <a href="https://www.brak.de" target="_blank" rel="noopener noreferrer">
          www.brak.de
        </a>
        .
      </p>
      <p>
        <strong>Professional liability insurance:</strong> [name and address of insurer].
        Geographical scope of cover: Germany / European Union [adjust].
      </p>

      <h2>Consumer dispute resolution</h2>
      <p>
        We are neither willing nor obliged to participate in dispute resolution
        proceedings before a consumer arbitration board (§ 36 VSBG). The competent body
        is the{' '}
        <a href="https://www.s-d-r.org" target="_blank" rel="noopener noreferrer">
          Arbitration Board of the German Bar
        </a>
        , Neue Grünstraße 17, 10179 Berlin.
      </p>

      <h2>Liability for content, links &amp; copyright</h2>
      <p>
        As a service provider we are responsible for our own content on these pages under
        the general laws. Content was created with great care, but no guarantee can be
        given for its accuracy, completeness or timeliness. We have no influence over the
        content of external linked sites; the respective provider is always responsible.
        Content and works created by the site operators are subject to German copyright
        law.
      </p>
    </>
  );
}
