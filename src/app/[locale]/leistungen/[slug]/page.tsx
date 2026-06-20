import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import { practices, getPractice } from '@/content/practice';

export function generateStaticParams() {
  return practices.map((p) => ({ slug: p.slug }));
}

export default async function PracticePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const practice = getPractice(slug);
  if (!practice) notFound();

  const c = practice.de;

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-white">
        <article className="container-content max-w-3xl py-16 md:py-24">
          <Link
            href="/#leistungen"
            className="text-sm text-[#728690] transition-opacity hover:opacity-80"
          >
            ← Alle Rechtsgebiete
          </Link>

          <p className="mt-6 text-xs font-medium uppercase tracking-[0.24em] text-[#728690]">
            {c.tagline}
          </p>
          <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-[#728690] md:text-5xl">
            {c.title}
          </h1>
          <div className="mt-6 h-px w-16 bg-[#728690]" />
          <p className="mt-8 text-lg leading-relaxed text-black/80">{c.intro}</p>

          <div className="mt-12 space-y-10">
            {c.sections.map((s, i) => (
              <Reveal key={i} delay={0.05}>
                <section>
                  {s.heading && (
                    <h2 className="font-serif text-2xl font-semibold text-[#728690]">
                      {s.heading}
                    </h2>
                  )}
                  {s.paragraphs?.map((p, j) => (
                    <p key={j} className="mt-4 leading-relaxed text-black/80">
                      {p}
                    </p>
                  ))}
                  {s.bullets && (
                    <ul className="mt-5 space-y-2.5">
                      {s.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-3 text-black/80"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#728690]" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              </Reveal>
            ))}
          </div>

          {/* Kontakt-Abschluss */}
          <div className="mt-14 rounded-2xl border border-[#728690] bg-white p-8 text-center">
            <h2 className="font-serif text-2xl font-semibold text-[#728690]">
              Lassen Sie Ihren Fall prüfen
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-black/75">
              Je früher wir eingreifen, desto größer sind die Möglichkeiten, den Verlauf
              des Verfahrens zu beeinflussen. Wir zeigen Ihnen klar und realistisch, welche
              Optionen Sie haben.
            </p>
            <Link
              href="/#kontakt"
              className="mt-6 inline-block rounded-md bg-[#728690] px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#5d6e77]"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
