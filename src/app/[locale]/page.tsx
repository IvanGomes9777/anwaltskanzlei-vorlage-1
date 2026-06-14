import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';

const swatches = [
  { name: 'Navy', hex: '#0f1b2d', className: 'bg-navy text-sand-100' },
  { name: 'Charcoal', hex: '#16263c', className: 'bg-navy-700 text-sand-100' },
  { name: 'Gold', hex: '#c2a14d', className: 'bg-gold text-navy' },
  { name: 'Sand', hex: '#f7f4ee', className: 'bg-sand-100 text-navy border border-navy/10' },
  { name: 'Ink', hex: '#11161d', className: 'bg-ink text-sand-100' },
];

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <HomeContent />;
}

function HomeContent() {
  const t = useTranslations();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <section className="container-content py-24 md:py-32">
          <Reveal>
            <span className="inline-block rounded-full border border-gold/40 px-3 py-1 text-xs uppercase tracking-[0.2em] text-gold-600">
              {t('scaffold.badge')}
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-3xl font-serif text-5xl font-semibold leading-[1.05] text-navy md:text-7xl">
              {t('scaffold.title')}
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="hairline-gold mt-8" />
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-navy/70">
              {t('scaffold.lead')}
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-16">
              <h2 className="font-serif text-2xl font-semibold text-navy">
                {t('scaffold.tokensTitle')}
              </h2>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-5">
                {swatches.map((s) => (
                  <div
                    key={s.name}
                    className={`flex h-28 flex-col justify-end rounded-lg p-4 ${s.className}`}
                  >
                    <span className="text-sm font-medium">{s.name}</span>
                    <span className="text-xs opacity-70">{s.hex}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <p className="mt-16 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.18em] text-gold-600">
              <span className="hairline-gold" />
              {t('scaffold.next')}
            </p>
          </Reveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}
