import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { SITE_URL } from '@/lib/site';

// localePrefix 'as-needed': die Default-Locale läuft ohne URL-Präfix.
const localePrefix = (locale: string) =>
  locale === routing.defaultLocale ? '' : `/${locale}`;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          // Design-Varianten sind interne Demoseiten, keine Inhalte für Suchmaschinen.
          ...routing.locales.map((locale) => `${localePrefix(locale)}/varianten`),
        ],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
