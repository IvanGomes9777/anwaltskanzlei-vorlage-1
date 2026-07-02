import { SITE_NAME, SITE_URL } from '@/lib/site';
import type { Attorney } from '@/content/attorneys';

// Strukturierte Daten (schema.org). NAP-Daten (Name, Adresse, Telefon,
// Sprechzeiten) müssen mit Impressum und messages/de.json → contact
// übereinstimmen.
export function legalServiceJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LegalService', 'LocalBusiness'],
    '@id': `${SITE_URL}/#kanzlei`,
    name: SITE_NAME,
    url: SITE_URL,
    image: `${SITE_URL}/hero/hero-library.webp`,
    telephone: '+49 251 524024',
    faxNumber: '+49 251 531761',
    email: 'luebbersmann@luebbersmann-rechtsanwaelte.de',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Südstraße 11',
      postalCode: '48153',
      addressLocality: 'Münster',
      addressCountry: 'DE',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    areaServed: 'DE',
    knowsAbout: [
      'Strafrecht',
      'Medizinstrafrecht',
      'Wirtschaftsstrafrecht',
      'Steuerstrafrecht',
      'Revisionsrecht',
    ],
  };
}

export function attorneyJsonLd(attorney: Attorney) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Attorney',
    name: attorney.name,
    jobTitle: attorney.role,
    description: attorney.teaser,
    image: `${SITE_URL}${attorney.img}`,
    url: `${SITE_URL}/team/${attorney.slug}`,
    worksFor: { '@id': `${SITE_URL}/#kanzlei` },
  };
}
