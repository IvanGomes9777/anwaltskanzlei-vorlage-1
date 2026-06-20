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
    slug: 'arbeitsrecht',
    de: {
      title: 'Arbeitsrecht',
      tagline: 'Für Arbeitnehmer und Arbeitgeber',
      intro:
        'Vom Aufhebungsvertrag bis zur Kündigungsschutzklage – wir setzen Ihre Rechte im Arbeitsverhältnis durch, außergerichtlich und vor dem Arbeitsgericht.',
      bullets: [
        'Kündigung & Kündigungsschutz',
        'Abfindung & Aufhebungsvertrag',
        'Arbeitsverträge & Zeugnisse',
        'Abmahnung & Versetzung',
        'Lohn- & Überstundenansprüche',
      ],
      approach:
        'Im Arbeitsrecht zählen oft Fristen von nur drei Wochen. Wir prüfen Ihre Situation schnell, nennen Chancen und Risiken klar und handeln zügig.',
    },
  },
  {
    slug: 'familienrecht',
    de: {
      title: 'Familien- & Erbrecht',
      tagline: 'In persönlichen Lebenslagen an Ihrer Seite',
      intro:
        'Trennung, Scheidung oder Nachlass – wir begleiten Sie einfühlsam und lösungsorientiert durch emotional belastende Situationen.',
      bullets: [
        'Scheidung & Trennung',
        'Kindes- & Ehegattenunterhalt',
        'Sorge- & Umgangsrecht',
        'Eheverträge & Scheidungsfolgen',
        'Testament, Erbfolge & Pflichtteil',
      ],
      approach:
        'Wo möglich suchen wir einvernehmliche Lösungen, wo nötig vertreten wir Ihre Interessen konsequent – immer mit Blick auf das Wohl der Beteiligten.',
    },
  },
  {
    slug: 'wirtschaftsrecht',
    de: {
      title: 'Vertrags- & Wirtschaftsrecht',
      tagline: 'Rechtssicherheit für Unternehmen',
      intro:
        'Von der Gründung bis zum Vertrag – wir gestalten und prüfen, damit Ihr Geschäft auf einem festen rechtlichen Fundament steht.',
      bullets: [
        'Vertragsgestaltung & -prüfung',
        'Gesellschaftsrecht & GmbH',
        'AGB & Haftungsfragen',
        'Handels- & Wirtschaftsrecht',
        'Forderungsmanagement',
      ],
      approach:
        'Wir denken unternehmerisch mit, formulieren klar verständlich und halten den Aufwand stets verhältnismäßig.',
    },
  },
  {
    slug: 'strafrecht',
    de: {
      title: 'Strafrecht',
      tagline: 'Entschlossene Verteidigung',
      intro:
        'Ob Ermittlungsverfahren oder Hauptverhandlung – wir verteidigen Sie diskret, engagiert und mit voller Vorbereitung.',
      bullets: [
        'Ermittlungs- & Strafverfahren',
        'Verkehrsstrafrecht',
        'Wirtschaftsstrafrecht',
        'Untersuchungshaft',
        'Revision & Berufung',
      ],
      approach:
        'Frühzeitige Verteidigung ist entscheidend. Machen Sie keine Angaben zur Sache, bevor Sie mit uns gesprochen haben – wir sind rund um die Uhr erreichbar.',
    },
  },
];

export const getPractice = (slug: string) =>
  practices.find((p) => p.slug === slug);
