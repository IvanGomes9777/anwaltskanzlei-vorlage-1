import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import TeamCards from '@/components/team/TeamCards';
import TeamLargeGrid from '@/components/team/TeamLargeGrid';
import TeamList from '@/components/team/TeamList';
import TeamOverlay from '@/components/team/TeamOverlay';
import TeamDark from '@/components/team/TeamDark';

export default async function TeamVariantsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <Gallery />;
}

function Gallery() {
  const t = useTranslations('variantsTeam');

  const variants = [
    { id: 'v1', name: t('v1Name'), desc: t('v1Desc'), node: <TeamCards /> },
    { id: 'v2', name: t('v2Name'), desc: t('v2Desc'), node: <TeamLargeGrid /> },
    { id: 'v3', name: t('v3Name'), desc: t('v3Desc'), node: <TeamList /> },
    { id: 'v4', name: t('v4Name'), desc: t('v4Desc'), node: <TeamOverlay /> },
    { id: 'v5', name: t('v5Name'), desc: t('v5Desc'), node: <TeamDark /> },
  ];

  return (
    <div className="bg-[#728690]">
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

      {variants.map((v) => (
        <section key={v.id} id={v.id} className="scroll-mt-24">
          <div className="container-content flex items-baseline gap-3 py-5">
            <span className="font-serif text-sm font-semibold uppercase tracking-[0.18em] text-black">
              {v.name}
            </span>
            <span className="text-sm text-black/45">— {v.desc}</span>
          </div>
          <div className="overflow-hidden border-y border-black/10">{v.node}</div>
        </section>
      ))}
    </div>
  );
}
