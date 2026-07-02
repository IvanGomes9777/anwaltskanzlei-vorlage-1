'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

const CONSENT_KEY = 'cookie-consent';
const MAP_KEY = 'map-consent';

// Zwei-Klick-Lösung: Die Google-Maps-Karte (und damit die IP-Übermittlung an
// Google) lädt erst nach Einwilligung — entweder über den Cookie-Banner
// („Akzeptieren") oder per Klick direkt auf dem Platzhalter.
export default function MapConsent({
  src,
  title,
  className,
}: {
  src: string;
  title: string;
  className?: string;
}) {
  const t = useTranslations('map');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (
      localStorage.getItem(MAP_KEY) === 'accepted' ||
      localStorage.getItem(CONSENT_KEY) === 'accepted'
    ) {
      setLoaded(true);
      return;
    }
    const onConsent = (e: Event) => {
      if ((e as CustomEvent<string>).detail === 'accepted') setLoaded(true);
    };
    window.addEventListener('cookie-consent', onConsent);
    return () => window.removeEventListener('cookie-consent', onConsent);
  }, []);

  const accept = () => {
    localStorage.setItem(MAP_KEY, 'accepted');
    setLoaded(true);
  };

  if (loaded) {
    return (
      <iframe
        title={title}
        className={className}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src={src}
      />
    );
  }

  return (
    <div
      className={`flex flex-col items-center justify-center gap-4 bg-white/10 px-6 py-8 text-center ${className ?? ''}`}
    >
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        className="h-8 w-8 text-white/60"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
        />
      </svg>
      <p className="max-w-sm text-sm leading-relaxed text-white/85">{t('text')}</p>
      <button
        onClick={accept}
        className="rounded-md bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-black/80"
      >
        {t('load')}
      </button>
      <Link
        href="/datenschutz"
        className="text-xs text-white/70 underline underline-offset-2 transition-colors hover:text-white"
      >
        {t('note')}
      </Link>
    </div>
  );
}
