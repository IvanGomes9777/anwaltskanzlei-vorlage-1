'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

const ease = [0.16, 1, 0.3, 1] as const;

export default function HeroFinal() {
  const t = useTranslations('hero');
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-[calc(100vh-5rem)] items-center overflow-hidden bg-[#728690]">
      {/* Hintergrund: Video (mit Standbild als Poster/Fallback) */}
      {reduceMotion ? (
        <div className="absolute inset-0 -z-20">
          <Image
            src="/hero/hero-books.webp"
            alt={t('imageAlt')}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ) : (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/hero/hero-books.webp"
          preload="auto"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        >
          <source src="/hero/hero.mp4" type="video/mp4" />
        </video>
      )}

      {/* Verdunkelung für Lesbarkeit (zentriert) */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(75% 75% at 50% 45%, rgba(11,20,34,0.55) 0%, rgba(11,20,34,0.82) 100%)',
        }}
      />

      <div className="container-content relative flex flex-col items-center py-28 text-center text-white">
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
          className="mt-8 text-xs font-medium uppercase tracking-[0.34em] text-white/80"
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
          className="mt-7 max-w-lg text-lg leading-relaxed text-white/85"
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
            className="rounded-md bg-white px-8 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-white/90"
          >
            {t('ctaPrimary')}
          </Link>
          <Link
            href="/#leistungen"
            className="rounded-md border border-white/40 px-8 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:border-white"
          >
            {t('ctaSecondary')}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
