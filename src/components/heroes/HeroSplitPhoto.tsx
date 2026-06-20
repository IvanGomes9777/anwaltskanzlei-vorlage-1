'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const ease = [0.16, 1, 0.3, 1] as const;

export default function HeroSplitPhoto() {
  const t = useTranslations('hero');

  return (
    <section className="bg-[#728690]">
      <div className="grid items-stretch md:grid-cols-2">
        {/* Textspalte */}
        <div className="flex items-center px-6 py-20 md:px-12 md:py-28 lg:px-16">
          <div className="ml-auto w-full max-w-xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
              className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-black"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              {t('eyebrow')}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease }}
              className="mt-6 font-serif text-4xl font-semibold leading-[1.06] text-white md:text-6xl"
            >
              {t('title')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22, ease }}
              className="mt-7 text-lg leading-relaxed text-black/70"
            >
              {t('subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.34, ease }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href="#"
                className="rounded-md bg-black px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-black"
              >
                {t('ctaPrimary')}
              </a>
              <a
                href="#"
                className="rounded-md border border-black/20 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:border-black/50"
              >
                {t('ctaSecondary')}
              </a>
            </motion.div>
          </div>
        </div>

        {/* Bildspalte */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease }}
          className="relative min-h-[360px] md:min-h-[640px]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://picsum.photos/seed/kanzlei-muenchen/1400/1700"
            alt={t('imageAlt')}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 via-transparent to-transparent" />
          <div className="absolute left-0 top-0 h-full w-1 bg-white" />
          <span className="absolute bottom-4 right-4 rounded bg-[#728690]/60 px-2 py-1 text-[0.65rem] uppercase tracking-wide text-black/80">
            {t('imageAlt')}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
