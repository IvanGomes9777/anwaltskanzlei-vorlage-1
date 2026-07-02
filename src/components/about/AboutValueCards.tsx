import { useTranslations } from 'next-intl';
import Reveal from '@/components/Reveal';

export default function AboutValueCards() {
  const t = useTranslations('about');

  const values = [
    { n: '01', t: t('val1t'), d: t('val1d') },
    { n: '02', t: t('val2t'), d: t('val2d') },
    { n: '03', t: t('val3t'), d: t('val3d') },
    { n: '04', t: t('val4t'), d: t('val4d') },
  ];

  return (
    <section className="bg-[#728690]">
      <div className="container-content py-24 md:py-28">
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.24em] text-black">
              {t('eyebrow')}
            </span>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white md:text-5xl">
              {t('heading')}
            </h2>
            <p className="mt-6 max-w-sm text-lg leading-relaxed text-black/65">
              {t('lead')}
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.n} delay={i * 0.08}>
                <article className="h-full rounded-xl border border-black/10 bg-[#728690] p-6 transition-all hover:-translate-y-1 hover:border-white/40">
                  <span className="font-serif text-sm text-black">{v.n}</span>
                  <h3 className="mt-4 font-serif text-lg font-semibold text-white">
                    {v.t}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-black/60">{v.d}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
