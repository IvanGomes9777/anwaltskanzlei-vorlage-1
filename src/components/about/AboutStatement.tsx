import { useTranslations } from 'next-intl';
import Reveal from '@/components/Reveal';

export default function AboutStatement() {
  const t = useTranslations('about');
  const h = useTranslations('hero');

  const stats = [
    { v: h('stat1Value'), l: h('stat1Label') },
    { v: h('stat3Value'), l: h('stat3Label') },
    { v: h('stat2Value'), l: h('stat2Label') },
  ];

  return (
    <section className="bg-sand-50">
      <div className="container-content grid gap-14 py-24 md:grid-cols-[1.1fr_0.9fr] md:py-28">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-[0.24em] text-gold-600">
            {t('eyebrow')}
          </span>
          <h2 className="mt-5 font-serif text-4xl font-medium leading-[1.1] text-navy md:text-6xl">
            {t('quote')}
          </h2>
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-navy/12 pt-8">
            {stats.map((s) => (
              <div key={s.l}>
                <dt className="font-serif text-3xl font-semibold text-navy md:text-4xl">
                  {s.v}
                </dt>
                <dd className="mt-1 text-sm text-navy/55">{s.l}</dd>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="md:pt-12">
            <p className="text-lg leading-relaxed text-navy/75">{t('lead')}</p>
            <p className="mt-5 leading-relaxed text-navy/65">{t('p1')}</p>
            <p className="mt-4 leading-relaxed text-navy/65">{t('p2')}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
