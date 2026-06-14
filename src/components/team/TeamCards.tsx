import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Reveal from '@/components/Reveal';

export function useMembers() {
  const t = useTranslations('team');
  return [
    { img: '/team/member-1.webp', name: t('m1name'), role: t('m1role'), area: t('m1area') },
    { img: '/team/member-2.webp', name: t('m2name'), role: t('m2role'), area: t('m2area') },
    { img: '/team/member-3.webp', name: t('m3name'), role: t('m3role'), area: t('m3area') },
    { img: '/team/member-4.webp', name: t('m4name'), role: t('m4role'), area: t('m4area') },
  ];
}

export default function TeamCards() {
  const t = useTranslations('team');
  const members = useMembers();

  return (
    <section className="bg-sand-50">
      <div className="container-content py-24 md:py-28">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-[0.24em] text-gold-600">
            {t('eyebrow')}
          </span>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-navy md:text-5xl">
            {t('heading')}
          </h2>
          <p className="mt-5 max-w-xl text-lg text-navy/65">{t('intro')}</p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.08}>
              <article className="group">
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                  <Image
                    src={m.img}
                    alt={m.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <p className="text-xs uppercase tracking-wide text-gold-600">
                    {m.role}
                  </p>
                  <h3 className="mt-1 font-serif text-lg font-semibold text-navy">
                    {m.name}
                  </h3>
                  <p className="mt-1 text-sm text-navy/55">{m.area}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-xs text-navy/40">{t('placeholder')}</p>
      </div>
    </section>
  );
}
