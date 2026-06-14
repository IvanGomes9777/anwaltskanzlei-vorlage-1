'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const ease = [0.16, 1, 0.3, 1] as const;

export default function HeroTypographic() {
  const t = useTranslations('hero');
  const title = t('title');
  const accent = t('titleAccent');
  const [before] = title.split(accent);

  return (
    <section className="bg-sand-50">
      <div className="container-content py-24 md:py-32">
        {/* Kopfzeile der Sektion */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease }}
          className="flex items-center justify-between border-b border-navy/15 pb-4 text-xs font-medium uppercase tracking-[0.2em] text-navy/55"
        >
          <span>{t('eyebrow')}</span>
          <span className="hidden sm:block">München · DE</span>
        </motion.div>

        {/* Riesige Aussage */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease }}
          className="mt-10 font-serif text-[3.25rem] font-medium leading-[0.98] tracking-tightish text-navy sm:text-[5rem] md:text-[7.5rem] lg:text-[9rem]"
        >
          {before}
          <span className="italic text-gold-600">{accent}</span>
        </motion.h1>

        {/* Fußleiste */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.32, ease }}
          className="mt-12 flex flex-col gap-8 border-t border-navy/15 pt-8 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-md text-base leading-relaxed text-navy/65">
            {t('subtitle')}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#"
              className="rounded-md bg-navy px-7 py-3.5 text-sm font-medium text-sand-50 transition-colors hover:bg-navy-700"
            >
              {t('ctaPrimary')}
            </a>
            <a
              href="#"
              className="text-sm font-medium text-navy underline-offset-4 transition-colors hover:text-gold-600 hover:underline"
            >
              {t('ctaSecondary')} →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
