import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import AboutSplit from '@/components/about/AboutSplit';
import AboutCentered from '@/components/about/AboutCentered';
import AboutStatement from '@/components/about/AboutStatement';
import AboutValueCards from '@/components/about/AboutValueCards';
import AboutPhotoBand from '@/components/about/AboutPhotoBand';

export default async function AboutVariantsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <Gallery />;
}

function Gallery() {
  const t = useTranslations('variantsAbout');

  const variants = [
    { id: 'v1', name: t('v1Name'), desc: t('v1Desc'), node: <AboutSplit /> },
    { id: 'v2', name: t('v2Name'), desc: t('v2Desc'), node: <AboutCentered /> },
    { id: 'v3', name: t('v3Name'), desc: t('v3Desc'), node: <AboutStatement /> },
    { id: 'v4', name: t('v4Name'), desc: t('v4Desc'), node: <AboutValueCards /> },
    { id: 'v5', name: t('v5Name'), desc: t('v5Desc'), node: <AboutPhotoBand /> },
  ];

  return (
    <div className="bg-navy-900">
      <header className="sticky top-0 z-40 border-b border-sand-100/10 bg-navy-900/90 backdrop-blur">
        <div className="container-content flex flex-col gap-3 py-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="font-serif text-lg font-semibold text-sand-100">
              {t('heading')}
            </h1>
            <p className="max-w-2xl text-sm text-sand-100/55">{t('intro')}</p>
          </div>
          <nav className="flex flex-wrap gap-2">
            {variants.map((v, i) => (
              <a
                key={v.id}
                href={`#${v.id}`}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-sand-100/20 text-sm font-medium text-sand-100/80 transition-colors hover:border-gold hover:text-gold"
              >
                {i + 1}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {variants.map((v) => (
        <section key={v.id} id={v.id} className="scroll-mt-24">
          <div className="container-content flex items-baseline gap-3 py-5">
            <span className="font-serif text-sm font-semibold uppercase tracking-[0.18em] text-gold-400">
              {v.name}
            </span>
            <span className="text-sm text-sand-100/45">— {v.desc}</span>
          </div>
          <div className="overflow-hidden border-y border-sand-100/10">{v.node}</div>
        </section>
      ))}
    </div>
  );
}
