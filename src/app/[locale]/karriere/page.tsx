import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';

const content = {
  de: {
    eyebrow: 'Karriere',
    heading: 'Werden Sie Teil des Teams.',
    intro:
      'Wir suchen Menschen, die Recht verständlich machen und Mandanten wirklich weiterhelfen wollen. Bei uns erwartet Sie ein kollegiales Umfeld mit echter Verantwortung.',
    benefitsTitle: 'Was wir bieten',
    benefits: [
      ['Flexible Arbeitszeiten', 'Vereinbarkeit von Beruf und Privatleben.'],
      ['Moderne Kanzlei', 'Digitale Akten, zentrale Lage in München.'],
      ['Echte Verantwortung', 'Eigene Mandate von Anfang an.'],
      ['Weiterbildung', 'Förderung von Fachanwaltstiteln & Fortbildungen.'],
    ],
    openTitle: 'Offene Stellen',
    positions: [
      ['Rechtsanwältin / Rechtsanwalt (m/w/d)', 'Arbeits- oder Familienrecht · Vollzeit'],
      ['Referendariat / Wahlstation', 'Alle Rechtsgebiete · flexibel'],
      ['Rechtsanwaltsfachangestellte/r (m/w/d)', 'Vollzeit oder Teilzeit'],
    ],
    ctaTitle: 'Interesse?',
    ctaText: 'Senden Sie uns Ihre Bewerbung – wir freuen uns darauf.',
    cta: 'Jetzt bewerben',
    note: 'Beispiel-Stellen für diese Vorlage.',
  },
};

export default async function KarrierePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = content.de;

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-[#728690] text-black">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.4]"
            style={{
              background:
                'radial-gradient(60% 60% at 20% 0%, rgba(114,134,144,0.16) 0%, transparent 60%)',
            }}
          />
          <div className="container-content relative py-20 md:py-28">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-black">
              {c.eyebrow}
            </p>
            <h1 className="mt-3 max-w-3xl font-serif text-4xl font-semibold leading-tight md:text-6xl">
              {c.heading}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-black/75">
              {c.intro}
            </p>
          </div>
        </section>

        <section className="bg-[#728690]">
          <div className="container-content py-20 md:py-24">
            <h2 className="font-serif text-2xl font-semibold text-white">
              {c.benefitsTitle}
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {c.benefits.map(([t, d], i) => (
                <Reveal key={t} delay={i * 0.08}>
                  <div className="h-full rounded-xl border border-black/10 bg-[#728690] p-6">
                    <span className="block h-px w-10 bg-white" />
                    <h3 className="mt-4 font-serif text-lg font-semibold text-white">
                      {t}
                    </h3>
                    <p className="mt-2 text-sm text-black/60">{d}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <h2 className="mt-20 font-serif text-2xl font-semibold text-white">
              {c.openTitle}
            </h2>
            <div className="mt-8 space-y-3">
              {c.positions.map(([t, d], i) => (
                <Reveal key={t} delay={i * 0.06}>
                  <div className="group flex items-center justify-between gap-4 rounded-xl border border-black/10 bg-[#728690] p-6 transition-colors hover:border-white/40">
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-white">{t}</h3>
                      <p className="mt-1 text-sm text-black/55">{d}</p>
                    </div>
                    <Link
                      href="/#kontakt"
                      className="shrink-0 text-sm font-medium text-black transition-transform group-hover:translate-x-1"
                    >
                      {c.cta} →
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="mt-6 text-xs text-black/40">{c.note}</p>

            <div className="mt-16 rounded-2xl bg-black p-8 text-center text-white md:p-12">
              <h2 className="font-serif text-2xl font-semibold">{c.ctaTitle}</h2>
              <p className="mt-3 text-white/75">{c.ctaText}</p>
              <Link
                href="/#kontakt"
                className="mt-6 inline-block rounded-md bg-white px-7 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-white"
              >
                {c.cta}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
