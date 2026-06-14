'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex items-center gap-1 text-sm">
      {routing.locales.map((l, i) => (
        <span key={l} className="flex items-center gap-1">
          {i > 0 && <span className="text-current/30">/</span>}
          <button
            onClick={() => router.replace(pathname, { locale: l })}
            aria-current={locale === l ? 'true' : undefined}
            className={`uppercase tracking-wide transition-colors ${
              locale === l ? 'text-gold' : 'opacity-60 hover:opacity-100'
            }`}
          >
            {l}
          </button>
        </span>
      ))}
    </div>
  );
}
