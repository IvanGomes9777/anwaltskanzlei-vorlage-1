import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Reveal from '@/components/Reveal';
import { useMembers } from './TeamCards';

export default function TeamDark() {
  const t = useTranslations('team');
  const members = useMembers();

  return (
    <section className="relative overflow-hidden bg-navy-900 text-sand-100">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          background:
            'radial-gradient(55% 55% at 15% 0%, rgba(194,161,77,0.16) 0%, transparent 60%)',
        }}
      />
      <div className="container-content relative py-24 md:py-28">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.24em] text-gold-400">
            <span className="h-px w-8 bg-gold-400" />
            {t('eyebrow')}
          </span>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
            {t('heading')}
          </h2>
          <p className="mt-5 max-w-xl text-lg text-sand-100/65">{t('intro')}</p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.08}>
              <article className="group rounded-xl border border-sand-100/12 bg-sand-100/[0.03] p-3 transition-colors hover:border-gold-400/40">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                  <Image
                    src={m.img}
                    alt={m.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="px-2 pb-1 pt-4">
                  <p className="text-xs uppercase tracking-wide text-gold-400">{m.role}</p>
                  <h3 className="mt-1 font-serif text-lg font-semibold">{m.name}</h3>
                  <p className="mt-1 text-sm text-sand-100/55">{m.area}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
