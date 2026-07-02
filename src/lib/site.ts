// Kanonische Produktions-URL der Website. Beim Go-Live einer echten Kanzlei
// NEXT_PUBLIC_SITE_URL auf die Kanzlei-Domain setzen (siehe SETUP.md) —
// Sitemap, robots.txt und Canonicals leiten sich hiervon ab.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://anwaltskanzlei-vorlage-1.vercel.app';
