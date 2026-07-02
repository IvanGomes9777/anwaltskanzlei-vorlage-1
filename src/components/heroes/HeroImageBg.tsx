'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const ease = [0.16, 1, 0.3, 1] as const;

export default function HeroImageBg() {
  const t = useTranslations('hero');

  return (
    <section className="relative isolate overflow-hidden">
      {/* Hintergrundbild (Platzhalter) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/hero/hero-library.webp"
        alt={t('imageAlt')}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-900/92 via-navy-900/75 to-navy-900/40" />

      <div className="container-content flex min-h-[560px] flex-col justify-center py-28 text-black md:min-h-[640px]">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.24em] text-black"
        >
          <span className="h-px w-8 bg-white" />
          {t('eyebrow')}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="mt-6 max-w-3xl font-serif text-5xl font-semibold leading-[1.04] md:text-7xl"
        >
          {t('title')}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.24, ease }}
          className="mt-7 max-w-xl text-lg leading-relaxed text-black/80"
        >
          {t('subtitle')}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.34, ease }}
          className="mt-9 flex flex-wrap gap-4"
        >
          <a href="#" className="rounded-md bg-white px-7 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-white">
            {t('ctaPrimary')}
          </a>
          <a href="#" className="rounded-md border border-black/30 px-7 py-3.5 text-sm font-medium text-black backdrop-blur transition-colors hover:border-white hover:text-black">
            {t('ctaSecondary')}
          </a>
        </motion.div>
      </div>
      <span className="absolute bottom-3 right-4 rounded bg-[#728690]/60 px-2 py-1 text-[0.65rem] uppercase tracking-wide text-black/70">
        {t('imageAlt')}
      </span>
    </section>
  );
}
