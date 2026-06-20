'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

const ease = [0.16, 1, 0.3, 1] as const;

export default function HeroFinal() {
  const t = useTranslations('hero');

  return (
    <section className="relative isolate flex min-h-[calc(100vh-5rem)] items-center overflow-hidden bg-[#728690]">
      <div className="container-content relative flex flex-col items-center py-28 text-center text-black">
        {/* Monogramm */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease }}
          className="flex flex-col items-center"
        >
          <span className="h-12 w-px bg-gradient-to-b from-transparent to-white" />
          <span className="my-4 font-serif text-6xl font-semibold tracking-tight text-white md:text-7xl">
            H<span className="text-white">·</span>V
          </span>
          <span className="h-12 w-px bg-gradient-to-t from-transparent to-white" />
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease }}
          className="mt-8 text-xs font-medium uppercase tracking-[0.34em] text-black"
        >
          {t('eyebrow')}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease }}
          className="mt-6 max-w-3xl font-serif text-4xl font-medium leading-[1.08] text-white md:text-6xl"
        >
          {t('title')}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.47, ease }}
          className="mt-7 max-w-lg text-lg leading-relaxed text-black/80"
        >
          {t('subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.57, ease }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/#kontakt"
            className="rounded-md bg-black px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-black/80"
          >
            {t('ctaPrimary')}
          </Link>
          <Link
            href="/#leistungen"
            className="rounded-md border border-black/40 px-8 py-3.5 text-sm font-medium text-black transition-colors hover:border-black"
          >
            {t('ctaSecondary')}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
