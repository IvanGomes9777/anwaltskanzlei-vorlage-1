'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const ease = [0.16, 1, 0.3, 1] as const;

export default function HeroBento() {
  const t = useTranslations('hero');
  const a = useTranslations('areas');
  const areas = [a('a1'), a('a2'), a('a3')];

  return (
    <section className="bg-sand-50">
      <div className="container-content grid items-center gap-10 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
        {/* Text */}
        <div>
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
            className="mt-6 font-serif text-5xl font-semibold leading-[1.05] text-navy md:text-6xl"
          >
            {t('title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="mt-6 max-w-md text-lg leading-relaxed text-navy/70"
          >
            {t('subtitle')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a href="#" className="rounded-md bg-navy px-7 py-3.5 text-sm font-medium text-sand-50 transition-colors hover:bg-navy-700">
              {t('ctaPrimary')}
            </a>
            <a href="#" className="rounded-md border border-navy/20 px-7 py-3.5 text-sm font-medium text-navy transition-colors hover:border-navy/50">
              {t('ctaSecondary')}
            </a>
          </motion.div>
        </div>

        {/* Bento-Raster */}
        <div className="grid grid-cols-2 grid-rows-2 gap-3">
          {areas.map((area, i) => (
            <motion.div
              key={area}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.08, ease }}
              className={`flex flex-col justify-between rounded-xl p-5 ${
                i === 0
                  ? 'bg-navy text-sand-100'
                  : i === 3
                  ? 'bg-gold text-navy'
                  : 'border border-navy/10 bg-white text-navy'
              }`}
            >
              <span className="font-serif text-2xl font-semibold opacity-90">
                0{i + 1}
              </span>
              <span className="mt-8 text-sm font-medium leading-snug">{area}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
