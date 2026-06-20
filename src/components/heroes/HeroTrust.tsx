'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const ease = [0.16, 1, 0.3, 1] as const;

export default function HeroTrust() {
  const t = useTranslations('hero');

  const stats = [
    { v: t('stat1Value'), l: t('stat1Label') },
    { v: t('stat2Value'), l: t('stat2Label') },
    { v: t('stat3Value'), l: t('stat3Label') },
  ];

  return (
    <section className="relative overflow-hidden bg-sand-50">
      {/* sanfter Farbschleier oben */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] opacity-[0.07]"
        style={{
          background:
            'radial-gradient(120% 100% at 20% 0%, #0f1b2d 0%, transparent 60%), radial-gradient(80% 80% at 90% 0%, #728690 0%, transparent 55%)',
        }}
      />
      <div className="container-content relative py-24 md:py-32">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-gold-600"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          {t('eyebrow')}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease }}
          className="mt-6 max-w-3xl font-serif text-5xl font-semibold leading-[1.04] text-navy md:text-7xl"
        >
          {t('title')}
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="mt-8 h-px w-16 origin-left bg-gold"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24, ease }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-navy/70"
        >
          {t('subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32, ease }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#"
            className="rounded-md bg-navy px-7 py-3.5 text-sm font-medium text-sand-50 transition-colors hover:bg-navy-700"
          >
            {t('ctaPrimary')}
          </a>
          <a
            href="#"
            className="rounded-md border border-navy/20 px-7 py-3.5 text-sm font-medium text-navy transition-colors hover:border-navy/50"
          >
            {t('ctaSecondary')}
          </a>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 grid max-w-2xl grid-cols-3 gap-8 border-t border-navy/10 pt-8"
        >
          {stats.map((s) => (
            <div key={s.l}>
              <dt className="font-serif text-3xl font-semibold text-navy">{s.v}</dt>
              <dd className="mt-1 text-sm text-navy/55">{s.l}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
