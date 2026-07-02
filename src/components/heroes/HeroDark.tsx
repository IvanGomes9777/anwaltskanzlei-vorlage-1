'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const ease = [0.16, 1, 0.3, 1] as const;

export default function HeroDark() {
  const t = useTranslations('hero');
  const title = t('title');
  const accent = t('titleAccent');
  const [before] = title.split(accent);

  const stats = [
    { v: t('stat1Value'), l: t('stat1Label') },
    { v: t('stat2Value'), l: t('stat2Label') },
    { v: t('stat3Value'), l: t('stat3Label') },
  ];

  return (
    <section className="relative overflow-hidden bg-[#728690] text-black">
      {/* Goldglühen + feines Raster */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          background:
            'radial-gradient(60% 60% at 78% 18%, rgba(114,134,144,0.22) 0%, transparent 60%), radial-gradient(50% 50% at 10% 100%, rgba(31,52,79,0.6) 0%, transparent 70%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
      <div className="container-content relative py-28 md:py-36">
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
          className="mt-8 max-w-3xl font-serif text-5xl font-medium leading-[1.05] md:text-7xl"
        >
          {before}
          <span className="text-black">{accent}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.26, ease }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-black/70"
        >
          {t('subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.36, ease }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#"
            className="rounded-md bg-white px-7 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-white"
          >
            {t('ctaPrimary')}
          </a>
          <a
            href="#"
            className="rounded-md border border-black/25 px-7 py-3.5 text-sm font-medium text-black transition-colors hover:border-white hover:text-black"
          >
            {t('ctaSecondary')}
          </a>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="mt-16 grid max-w-2xl grid-cols-3 gap-8 border-t border-black/15 pt-8"
        >
          {stats.map((s) => (
            <div key={s.l}>
              <dt className="font-serif text-3xl font-semibold text-black">{s.v}</dt>
              <dd className="mt-1 text-sm text-black/55">{s.l}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
