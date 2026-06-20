import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import HeroTrust from '@/components/heroes/HeroTrust';
import HeroEditorial from '@/components/heroes/HeroEditorial';
import HeroDark from '@/components/heroes/HeroDark';
import HeroSplitPhoto from '@/components/heroes/HeroSplitPhoto';
import HeroTypographic from '@/components/heroes/HeroTypographic';
import HeroBento from '@/components/heroes/HeroBento';
import HeroImageBg from '@/components/heroes/HeroImageBg';
import HeroIndex from '@/components/heroes/HeroIndex';
import HeroMonogram from '@/components/heroes/HeroMonogram';
import HeroTwoTone from '@/components/heroes/HeroTwoTone';

export default async function HeroVariantsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <Gallery />;
}

function Gallery() {
  const t = useTranslations('variants');

  const variants = [
    { id: 'v1', name: t('v1Name'), desc: t('v1Desc'), node: <HeroTrust /> },
    { id: 'v2', name: t('v2Name'), desc: t('v2Desc'), node: <HeroEditorial /> },
    { id: 'v3', name: t('v3Name'), desc: t('v3Desc'), node: <HeroDark /> },
    { id: 'v4', name: t('v4Name'), desc: t('v4Desc'), node: <HeroSplitPhoto /> },
    { id: 'v5', name: t('v5Name'), desc: t('v5Desc'), node: <HeroTypographic /> },
    { id: 'v6', name: t('v6Name'), desc: t('v6Desc'), node: <HeroBento /> },
    { id: 'v7', name: t('v7Name'), desc: t('v7Desc'), node: <HeroImageBg /> },
    { id: 'v8', name: t('v8Name'), desc: t('v8Desc'), node: <HeroIndex /> },
    { id: 'v9', name: t('v9Name'), desc: t('v9Desc'), node: <HeroMonogram /> },
    { id: 'v10', name: t('v10Name'), desc: t('v10Desc'), node: <HeroTwoTone /> },
  ];

  return (
    <div className="bg-[#728690]">
      {/* Sticky Vergleichsleiste */}
      <header className="sticky top-0 z-40 border-b border-black/10 bg-[#728690]/90 backdrop-blur">
        <div className="container-content flex flex-col gap-3 py-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="font-serif text-lg font-semibold text-black">
              {t('heading')}
            </h1>
            <p className="max-w-2xl text-sm text-black/55">{t('intro')}</p>
          </div>
          <nav className="flex flex-wrap gap-2">
            {variants.map((v, i) => (
              <a
                key={v.id}
                href={`#${v.id}`}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-black/20 text-sm font-medium text-black/80 transition-colors hover:border-white hover:text-black"
              >
                {i + 1}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Varianten */}
      {variants.map((v) => (
        <section key={v.id} id={v.id} className="scroll-mt-24">
          <div className="container-content flex items-baseline gap-3 py-5">
            <span className="font-serif text-sm font-semibold uppercase tracking-[0.18em] text-black">
              {v.name}
            </span>
            <span className="text-sm text-black/45">— {v.desc}</span>
          </div>
          <div className="overflow-hidden border-y border-black/10">
            {v.node}
          </div>
        </section>
      ))}

      <div className="container-content py-16 text-center text-sm text-black/50">
        ↑ {t('intro')}
      </div>
    </div>
  );
}
