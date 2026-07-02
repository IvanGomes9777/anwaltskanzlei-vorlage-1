import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

// Content-Security-Policy für die eigenen Seiten.
//
// Hinweise zu den Direktiven:
//  - 'unsafe-inline' für script/style ist nötig, weil Next.js Inline-Bootstrap-
//    Skripte injiziert und Framer Motion/Tailwind Inline-Styles setzen. Da die
//    App kein nutzerkontrolliertes HTML rendert (kein dangerouslySetInnerHTML),
//    ist das Restrisiko gering; eine Nonce-basierte CSP wäre der nächste Schritt.
//  - Fonts werden über next/font self-hosted → font-src 'self' genügt.
//  - google.com: eingebettete Anfahrtskarte (iframe, lädt erst nach
//    Einwilligung — Zwei-Klick-Lösung in MapConsent.tsx).
//  - Alle Bilder liegen lokal (public/) — keine externen Bild-Hosts nötig.
//  - vercel.live: Vercel-Preview-Feedback-Widget (nur Preview-Deployments).
const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  "script-src 'self' 'unsafe-inline' https://vercel.live",
  "style-src 'self' 'unsafe-inline' https://vercel.live",
  "img-src 'self' data: blob: https://vercel.live https://vercel.com",
  "font-src 'self' data: https://vercel.live",
  "connect-src 'self' https://vercel.live wss://ws-us3.pusher.com",
  "frame-src 'self' https://www.google.com https://www.openstreetmap.org https://vercel.live",
  'upgrade-insecure-requests',
].join('; ');

const securityHeaders = [
  { key: 'Content-Security-Policy', value: csp },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
  },
  { key: 'X-DNS-Prefetch-Control', value: 'off' },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
