import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Reveal from '@/components/Reveal';
import { attorneys } from '@/content/attorneys';

export function useMembers() {
  const t = useTranslations('team');
  return [
    { img: '/team/member-1.webp', name: t('m1name'), role: t('m1role'), area: t('m1area'), slug: 'katharina-hoffmann' },
    { img: '/team/member-2.webp', name: t('m2name'), role: t('m2role'), area: t('m2area'), slug: 'michael-vogel' },
    { img: '/team/member-3.webp', name: t('m3name'), role: t('m3role'), area: t('m3area'), slug: 'julia-brandt' },
    { img: '/team/member-4.webp', name: t('m4name'), role: t('m4role'), area: t('m4area'), slug: 'stefan-keller' },
  ];
}

export default function TeamCards() {
  const t = useTranslations('team');

  return (
    <section className="flex min-h-[calc(100vh-5rem)] flex-col justify-center bg-[#728690]">
      <div className="container-content py-24 md:py-28">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-[0.24em] text-black">
            {t('eyebrow')}
          </span>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white md:text-5xl">
            {t('heading')}
          </h2>
          <p className="mt-5 max-w-xl text-lg text-black/65">{t('intro')}</p>
        </Reveal>

        <div className="mt-16 flex flex-col gap-16 md:gap-24">
          {attorneys.map((m, i) => (
            <Reveal key={m.slug} delay={0.05}>
              <Link
                href={`/team/${m.slug}`}
                className="group grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-14"
              >
                <div
                  className={`relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-xl shadow-black/20 ${
                    i % 2 === 1 ? 'md:order-2' : ''
                  }`}
                >
                  <Image
                    src={m.img}
                    alt={m.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                  <p className="text-xs uppercase tracking-[0.24em] text-black/70">
                    {m.role}
                  </p>
                  <h3 className="mt-3 font-serif text-3xl font-semibold leading-tight text-white transition-opacity group-hover:opacity-80 md:text-4xl">
                    {m.name}
                  </h3>
                  <p className="mt-5 max-w-md text-lg leading-relaxed text-black/80">
                    {m.teaser}
                  </p>
                  <span className="mt-7 inline-flex items-center gap-2 rounded-md bg-black px-6 py-3 text-sm font-medium text-white transition-colors group-hover:bg-black/80">
                    Werdegang ansehen
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

