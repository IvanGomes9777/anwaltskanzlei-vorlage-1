import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
