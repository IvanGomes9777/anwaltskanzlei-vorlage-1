'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const ease = [0.16, 1, 0.3, 1] as const;

export default function HeroIndex() {
  const t = useTranslations('hero');
  const a = useTranslations('areas');
  const areas = [a('a1'), a('a2'), a('a3'), a('a4')];

  return (
    <section className="bg-sand-50">
      <div className="container-content grid gap-12 py-24 md:grid-cols-[1.2fr_0.8fr] md:py-32">
        {/* Claim links */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="text-xs font-medium uppercase tracking-[0.24em] text-gold-600"
          >
            {t('eyebrow')}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="mt-6 font-serif text-5xl font-semibold leading-[1.03] text-navy md:text-7xl"
          >
            {t('title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24, ease }}
            className="mt-8 max-w-md text-lg leading-relaxed text-navy/70"
          >
            {t('subtitle')}
          </motion.p>
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.34, ease }}
            className="mt-10 inline-block rounded-md bg-navy px-7 py-3.5 text-sm font-medium text-sand-50 transition-colors hover:bg-navy-700"
          >
            {t('ctaPrimary')}
          </motion.a>
        </div>

        {/* Nummerierter Index rechts */}
        <div className="flex flex-col justify-center">
          {areas.map((area, i) => (
            <motion.a
              key={area}
              href="#"
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease }}
              className="group flex items-center justify-between border-t border-navy/15 py-5 last:border-b"
            >
              <span className="flex items-baseline gap-4">
                <span className="font-serif text-sm text-gold-600">0{i + 1}</span>
                <span className="text-lg font-medium text-navy transition-colors group-hover:text-gold-600">
                  {area}
                </span>
              </span>
              <span className="text-navy/30 transition-all group-hover:translate-x-1 group-hover:text-gold-600">
                →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
