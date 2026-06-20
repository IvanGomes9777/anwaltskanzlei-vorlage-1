export interface PracticeContent {
  title: string;
  tagline: string;
  intro: string;
  bullets: string[];
  approach: string;
}

export interface Practice {
  slug: string;
  de: PracticeContent;
}

export const practices: Practice[] = [
  {
    slug: 'medizinstrafrecht',
    de: {
      title: 'Medizinstrafrecht',
      tagline: 'Verteidigung im Gesundheitswesen',
      intro:
        'Vom Vorwurf des Abrechnungsbetrugs bis zum Behandlungsfehler – wir verteidigen Ärztinnen, Ärzte, Pflegekräfte und Kliniken mit fachlicher Tiefe und größter Diskretion.',
      bullets: [
        'Vertretung von Ärzten und Apothekern bei Korruptionsvorwürfen',
        'Verteidigung gegen Vorwurf der Untreue und des Abrechnungsbetruges (z. B. nach Plausibilitätsprüfung)',
        'Verteidigung gegen Vorwurf fahrlässiger oder vorsätzlicher Behandlungsfehler',
        'Vertretung in Verfahren wegen Verletzung der Verschwiegenheitspflicht, unbefugten Führens von Titeln u. a.',
        'Vertretung im Disziplinar- und berufsgerichtlichen Verfahren',
        'Beistand bei Durchsuchung und anderweitigen Zwangsmaßnahmen',
        'Vertretung im Besteuerungs- und Steuerstrafverfahren',
        'Beratung hinsichtlich einer strafbefreienden Selbstanzeige',
        'Durchführung von tatsächlichen Verständigungen',
      ],
      approach:
        'Frühzeitige Verteidigung schützt Ruf und Approbation. Wir prüfen die Vorwürfe diskret, sichern die Kommunikation mit Ermittlungsbehörden und denken berufsrechtliche Folgen von Anfang an mit.',
    },
  },
  {
    slug: 'wirtschaftsstrafrecht',
    de: {
      title: 'Wirtschaftsstrafrecht',
      tagline: 'Für Unternehmen und Verantwortliche',
      intro:
        'Betrug, Untreue, Insolvenz- oder Geldwäschedelikte – wir begleiten Unternehmen und ihre Verantwortlichen von der Durchsuchung bis zur Hauptverhandlung.',
      bullets: [
        'Verteidigung bei Korruptionsvorwürfen, Betrug, Untreue u. a.',
        'Verteidigung gegen Vermögensabschöpfung',
        'Vertretung im Straf- und Ordnungswidrigkeitenverfahren',
        'Vertretung bei Firmenvorwürfen und berufsbezogenem Fehlverhalten',
        'Beratung hinsichtlich außerstrafrechtlicher Konsequenzen (z. B. Gewerbeerlaubnis, Geschäftsführeramt)',
        'Entwicklung vorbeugender Vermeidestrategien (Compliance)',
      ],
      approach:
        'Wir verbinden strafrechtliche Verteidigung mit wirtschaftlichem Verständnis, handeln bei Durchsuchungen sofort und entwickeln eine Strategie, die Unternehmen und Person zugleich schützt.',
    },
  },
  {
    slug: 'steuerstrafrecht',
    de: {
      title: 'Steuerstrafrecht',
      tagline: 'Zwischen Finanzamt und Staatsanwaltschaft',
      intro:
        'Steuerhinterziehung, Selbstanzeige und Betriebsprüfungen mit strafrechtlichem Bezug – wir sichern Ihre Interessen gegenüber Finanzamt und Staatsanwaltschaft.',
      bullets: [
        'Beistand bei Durchsuchung und anderweitigen Zwangsmaßnahmen',
        'Vertretung im Besteuerungs- und Steuerstrafverfahren',
        'Beratung hinsichtlich einer strafbefreienden Selbstanzeige',
        'Durchführung von tatsächlichen Verständigungen',
      ],
      approach:
        'Bei der Selbstanzeige kommt es auf Vollständigkeit und Timing an. Wir prüfen Ihre Lage sorgfältig, koordinieren steuerliche und strafrechtliche Aspekte und treten gegenüber den Behörden geschlossen auf.',
    },
  },
];

export const getPractice = (slug: string) =>
  practices.find((p) => p.slug === slug);
