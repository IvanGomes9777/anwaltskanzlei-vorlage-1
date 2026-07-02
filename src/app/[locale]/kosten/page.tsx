import { setRequestLocale } from 'next-intl/server';
import { pageMetadata } from '@/lib/metadata';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = pageMetadata({
  path: '/kosten',
  title: 'Kosten & Vergütung',
  description:
    'Transparente Vergütung in der Strafverteidigung: gesetzliche Gebühren nach RVG oder faire Vergütungsvereinbarung – inkl. Mandatsbedingungen und Widerrufsbelehrung.',
});

export default async function KostenPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-white">
        <div className="container-content max-w-3xl py-20 md:py-24">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#728690]">
            Vergütung
          </p>
          <h1 className="mt-3 font-serif text-4xl font-semibold text-[#728690] md:text-5xl">
            Kosten
          </h1>
          <p className="mt-4 text-lg text-black/70">
            Transparente Vergütung – fair für Mandanten und Kanzlei.
          </p>
          <div className="mt-6 h-px w-16 bg-[#728690]" />

          <div className="mt-12 space-y-10">
            <section>
              <h2 className="font-serif text-2xl font-semibold text-[#728690]">
                Was kostet eine gute Strafverteidigung?
              </h2>
              <p className="mt-4 leading-relaxed text-black/80">
                Anwaltliche Leistungen lassen sich grundsätzlich auf zwei Wegen
                abrechnen: entweder nach den gesetzlichen Gebühren des
                Rechtsanwaltsvergütungsgesetzes (RVG) oder über eine individuelle
                Vergütungsvereinbarung. Eine solche Vereinbarung können Mandant und
                Anwalt jederzeit treffen – sie ist allerdings an gesetzliche Vorgaben
                gebunden (§ 49b Bundesrechtsanwaltsordnung, §§ 3a bis 4b RVG). So muss sie
                in Textform geschlossen werden und darf nicht in der Vollmacht des
                Rechtsanwalts enthalten sein. Ein Erfolgshonorar ist – von wenigen
                Ausnahmen abgesehen – nicht zulässig.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-[#728690]">
                Warum die gesetzlichen Gebühren oft nicht im Interesse der Mandanten sind
              </h2>
              <p className="mt-4 leading-relaxed text-black/80">
                Die gesetzliche Abrechnung hat einen entscheidenden Haken: Wirtschaftlich
                lohnend wird sie für den Anwalt vor allem dann, wenn besonders viele
                Hauptverhandlungstage anfallen. Genau solche – meist öffentlichen –
                Termine, bei denen der Angeklagte anwesend sein muss, möchten wir unseren
                Mandanten nach Möglichkeit ersparen. Wir setzen deshalb konsequent darauf,
                eine Gerichtsverhandlung durch eine frühzeitige, schriftliche Verteidigung
                gar nicht erst nötig werden zu lassen. Das spart unseren Mandanten Zeit und
                Geld.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-[#728690]">
                Unser Modell: die faire Vergütungsvereinbarung
              </h2>
              <p className="mt-4 leading-relaxed text-black/80">
                Aus diesem Grund schließen wir mit unseren Mandanten in aller Regel eine
                Vergütungsvereinbarung. Für beide Seiten ist das die fairste Lösung:
                Abgerechnet wird allein der tatsächliche Aufwand, den Ihr Mandat erfordert
                – und nicht die Zahl der Verhandlungstage.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-[#728690]">
                Mandatsbedingungen
              </h2>
              <p className="mt-4 leading-relaxed text-black/80">
                <strong>Zustandekommen des Mandats:</strong> Ein Mandat kommt erst durch
                ausdrückliche Annahme durch die Kanzlei zustande – nicht bereits durch
                das Absenden einer Anfrage über das Kontaktformular oder per E-Mail.
                Bitte beachten Sie: Durch eine bloße Anfrage werden keine Fristen
                gewahrt.
              </p>
              <p className="mt-4 leading-relaxed text-black/80">
                <strong>Verschwiegenheit:</strong> Wir unterliegen der gesetzlichen
                Verschwiegenheitspflicht (§ 43a Abs. 2 BRAO, § 2 BORA). Alle
                Mitarbeitenden sind entsprechend verpflichtet.
              </p>
              <p className="mt-4 leading-relaxed text-black/80">
                <strong>Kommunikation:</strong> Sofern Sie uns per unverschlüsselter
                E-Mail kontaktieren, gehen wir von Ihrem Einverständnis mit dieser
                Kommunikationsform aus. Für besonders sensible Inhalte empfehlen wir die
                Übergabe in Person, per Post oder eine verschlüsselte Übermittlung.
              </p>
              <p className="mt-4 leading-relaxed text-black/80">
                <strong>Handakten:</strong> Handakten werden nach § 50 Abs. 1 BRAO für
                die Dauer von sechs Jahren nach Beendigung des Mandats aufbewahrt.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-[#728690]">
                Widerrufsbelehrung für Verbraucher
              </h2>
              <p className="mt-4 leading-relaxed text-black/80">
                Wird der Anwaltsvertrag ausschließlich über Fernkommunikationsmittel
                (z. B. Telefon, E-Mail, Kontaktformular) oder außerhalb von
                Geschäftsräumen geschlossen, steht Verbraucherinnen und Verbrauchern ein
                gesetzliches Widerrufsrecht nach §§ 312b, 312c, 355 BGB zu.
              </p>
              <p className="mt-4 leading-relaxed text-black/80">
                <strong>Widerrufsrecht:</strong> Sie haben das Recht, binnen vierzehn
                Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die
                Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.
                Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (Lübbersmann
                Rechtsanwälte, Südstraße 11, 48153 Münster, E-Mail:
                luebbersmann@luebbersmann-rechtsanwaelte.de) mittels einer eindeutigen
                Erklärung (z. B. ein mit der Post versandter Brief oder eine E-Mail)
                über Ihren Entschluss informieren, diesen Vertrag zu widerrufen. Zur
                Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über
                die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.
              </p>
              <p className="mt-4 leading-relaxed text-black/80">
                <strong>Folgen des Widerrufs:</strong> Wenn Sie diesen Vertrag
                widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten
                haben, unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag
                zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf bei uns
                eingegangen ist. Haben Sie verlangt, dass die Dienstleistung während der
                Widerrufsfrist beginnen soll, so haben Sie uns einen angemessenen Betrag
                zu zahlen, der dem Anteil der bis zur Ausübung des Widerrufsrechts
                bereits erbrachten Dienstleistungen im Vergleich zum Gesamtumfang der im
                Vertrag vorgesehenen Dienstleistungen entspricht.
              </p>
              <p className="mt-4 leading-relaxed text-black/80">
                <strong>Erlöschen des Widerrufsrechts:</strong> Das Widerrufsrecht
                erlischt, wenn wir die Dienstleistung vollständig erbracht haben und mit
                der Ausführung erst begonnen haben, nachdem Sie dazu Ihre ausdrückliche
                Zustimmung gegeben und gleichzeitig Ihre Kenntnis davon bestätigt haben,
                dass Sie Ihr Widerrufsrecht bei vollständiger Vertragserfüllung durch
                uns verlieren (§ 356 Abs. 4 BGB).
              </p>
              <p className="mt-4 leading-relaxed text-black/80">
                <strong>Muster-Widerrufsformular:</strong> Wenn Sie den Vertrag
                widerrufen wollen, können Sie folgende Formulierung verwenden: „Hiermit
                widerrufe(n) ich/wir den von mir/uns abgeschlossenen Vertrag über die
                Erbringung der folgenden Dienstleistung: … Bestellt am: … Name und
                Anschrift des/der Verbraucher(s): … Datum, Unterschrift (nur bei
                Mitteilung auf Papier)."
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
