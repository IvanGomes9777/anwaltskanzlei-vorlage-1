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
    slug: 'revisionsrecht',
    de: {
      title: 'Revisionsrecht',
      tagline: 'Rechtsmittel & Revision',
      intro:
        'Die Überprüfung eines Urteils auf Rechtsfehler ist hochspezialisiert. Wir prüfen Ihre Erfolgsaussichten und führen die Revision vor den Obergerichten.',
      bullets: [
        'Prüfung von Urteilen auf Rechtsfehler',
        'Begründung und Durchführung der Revision',
        'Verfahrens- und Sachrügen',
        'Vertretung vor Oberlandesgericht und Bundesgerichtshof',
      ],
      approach:
        'Die Revision ist streng fristgebunden und formal anspruchsvoll. Wir analysieren das Urteil sorgfältig und entwickeln eine tragfähige Revisionsstrategie. [Platzhalter – Text folgt.]',
    },
  },
  {
    slug: 'sexualstrafrecht',
    de: {
      title: 'Sexualstrafrecht',
      tagline: 'Sensible Verteidigung mit Diskretion',
      intro:
        'Verfahren im Sexualstrafrecht verlangen besonderes Fingerspitzengefühl. Wir verteidigen entschieden und mit größter Vertraulichkeit.',
      bullets: [
        'Verteidigung in Ermittlungs- und Hauptverfahren',
        'Begleitung bei Vernehmungen',
        'Schutz der Persönlichkeitsrechte',
        'Vertretung in Berufung und Revision',
      ],
      approach:
        'Diskretion und eine frühzeitige, sorgfältige Verteidigung sind hier entscheidend. [Platzhalter – Text folgt.]',
    },
  },
  {
    slug: 'medizinstrafrecht',
    de: {
      title: 'Medizinstrafrecht',
      tagline: 'Verteidigung im Gesundheitswesen',
      intro:
        'Vom Vorwurf des Abrechnungsbetrugs bis zum Behandlungsfehler – wir verteidigen Ärztinnen, Ärzte, Apotheker und Kliniken mit fachlicher Tiefe und größter Diskretion.',
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
    slug: 'schwurgerichtsverfahren',
    de: {
      title: 'Schwurgerichtsverfahren (Tötungsdelikt)',
      tagline: 'Verteidigung bei Tötungsdelikten',
      intro:
        'Bei den schwersten Vorwürfen – Mord, Totschlag und anderen Tötungsdelikten – verteidigen wir Sie vor dem Schwurgericht mit voller Kraft und maximaler Vorbereitung.',
      bullets: [
        'Verteidigung bei Mord- und Totschlagsvorwürfen',
        'Begleitung von der Untersuchungshaft bis zur Hauptverhandlung',
        'Beweisführung und Auswahl von Sachverständigen',
        'Vertretung in Revisionsverfahren',
      ],
      approach:
        'Schwurgerichtsverfahren verlangen höchste Sorgfalt und Erfahrung. Wir bereiten jeden Verhandlungstag akribisch vor. [Platzhalter – Text folgt.]',
    },
  },
  {
    slug: 'umweltstrafrecht',
    de: {
      title: 'Umweltstrafrecht',
      tagline: 'Umweltdelikte im Unternehmen',
      intro:
        'Vorwürfe wegen umweltrechtlicher Verstöße treffen häufig Unternehmen und Verantwortliche. Wir verteidigen sachkundig und lösungsorientiert.',
      bullets: [
        'Gewässer-, Boden- und Luftverunreinigung',
        'Abfallrechtliche Verstöße',
        'Verantwortlichkeit von Geschäftsführern und Betriebsbeauftragten',
        'Verzahnung mit dem Verwaltungsrecht',
      ],
      approach:
        'Wir verbinden strafrechtliche Verteidigung mit umwelt- und verwaltungsrechtlichem Verständnis. [Platzhalter – Text folgt.]',
    },
  },
  {
    slug: 'allgemeines-strafrecht',
    de: {
      title: 'Allgemeines Strafrecht',
      tagline: 'Verteidigung in allen Lebenslagen',
      intro:
        'Vom Vorwurf der Körperverletzung bis zum Diebstahl – wir verteidigen Sie in sämtlichen Bereichen des allgemeinen Strafrechts.',
      bullets: [
        'Körperverletzungs- und Eigentumsdelikte',
        'Betäubungsmittelstrafrecht',
        'Verkehrsstrafrecht',
        'Ermittlungs-, Haupt- und Berufungsverfahren',
      ],
      approach:
        'Jeder Fall verdient eine sorgfältige, individuelle Verteidigung – unabhängig von der Schwere des Vorwurfs. [Platzhalter – Text folgt.]',
    },
  },
];

export const getPractice = (slug: string) =>
  practices.find((p) => p.slug === slug);
