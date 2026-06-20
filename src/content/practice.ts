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
        'Abrechnungsbetrug & Wirtschaftlichkeitsprüfung',
        'Behandlungsfehler & fahrlässige Körperverletzung',
        'Korruption im Gesundheitswesen (§§ 299a, 299b StGB)',
        'Betäubungsmittel- & Arzneimittelrecht',
        'Approbations- & berufsrechtliche Folgen',
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
        'Betrug & Untreue',
        'Insolvenzdelikte & Bankrott',
        'Geldwäsche & Vermögensabschöpfung',
        'Durchsuchung & Beschlagnahme',
        'Compliance & interne Ermittlungen',
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
        'Steuerhinterziehung & leichtfertige Steuerverkürzung',
        'Strafbefreiende Selbstanzeige',
        'Betriebsprüfung mit strafrechtlichem Bezug',
        'Steuerfahndung & Durchsuchung',
        'Vermögensabschöpfung & Hinterziehungszinsen',
      ],
      approach:
        'Bei der Selbstanzeige kommt es auf Vollständigkeit und Timing an. Wir prüfen Ihre Lage sorgfältig, koordinieren steuerliche und strafrechtliche Aspekte und treten gegenüber den Behörden geschlossen auf.',
    },
  },
];

export const getPractice = (slug: string) =>
  practices.find((p) => p.slug === slug);
