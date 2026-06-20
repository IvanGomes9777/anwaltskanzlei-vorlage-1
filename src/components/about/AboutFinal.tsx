import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Reveal from '@/components/Reveal';

export default function AboutFinal() {
  const t = useTranslations('about');
  const h = useTranslations('hero');

  const stats = [
    { v: h('stat1Value'), l: h('stat1Label') },
    { v: h('stat3Value'), l: h('stat3Label') },
    { v: h('stat2Value'), l: h('stat2Label') },
  ];

  const values = [
    { n: '01', t: t('val1t'), d: t('val1d') },
    { n: '02', t: t('val2t'), d: t('val2d') },
    { n: '03', t: t('val3t'), d: t('val3d') },
    { n: '04', t: t('val4t'), d: t('val4d') },
  ];

  return (
    <section className="relative isolate overflow-hidden">
      {/* Foto-Hintergrund */}
      <Image
        src="/hero/about-office.webp"
        alt={t('imageAlt')}
        fill
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[#728690]/70" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(180deg, rgba(11,20,34,0.25) 0%, rgba(11,20,34,0.6) 100%)',
        }}
      />

      <div className="container-content relative py-24 text-white md:py-28">
        {/* Statement + Kennzahlen */}
        <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.24em] text-white/80">
              <span className="h-px w-8 bg-white" />
              {t('eyebrow')}
            </span>
            <h2 className="mt-5 font-serif text-4xl font-medium leading-[1.1] md:text-6xl">
              {t('quote')}
            </h2>
            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-white/20 pt-8">
              {stats.map((s) => (
                <div key={s.l}>
                  <dt className="font-serif text-3xl font-semibold text-white md:text-4xl">
                    {s.v}
                  </dt>
                  <dd className="mt-1 text-sm text-white/70">{s.l}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="md:pt-12">
              <p className="text-lg leading-relaxed text-white/90">{t('lead')}</p>
              <p className="mt-4 leading-relaxed text-white/80">{t('p1')}</p>
              <p className="mt-4 leading-relaxed text-white/80">{t('p2')}</p>
            </div>
          </Reveal>
        </div>

        {/* Werte-Karten */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.n} delay={i * 0.08}>
              <article className="h-full rounded-xl border border-white/20 bg-white/[0.06] p-6 backdrop-blur-sm transition-colors hover:border-white/50">
                <span className="font-serif text-sm text-white">{v.n}</span>
                <h3 className="mt-4 font-serif text-lg font-semibold">{v.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">{v.d}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <Link
            href="/#team"
            className="mt-12 inline-block rounded-md bg-white px-7 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-white/90"
          >
            {t('cta')}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
