import Image from 'next/image';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import { attorneys, getAttorney } from '@/content/attorneys';

export function generateStaticParams() {
  return attorneys.map((a) => ({ slug: a.slug }));
}

export default async function AttorneyPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const attorney = getAttorney(slug);
  if (!attorney) notFound();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-white">
        <div className="container-content max-w-3xl py-16 md:py-24">
          <Link
            href="/#team"
            className="text-sm text-[#728690] transition-opacity hover:opacity-80"
          >
            ← Zu den Anwälten
          </Link>

          <div className="mt-8 grid gap-8 sm:grid-cols-[280px_1fr] sm:items-end">
            <Reveal>
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl">
                <Image
                  src={attorney.img}
                  alt={attorney.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 280px"
                  className="object-cover"
                  priority
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-black/70">
                  {attorney.role}
                </p>
                <h1 className="mt-2 font-serif text-4xl font-semibold text-[#728690] md:text-5xl">
                  {attorney.name}
                </h1>
              </div>
            </Reveal>
          </div>

          <div className="mt-12 h-px w-16 bg-[#728690]" />
          <h2 className="mt-10 font-serif text-2xl font-semibold text-[#728690]">
            Werdegang
          </h2>

          <div className="mt-8 border-l-2 border-[#728690]/30 pl-7">
            {attorney.werdegang.map((entry, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="relative pb-9 last:pb-0">
                  <span className="absolute -left-[35px] top-1 h-3 w-3 rounded-full border-2 border-[#728690] bg-white" />
                  <p className="font-serif text-lg font-semibold text-[#728690]">
                    {entry.year}
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {entry.items.map((it) => (
                      <li key={it} className="leading-relaxed text-black/80">
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Kontakt-Abschluss */}
          <div className="mt-14 rounded-2xl border border-[#728690] bg-white p-8 text-center">
            <h2 className="font-serif text-2xl font-semibold text-[#728690]">
              Persönliches Gespräch vereinbaren
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-black/75">
              Schildern Sie uns Ihr Anliegen – wir melden uns zeitnah und besprechen die
              nächsten Schritte.
            </p>
            <Link
              href="/#kontakt"
              className="mt-6 inline-block rounded-md bg-[#728690] px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#5d6e77]"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
