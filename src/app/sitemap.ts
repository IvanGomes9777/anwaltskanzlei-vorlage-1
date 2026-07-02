import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { attorneys } from '@/content/attorneys';
import { practices } from '@/content/practice';
import { SITE_URL } from '@/lib/site';

const staticPaths = [
  '',
  '/leistungen',
  '/team',
  '/faq',
  '/karriere',
  '/impressum',
  '/datenschutz',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...staticPaths,
    ...practices.map((p) => `/leistungen/${p.slug}`),
    ...attorneys.map((a) => `/team/${a.slug}`),
  ];

  return paths.map((path) => ({
    url: `${SITE_URL}/${routing.defaultLocale}${path}`,
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.7,
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((locale) => [locale, `${SITE_URL}/${locale}${path}`])
      ),
    },
  }));
}
