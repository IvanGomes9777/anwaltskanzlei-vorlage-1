import { setRequestLocale } from 'next-intl/server';
import LegalShell from '@/components/legal/LegalShell';

export default async function ImpressumPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <LegalShell
      title="Impressum"
      updated="Vorlage – vor Veröffentlichung anwaltlich prüfen lassen."
    >
      <div className="mb-8 rounded-lg border border-white/30 bg-white/[0.06] p-4 text-sm text-black/70">
        Hinweis: Dies ist Beispiel-/Platzhalterinhalt einer Vorlage. Ersetzen Sie alle mit [...] markierten Angaben durch die echten Kanzleidaten und lassen Sie das Impressum vor Veröffentlichung rechtlich prüfen.
      </div>

      <ImpressumDE />
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
