'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const ease = [0.16, 1, 0.3, 1] as const;

export default function HeroMonogram() {
  const t = useTranslations('hero');

  return (
    <section className="bg-sand-100">
      <div className="container-content flex flex-col items-center py-24 text-center md:py-32">
        {/* Monogramm */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease }}
          className="flex flex-col items-center"
        >
          <span className="h-12 w-px bg-gradient-to-b from-transparent to-gold" />
          <span className="my-4 font-serif text-6xl font-semibold tracking-tight text-navy md:text-7xl">
            H<span className="text-gold">·</span>V
          </span>
          <span className="h-12 w-px bg-gradient-to-t from-transparent to-gold" />
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="mt-8 text-xs font-medium uppercase tracking-[0.34em] text-gold-600"
        >
          {t('eyebrow')}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
          className="mt-6 max-w-3xl font-serif text-4xl font-medium leading-[1.08] text-navy md:text-6xl"
        >
          {t('title')}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.42, ease }}
          className="mt-7 max-w-lg text-lg leading-relaxed text-navy/65"
        >
          {t('subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.52, ease }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#" className="rounded-md bg-navy px-8 py-3.5 text-sm font-medium text-sand-50 transition-colors hover:bg-navy-700">
            {t('ctaPrimary')}
          </a>
          <a href="#" className="rounded-md border border-navy/25 px-8 py-3.5 text-sm font-medium text-navy transition-colors hover:border-navy/50">
            {t('ctaSecondary')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
