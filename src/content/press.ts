export interface PressItem {
  source: string;
  date: string;
  title: string;
  href: string;
}

// Platzhalter – später durch echte Presse-Links ersetzen.
// href: vollständige URL zum Artikel (z. B. "https://www.sueddeutsche.de/...").
export const press: PressItem[] = [
  {
    source: 'Süddeutsche Zeitung',
    date: '14.03.2026',
    title: 'Medizinstrafrecht: Wenn die Abrechnung zum Verfahren wird',
    href: '#',
  },
  {
    source: 'Legal Tribune Online',
    date: '02.02.2026',
    title: 'Interview zur Selbstanzeige im Steuerstrafrecht',
    href: '#',
  },
  {
    source: 'Handelsblatt',
    date: '19.12.2025',
    title: 'Compliance: So schützen sich Unternehmen vor Ermittlungen',
    href: '#',
  },
  {
    source: 'Frankfurter Allgemeine Zeitung',
    date: '28.11.2025',
    title: 'Wirtschaftsstrafrecht: Strategien bei Durchsuchungen',
    href: '#',
  },
];
