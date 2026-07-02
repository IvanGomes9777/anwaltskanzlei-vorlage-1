import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { attorneys } from '@/content/attorneys';
import { practices } from '@/content/practice';
import { SITE_URL } from '@/lib/site';

const staticPaths = [
  '',
  '/leistungen',
  '/team',
  '/kosten',
  '/impressum',
  '/datenschutz',
];

// localePrefix 'as-needed': die Default-Locale läuft ohne URL-Präfix.
const localePrefix = (locale: string) =>
  locale === routing.defaultLocale ? '' : `/${locale}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...staticPaths,
    ...practices.map((p) => `/leistungen/${p.slug}`),
    ...attorneys.map((a) => `/team/${a.slug}`),
  ];

  return paths.map((path) => ({
    url: `${SITE_URL}${localePrefix(routing.defaultLocale)}${path}` || SITE_URL,
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.7,
    ...(routing.locales.length > 1 && {
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((locale) => [
            locale,
            `${SITE_URL}${localePrefix(locale)}${path}`,
          ])
        ),
      },
    }),
  }));
}
