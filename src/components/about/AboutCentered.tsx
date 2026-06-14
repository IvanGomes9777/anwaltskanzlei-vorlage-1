import { useTranslations } from 'next-intl';
import Reveal from '@/components/Reveal';

export default function AboutCentered() {
  const t = useTranslations('about');

  const values = [
    { t: t('val1t'), d: t('val1d') },
    { t: t('val2t'), d: t('val2d') },
    { t: t('val3t'), d: t('val3d') },
    { t: t('val4t'), d: t('val4d') },
  ];

  return (
    <section className="bg-sand-50">
      <div className="container-content py-24 text-center md:py-28">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-[0.32em] text-gold-600">
            {t('eyebrow')}
          </span>
          <h2 className="mx-auto mt-5 max-w-3xl font-serif text-4xl font-semibold leading-tight text-navy md:text-5xl">
            {t('heading')}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-navy/65">
            {t('lead')}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-10 border-t border-navy/12 pt-12 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.t} delay={i * 0.08}>
              <div className="text-center">
                <span className="mx-auto block h-px w-10 bg-gold" />
                <h3 className="mt-5 font-serif text-xl font-semibold text-navy">
                  {v.t}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy/60">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
