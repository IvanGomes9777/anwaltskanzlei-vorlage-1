import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Reveal from '@/components/Reveal';
import { useMembers } from './TeamCards';

export default function TeamOverlay() {
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
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.08}>
              <article className="group relative aspect-[3/4] overflow-hidden rounded-xl">
                <Image
                  src={m.img}
                  alt={m.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-sand-100">
                  <p className="text-xs uppercase tracking-wide text-gold-400">{m.role}</p>
                  <h3 className="mt-1 font-serif text-lg font-semibold">{m.name}</h3>
                  <p className="mt-1 max-h-0 overflow-hidden text-sm text-sand-100/80 opacity-0 transition-all duration-500 group-hover:max-h-12 group-hover:opacity-100">
                    {m.area}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
