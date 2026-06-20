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

        <div className="mx-auto mt-14 flex max-w-4xl flex-col gap-14">
          {attorneys.map((m, i) => (
            <Reveal key={m.slug} delay={i * 0.08}>
              <Link
                href={`/team/${m.slug}`}
                className="group grid grid-cols-1 items-center gap-8 sm:grid-cols-[320px_1fr]"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl">
                  <Image
                    src={m.img}
                    alt={m.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 320px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-black/70">
                    {m.role}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl font-semibold text-white transition-opacity group-hover:opacity-80 md:text-3xl">
                    {m.name}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-black">
                    Werdegang ansehen
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-xs text-black/40">{t('placeholder')}</p>
      </div>
    </section>
  );
}

