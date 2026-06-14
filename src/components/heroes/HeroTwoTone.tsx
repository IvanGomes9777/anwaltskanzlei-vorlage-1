'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const ease = [0.16, 1, 0.3, 1] as const;

export default function HeroTwoTone() {
  const t = useTranslations('hero');

  const stats = [
    { v: t('stat1Value'), l: t('stat1Label') },
    { v: t('stat2Value'), l: t('stat2Label') },
  ];

  return (
    <section className="grid md:grid-cols-2">
      {/* Navy-Hälfte: Claim */}
      <div className="relative flex items-center bg-navy-900 px-6 py-20 text-sand-100 md:px-12 md:py-32">
        <div className="ml-auto w-full max-w-md">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.24em] text-gold-400"
          >
            <span className="h-px w-8 bg-gold-400" />
            {t('eyebrow')}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="mt-6 font-serif text-5xl font-semibold leading-[1.04] md:text-6xl"
          >
            {t('title')}
          </motion.h1>
          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 grid grid-cols-2 gap-6 border-t border-sand-100/15 pt-6"
          >
            {stats.map((s) => (
              <div key={s.l}>
                <dt className="font-serif text-3xl font-semibold text-gold-400">{s.v}</dt>
                <dd className="mt-1 text-sm text-sand-100/55">{s.l}</dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>

      {/* Sand-Hälfte: Text + CTAs */}
      <div className="relative flex items-center bg-sand-50 px-6 py-20 md:px-12 md:py-32">
        <span aria-hidden className="absolute left-0 top-1/2 hidden h-24 w-1 -translate-y-1/2 bg-gold md:block" />
        <div className="w-full max-w-md">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24, ease }}
            className="text-xl leading-relaxed text-navy/80"
          >
            {t('subtitle')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.36, ease }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="#" className="rounded-md bg-navy px-7 py-3.5 text-sm font-medium text-sand-50 transition-colors hover:bg-navy-700">
              {t('ctaPrimary')}
            </a>
            <a href="#" className="rounded-md border border-navy/20 px-7 py-3.5 text-sm font-medium text-navy transition-colors hover:border-navy/50">
              {t('ctaSecondary')}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
