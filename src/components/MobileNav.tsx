'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import LanguageSwitcher from './LanguageSwitcher';

const EASE = [0.16, 1, 0.3, 1] as const;

export default function MobileNav() {
  const t = useTranslations();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll and allow closing with Escape while the menu is open.
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const nav = [
    { href: '/#leistungen', label: t('nav.services') },
    { href: '/#kanzlei', label: t('nav.firm') },
    { href: '/#team', label: t('nav.team') },
    { href: '/#bewertungen', label: t('nav.reviews') },
    { href: '/#kontakt', label: t('nav.contact') },
  ];

  // Container fades in and orchestrates the staggered reveal of its children.
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: EASE,
        when: 'beforeChildren' as const,
        staggerChildren: reduceMotion ? 0 : 0.07,
        delayChildren: reduceMotion ? 0 : 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.22,
        ease: 'easeIn' as const,
        when: 'afterChildren' as const,
        staggerChildren: 0.03,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
    exit: { opacity: 0, y: reduceMotion ? 0 : 8, transition: { duration: 0.18 } },
  };

  const overlay = (
    <motion.div
      key="mobile-nav-overlay"
      className="fixed inset-0 z-50 bg-sand-50"
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div
        variants={itemVariants}
        className="container-content flex h-20 items-center justify-between border-b border-navy/10"
      >
        <span className="font-serif text-xl font-semibold text-navy">
          {t('brand.name')}
        </span>
        <button
          onClick={() => setOpen(false)}
          aria-label={t('nav.close')}
          className="flex h-10 w-10 items-center justify-center text-2xl text-navy"
        >
          ×
        </button>
      </motion.div>
      <nav className="container-content flex flex-col gap-1 py-8">
        {nav.map((item) => (
          <motion.div key={item.label} variants={itemVariants}>
            <Link
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-navy/10 py-4 font-serif text-2xl text-navy transition-colors hover:text-gold-600"
            >
              {item.label}
            </Link>
          </motion.div>
        ))}
        <motion.div
          variants={itemVariants}
          className="mt-8 flex items-center justify-between"
        >
          <LanguageSwitcher />
          <div className="flex gap-5 text-sm text-navy/60">
            <Link href="/impressum" onClick={() => setOpen(false)}>
              {t('footer.imprint')}
            </Link>
            <Link href="/datenschutz" onClick={() => setOpen(false)}>
              {t('footer.privacy')}
            </Link>
          </div>
        </motion.div>
      </nav>
    </motion.div>
  );

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(true)}
        aria-label={t('nav.menu')}
        aria-expanded={open}
        className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
      >
        {/* Animated hamburger that morphs into an X when the menu opens. */}
        <motion.span
          className="block h-px w-6 origin-center bg-navy"
          animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3, ease: EASE }}
        />
        <motion.span
          className="block h-px w-6 bg-navy"
          animate={open ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.2, ease: EASE }}
        />
        <motion.span
          className="block h-px w-6 origin-center bg-navy"
          animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3, ease: EASE }}
        />
      </button>

      {/* Render through a portal so the fixed overlay escapes the header's
          backdrop-filter containing block and covers the full viewport.
          AnimatePresence keeps the exit (close) animation alive. */}
      {mounted &&
        createPortal(
          <AnimatePresence>{open && overlay}</AnimatePresence>,
          document.body,
        )}
    </div>
  );
}
