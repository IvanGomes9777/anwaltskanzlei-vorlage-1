import type { Metadata } from 'next';
import { SITE_NAME, SITE_URL } from '@/lib/site';

// Baut Metadaten für eine Seite: Canonical, OpenGraph und Twitter-Card.
// Die Site läuft einsprachig (de, localePrefix 'as-needed'), daher tragen die
// kanonischen URLs kein Locale-Präfix. `path` z. B. '' (Startseite) oder '/kosten'.
export function pageMetadata({
  path,
  title,
  description,
}: {
  path: string;
  title: string;
  description: string;
}): Metadata {
  const url = `${SITE_URL}${path}` || SITE_URL;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      url,
      title,
      description,
      siteName: SITE_NAME,
      locale: 'de_DE',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}
