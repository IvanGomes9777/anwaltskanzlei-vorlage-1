'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { practices } from '@/content/practice';

export default function MobileNav() {
  const t = useTranslations();
  const [open, setOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
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
    { href: '/#kanzlei', label: t('nav.firm') },
    { href: '/#team', label: t('nav.team') },
    { href: '/#presse', label: t('nav.press') },
    { href: '/kosten', label: t('nav.costs') },
    { href: '/#kontakt', label: t('nav.contact') },
  ];

  const close = () => setOpen(false);

  const overlay = (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#728690]">
      <div className="container-content flex h-20 items-center justify-between border-b border-black/10">
        <span className="font-serif text-xl font-semibold text-white">
          {t('brand.name')}
        </span>
        <button
          onClick={close}
          aria-label={t('nav.close')}
          className="flex h-10 w-10 items-center justify-center text-2xl text-white"
        >
          ×
        </button>
      </div>
      <nav className="container-content flex flex-col gap-1 py-8">
        {/* Rechtsgebiete – aufklappbar */}
        <div className="border-b border-black/10">
          <button
            onClick={() => setAreasOpen((v) => !v)}
            aria-expanded={areasOpen}
            className="flex w-full items-center justify-between py-4 font-serif text-2xl text-white transition-colors hover:text-black"
          >
            Rechtsgebiete
            <span aria-hidden className={`text-xl transition-transform ${areasOpen ? 'rotate-45' : ''}`}>
              +
            </span>
          </button>
          {areasOpen && (
            <div className="flex flex-col gap-1 pb-4 pl-3">
              {practices.map((p) => (
                <Link
                  key={p.slug}
                  href={`/leistungen/${p.slug}`}
                  onClick={close}
                  className="py-2 text-base text-white/90 transition-colors hover:text-black"
                >
                  {p.de.title}
                </Link>
              ))}
            </div>
          )}
        </div>

        {nav.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={close}
            className="border-b border-black/10 py-4 font-serif text-2xl text-white transition-colors hover:text-black"
          >
            {item.label}
          </Link>
        ))}
        <div className="mt-8 flex items-center justify-end">
          <div className="flex gap-5 text-sm text-black/60">
            <Link href="/impressum" onClick={close}>
              {t('footer.imprint')}
            </Link>
            <Link href="/datenschutz" onClick={close}>
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
