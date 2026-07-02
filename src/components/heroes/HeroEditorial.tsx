'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const ease = [0.16, 1, 0.3, 1] as const;

export default function HeroEditorial() {
  const t = useTranslations('hero');

  return (
    <section className="relative bg-[#728690]">
      {/* feine vertikale Mittellinie */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 hidden h-24 w-px -translate-x-1/2 bg-gradient-to-b from-white/50 to-transparent md:block"
      />
      <div className="container-content relative flex flex-col items-center py-28 text-center md:py-36">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="text-xs font-medium uppercase tracking-[0.32em] text-black"
        >
          {t('eyebrow')}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="mt-8 max-w-4xl font-serif text-[2.75rem] font-medium leading-[1.06] text-white md:text-[5rem]"
        >
          {t('title')}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.24, ease }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-black/65"
        >
          {t('subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.36, ease }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#"
            className="rounded-full bg-black px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-black"
          >
            {t('ctaPrimary')}
          </a>
          <a
            href="#"
            className="text-sm font-medium text-white underline-offset-4 transition-colors hover:text-black hover:underline"
          >
            {t('ctaSecondary')} →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
