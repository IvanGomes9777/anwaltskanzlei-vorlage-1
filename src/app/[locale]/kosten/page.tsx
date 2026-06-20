import { setRequestLocale } from 'next-intl/server';
import LegalShell from '@/components/legal/LegalShell';

export default async function KostenPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <LegalShell
      title="Kosten"
      updated="Transparente Vergütung – fair für Mandanten und Kanzlei."
    >
      <h2>Was kostet eine gute Strafverteidigung?</h2>
      <p>
        Anwaltliche Leistungen lassen sich grundsätzlich auf zwei Wegen abrechnen:
        entweder nach den gesetzlichen Gebühren des Rechtsanwaltsvergütungsgesetzes
        (RVG) oder über eine individuelle Vergütungsvereinbarung. Eine solche
        Vereinbarung können Mandant und Anwalt jederzeit treffen – sie ist allerdings
        an gesetzliche Vorgaben gebunden (§ 49b Bundesrechtsanwaltsordnung, §§ 3a bis 4b
        RVG). So muss sie in Textform geschlossen werden und darf nicht in der Vollmacht
        des Rechtsanwalts enthalten sein. Ein Erfolgshonorar ist – von wenigen Ausnahmen
        abgesehen – nicht zulässig.
      </p>

      <h2>Warum die gesetzlichen Gebühren oft nicht im Interesse der Mandanten sind</h2>
      <p>
        Die gesetzliche Abrechnung hat einen entscheidenden Haken: Wirtschaftlich
        lohnend wird sie für den Anwalt vor allem dann, wenn besonders viele
        Hauptverhandlungstage anfallen. Genau solche – meist öffentlichen – Termine, bei
        denen der Angeklagte anwesend sein muss, möchten wir unseren Mandanten nach
        Möglichkeit ersparen. Wir setzen deshalb konsequent darauf, eine
        Gerichtsverhandlung durch eine frühzeitige, schriftliche Verteidigung gar nicht
        erst nötig werden zu lassen. Das spart unseren Mandanten Zeit und Geld.
      </p>

      <h2>Unser Modell: die faire Vergütungsvereinbarung</h2>
      <p>
        Aus diesem Grund schließen wir mit unseren Mandanten in aller Regel eine
        Vergütungsvereinbarung. Für beide Seiten ist das die fairste Lösung: Abgerechnet
        wird allein der tatsächliche Aufwand, den Ihr Mandat erfordert – und nicht die
        Zahl der Verhandlungstage.
      </p>
    </LegalShell>
  );
}
