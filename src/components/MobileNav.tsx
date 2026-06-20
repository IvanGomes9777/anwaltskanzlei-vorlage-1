'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function MobileNav() {
  const t = useTranslations();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

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

  const overlay = (
    <div className="fixed inset-0 z-50 bg-white">
      <div className="container-content flex h-20 items-center justify-between border-b border-navy/10">
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
      </div>
      <nav className="container-content flex flex-col gap-1 py-8">
        {nav.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={() => setOpen(false)}
            className="border-b border-navy/10 py-4 font-serif text-2xl text-navy transition-colors hover:text-gold-600"
          >
            {item.label}
          </Link>
        ))}
        <div className="mt-8 flex items-center justify-end">
          <div className="flex gap-5 text-sm text-navy/60">
            <Link href="/impressum" onClick={() => setOpen(false)}>
              {t('footer.imprint')}
            </Link>
            <Link href="/datenschutz" onClick={() => setOpen(false)}>
              {t('footer.privacy')}
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(true)}
        aria-label={t('nav.menu')}
        aria-expanded={open}
        className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
      >
        <span className="h-px w-6 bg-black" />
        <span className="h-px w-6 bg-black" />
        <span className="h-px w-6 bg-black" />
      </button>

      {/* Render through a portal so the fixed overlay escapes the header's
          backdrop-filter containing block and covers the full viewport. */}
      {mounted && open && createPortal(overlay, document.body)}
    </div>
  );
}
