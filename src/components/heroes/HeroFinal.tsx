'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const ease = [0.16, 1, 0.3, 1] as const;

export default function HeroFinal() {
  const t = useTranslations('hero');
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-[88vh] items-center overflow-hidden bg-navy-900">
      {/* Hintergrund: Video (mit Standbild als Poster/Fallback) */}
      {reduceMotion ? (
        <div className="absolute inset-0 -z-20">
          <Image
            src="/hero/hero-library.webp"
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
          poster="/hero/hero-library.webp"
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

      <div className="container-content relative flex flex-col items-center py-28 text-center text-sand-100">
        {/* Monogramm (aus Variante 9) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease }}
          className="flex flex-col items-center"
        >
          <span className="h-12 w-px bg-gradient-to-b from-transparent to-gold-400" />
          <span className="my-4 font-serif text-6xl font-semibold tracking-tight md:text-7xl">
            H<span className="text-gold-400">·</span>V
          </span>
          <span className="h-12 w-px bg-gradient-to-t from-transparent to-gold-400" />
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease }}
          className="mt-8 text-xs font-medium uppercase tracking-[0.34em] text-gold-400"
        >
          {t('eyebrow')}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease }}
          className="mt-6 max-w-3xl font-serif text-4xl font-medium leading-[1.08] md:text-6xl"
        >
          {t('title')}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.47, ease }}
          className="mt-7 max-w-lg text-lg leading-relaxed text-sand-100/80"
        >
          {t('subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.57, ease }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#"
            className="rounded-md bg-gold px-8 py-3.5 text-sm font-semibold text-navy-900 transition-colors hover:bg-gold-400"
          >
            {t('ctaPrimary')}
          </a>
          <a
            href="#"
            className="rounded-md border border-sand-100/30 px-8 py-3.5 text-sm font-medium text-sand-100 backdrop-blur-sm transition-colors hover:border-gold-400 hover:text-gold-400"
          >
            {t('ctaSecondary')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
