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
      <main className="flex-1">
        {/* Kopf */}
        <section className="relative overflow-hidden bg-[#728690] text-black">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.4]"
            style={{
              background:
                'radial-gradient(60% 60% at 80% 0%, rgba(114,134,144,0.16) 0%, transparent 60%)',
            }}
          />
          <div className="container-content relative py-20 md:py-28">
            <Link href="/#leistungen" className="text-sm text-black/60 transition-colors hover:text-black">
              ← Alle Rechtsgebiete
            </Link>
            <p className="mt-6 text-xs font-medium uppercase tracking-[0.24em] text-black">
              {c.tagline}
            </p>
            <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight md:text-6xl">
              {c.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-black/75">
              {c.intro}
            </p>
          </div>
        </section>

        {/* Inhalt */}
        <section className="bg-[#728690]">
          <div className="container-content grid gap-12 py-20 md:grid-cols-[1fr_0.8fr] md:py-24">
            <Reveal>
              <h2 className="font-serif text-2xl font-semibold text-white">
                Was wir übernehmen
              </h2>
              <ul className="mt-6 space-y-3">
                {c.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 border-b border-black/10 pb-3 text-black/75">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-black/10 bg-[#728690] p-7">
                <h3 className="font-serif text-lg font-semibold text-white">
                  Unsere Arbeitsweise
                </h3>
                <p className="mt-3 leading-relaxed text-black/70">{c.approach}</p>
                <Link
                  href="/#kontakt"
                  className="mt-6 inline-block rounded-md bg-black px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-black"
                >
                  Erstberatung anfragen
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
