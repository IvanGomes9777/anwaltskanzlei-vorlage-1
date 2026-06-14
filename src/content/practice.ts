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
  en: PracticeContent;
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
    en: {
      title: 'Employment Law',
      tagline: 'For employees and employers',
      intro:
        'From termination agreements to unfair-dismissal claims – we enforce your rights in the employment relationship, out of court and before the labour court.',
      bullets: [
        'Dismissal & protection against dismissal',
        'Severance & termination agreements',
        'Employment contracts & references',
        'Warnings & transfers',
        'Pay & overtime claims',
      ],
      approach:
        'In employment law, deadlines of just three weeks often apply. We assess your situation quickly, state the chances and risks clearly and act fast.',
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
    en: {
      title: 'Family & Inheritance Law',
      tagline: 'By your side in personal matters',
      intro:
        'Separation, divorce or estate – we guide you through emotionally demanding situations with empathy and a focus on solutions.',
      bullets: [
        'Divorce & separation',
        'Child & spousal maintenance',
        'Custody & access rights',
        'Prenuptial agreements & divorce consequences',
        'Wills, succession & compulsory portion',
      ],
      approach:
        'Where possible we seek amicable solutions; where necessary we represent your interests consistently – always mindful of everyone involved.',
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
    en: {
      title: 'Contract & Commercial Law',
      tagline: 'Legal certainty for businesses',
      intro:
        'From incorporation to contracts – we draft and review so your business stands on solid legal ground.',
      bullets: [
        'Contract drafting & review',
        'Corporate law & GmbH',
        'Terms & conditions & liability',
        'Commercial & trade law',
        'Receivables management',
      ],
      approach:
        'We think entrepreneurially, write in plain language and always keep the effort proportionate.',
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
    en: {
      title: 'Criminal Law',
      tagline: 'Determined defence',
      intro:
        'Whether investigation or trial – we defend you discreetly, with full commitment and thorough preparation.',
      bullets: [
        'Investigations & criminal proceedings',
        'Traffic criminal law',
        'White-collar crime',
        'Pre-trial detention',
        'Appeals & revision',
      ],
      approach:
        'Early defence is decisive. Do not make any statement on the matter before speaking with us – we are available around the clock.',
    },
  },
];

export const getPractice = (slug: string) =>
  practices.find((p) => p.slug === slug);
