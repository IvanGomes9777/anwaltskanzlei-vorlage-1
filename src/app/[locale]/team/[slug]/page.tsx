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

  const c = attorney.de;

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-sand-50">
        <div className="container-content py-16 md:py-24">
          <Link href="/#team" className="text-sm text-navy/55 transition-colors hover:text-gold-600">
            ← Zum Team
          </Link>

          <div className="mt-8 grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src={attorney.img}
                  alt={attorney.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-gold-600">
                  {c.role}
                </p>
                <h1 className="mt-3 font-serif text-4xl font-semibold text-navy md:text-5xl">
                  {attorney.name}
                </h1>
                <p className="mt-2 text-navy/55">{c.area}</p>
                <div className="hairline-gold mt-6" />

                {c.vita.map((p, i) => (
                  <p key={i} className="mt-5 leading-relaxed text-navy/75">
                    {p}
                  </p>
                ))}

                <h2 className="mt-10 font-serif text-lg font-semibold text-navy">
                  Schwerpunkte
                </h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {c.focus.map((f) => (
                    <li
                      key={f}
                      className="rounded-full border border-navy/15 px-4 py-1.5 text-sm text-navy/70"
                    >
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/#kontakt"
                  className="mt-10 inline-block rounded-md bg-navy px-7 py-3.5 text-sm font-medium text-sand-50 transition-colors hover:bg-navy-700"
                >
                  Erstberatung anfragen
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
