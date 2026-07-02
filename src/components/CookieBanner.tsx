'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

const KEY = 'cookie-consent';

export default function CookieBanner() {
  const t = useTranslations('cookie');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(KEY)) setVisible(true);
  }, []);

  const decide = (value: 'accepted' | 'declined') => {
    localStorage.setItem(KEY, value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie"
      className="fixed inset-x-0 bottom-0 z-50 animate-fade-up p-4"
    >
      <div className="container-content">
        <div className="flex flex-col gap-4 rounded-xl border border-black/10 bg-[#728690]/95 p-5 shadow-[0_20px_50px_-20px_rgba(15,27,45,0.5)] backdrop-blur md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl text-sm text-black/70">
            {t('text')}{' '}
            <Link
              href="/datenschutz"
              className="text-black underline underline-offset-2"
            >
              {t('more')}
            </Link>
          </p>
          <div className="flex shrink-0 gap-3">
            <button
              onClick={() => decide('declined')}
              className="rounded-md border border-black/20 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-black/50"
            >
              {t('decline')}
            </button>
            <button
              onClick={() => decide('accepted')}
              className="rounded-md bg-black px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-black"
            >
              {t('accept')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
