export interface PracticeSection {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface PracticeContent {
  title: string;
  tagline: string;
  intro: string;
  sections: PracticeSection[];
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
      tagline: 'Revision im Strafrecht – Ihre letzte Chance im Verfahren',
      intro:
        'Die Revision ist ein streng formalisiertes Verfahren – und zugleich die letzte Möglichkeit, ein fehlerhaftes Urteil zu korrigieren. Erfolge sind selten, weil die Anforderungen hoch sind und schon kleine Fehler in der Begründung gravierende Folgen haben können. Entscheidend ist daher eine präzise, strikt an den gesetzlichen Vorgaben orientierte Arbeit – auf den bloß „guten Willen" des Revisionsgerichts kann man nicht bauen.',
      sections: [
        {
          heading: 'Was bedeutet Revision im Strafrecht überhaupt?',
          paragraphs: [
            'Mit der Revision lassen sich ausschließlich Rechtsfehler des Gerichts angreifen. Das tatsächliche Geschehen wird nicht erneut überprüft, sondern als feststehend zugrunde gelegt. Es geht also nicht darum, was passiert ist, sondern allein darum, ob das Gericht rechtlich korrekt entschieden hat.',
            'Angegriffen wird über zwei Wege: die Sachrüge und die Verfahrensrüge. Beide verfolgen unterschiedliche Ansätze und verlangen jeweils eine sorgfältige, präzise Begründung.',
          ],
        },
        {
          heading: 'Welche Fehler können Sie rügen?',
          paragraphs: [
            'Die Sachrüge richtet sich gegen Fehler im Urteil selbst – gegen die rechtliche Bewertung des festgestellten Sachverhalts. Angreifbar sind etwa Widersprüche, Lücken oder Verstöße gegen Denkgesetze und Erfahrungssätze sowie eine fehlerhafte Anwendung des materiellen Rechts.',
            'Die Verfahrensrüge betrifft dagegen Fehler im Ablauf des Verfahrens, beispielsweise Verstöße gegen Beweisverwertungsverbote oder zu Unrecht abgelehnte Beweisanträge. Diese Fehler müssen – von besonders schwerwiegenden Ausnahmen abgesehen – Einfluss auf das Urteil gehabt haben können.',
          ],
        },
        {
          heading: 'Unser Vorgehen',
          paragraphs: [
            'Wir analysieren das angefochtene Urteil im Detail, schätzen die Erfolgsaussichten realistisch ein und führen die Revision fristgerecht und formal sauber vor dem Oberlandesgericht oder dem Bundesgerichtshof.',
          ],
        },
      ],
    },
  },
  {
    slug: 'sexualstrafrecht',
    de: {
      title: 'Sexualstrafrecht',
      tagline: 'Sensible Verteidigung mit Diskretion',
      intro:
        'Ein Vorwurf im Sexualstrafrecht trifft Betroffene meist völlig unvorbereitet und kann binnen kürzester Zeit alles verändern. Ermittlungen beginnen oft plötzlich, Aussagen stehen im Raum, und es drohen erhebliche berufliche wie persönliche Folgen. Häufig werden früh Fehler gemacht, die sich später kaum noch korrigieren lassen. In vielen Fällen gelingt es uns, ein Verfahren bereits im Ermittlungsstadium zu beenden – ohne Anklage und ohne öffentliche Hauptverhandlung.',
      sections: [
        {
          heading: 'Unsere Verteidigung beginnt bei der Beweisanalyse',
          paragraphs: [
            'Wirksame Verteidigung beginnt nicht im Gerichtssaal, sondern bei der Analyse der Beweise. Im Mittelpunkt steht häufig die Aussage eines Belastungszeugen – und genau dort liegen in der Praxis oft die entscheidenden Schwächen. Wir prüfen Aussagen auf Grundlage aussagepsychologischer Erkenntnisse: Sind die Angaben widerspruchsfrei? Gibt es Hinweise auf eine fehlende Erlebnisfundierung? Zeigen sich typische Qualitätsmängel?',
            'Ergeben sich Zweifel, arbeiten wir diese konsequent heraus und legen der Staatsanwaltschaft dar, warum die Aussage nicht belastbar ist. Wo möglich, widerlegen wir Angaben durch objektive Umstände wie digitale Spuren, etwa Chatverläufe. In komplexeren Verfahren ziehen wir aussagepsychologische Sachverständige hinzu und lassen ungünstige Gutachten kritisch überprüfen.',
          ],
        },
        {
          heading: 'Typische Verteidigungssituationen',
          paragraphs: [
            'Viele Verfahren beruhen allein auf sich widersprechenden Aussagen. Dann entscheidet nicht, wer überzeugender wirkt, sondern wie belastbar eine Aussage tatsächlich ist. Wird trotz erheblicher Zweifel Anklage erhoben, beantragen wir bereits an diesem Punkt, sie nicht zur Hauptverhandlung zuzulassen.',
            'Kommt es zur Hauptverhandlung, steht der Ausgang nicht fest. Wir stellen Beweisanträge, bringen Zeugen und Sachverständige ein und machen die tatsächlichen Schwächen der Beweisführung sichtbar.',
          ],
        },
        {
          heading: 'Strategie und Zeitpunkt',
          paragraphs: [
            'Der wichtigste Zeitpunkt für eine effektive Verteidigung ist der Beginn des Verfahrens – bereits im Ermittlungsverfahren werden die Weichen gestellt. Wir bewerten die Beweislage realistisch und entwickeln eine individuelle Strategie. Auch in späteren Stadien bestehen jedoch oft noch wirksame Verteidigungsmöglichkeiten; entscheidend ist dann eine präzise und durchsetzungsstarke Prozessführung.',
          ],
        },
      ],
    },
  },
  {
    slug: 'medizinstrafrecht',
    de: {
      title: 'Medizinstrafrecht',
      tagline: 'Wenn der Vorwurf plötzlich im Raum steht',
      intro:
        'Ärztinnen und Ärzte geraten wegen der besonderen Risiken ihres Berufs vergleichsweise häufig in den Fokus strafrechtlicher Ermittlungen – oft schneller als erwartet. Schon ein Anfangsverdacht genügt für die Einleitung eines Verfahrens. Neben der strafrechtlichen Dimension drohen dabei regelmäßig erhebliche berufliche Konsequenzen.',
      sections: [
        {
          heading: 'Wann geraten Sie ins Visier der Ermittlungsbehörden?',
          paragraphs: [
            'Ermittlungen beginnen häufig schon bei vermeintlichen Behandlungsfehlern – bereits tatsächliche Anhaltspunkte reichen aus. Komplexe medizinische Zusammenhänge werden dabei oft vorschnell bewertet, und der Druck auf die Betroffenen steigt rasch.',
            'Besonders kritisch ist die Lage, wenn ein Patient im Krankenhaus verstirbt. In vielen Bundesländern wird dann nahezu automatisch ein Todesermittlungsverfahren eingeleitet. Häufig folgt ein Routinegutachten: Die Staatsanwaltschaft beauftragt standardmäßig einen Rechtsmediziner, um Todesursache und mögliches Fremdverschulden zu klären. Was für die Behörde Routine ist, stellt für Sie die Weichen für das gesamte weitere Verfahren.',
          ],
        },
        {
          heading: 'Die Anklage wegen fahrlässiger Tötung',
          paragraphs: [
            'Verfestigt sich der Verdacht, droht eine Anklage wegen fahrlässiger Tötung – psychisch wie beruflich eine enorme Belastung. Dann geht es nicht mehr nur um medizinische Standards, sondern um die strafrechtliche Vorwerfbarkeit: Hätte der Tod des Patienten durch ein anderes Verhalten objektiv vermieden werden können? Eine Anklage führt fast unweigerlich zu einer öffentlichen Hauptverhandlung, die wir mit allen juristischen Mitteln zu vermeiden suchen, um Ihre Reputation zu schützen.',
          ],
        },
        {
          heading: 'Wie wir den Vorwurf eines Behandlungsfehlers prüfen',
          paragraphs: [
            'Wir beschränken uns nicht auf die Ermittlungsakte, sondern ziehen konsequent die Krankenunterlagen hinzu – erst sie erlauben eine medizinisch tragfähige Einordnung des Geschehens.',
            'Dabei zeigt sich oft: Selbst wenn ein Fehler im Raum steht, lässt sich nur selten nachweisen, dass er auch ursächlich für den Tod war. Erforderlich wäre, dass der Erfolg bei einer Behandlung lege artis mit an Sicherheit grenzender Wahrscheinlichkeit ausgeblieben wäre – genau dieser Nachweis gelingt häufig nicht.',
          ],
        },
        {
          heading: 'Frühzeitige Beendigung und die Rolle der Sachverständigen',
          paragraphs: [
            'Ergeben sich Zweifel an Kausalität oder Bewertung, greifen wir früh ein. Ziel ist eine Einstellung bereits im Ermittlungsverfahren und die Vermeidung einer öffentlichen Hauptverhandlung – denn gerade im Medizinstrafrecht schützt eine frühe Verfahrensbeendigung Ihre Reputation nachhaltig.',
            'Sachverständigengutachten sind oft entscheidend und bergen zugleich Risiken. Wir achten darauf, dass Ihre Rechte gewahrt bleiben und Sie vor der Auswahl eines Sachverständigen rechtliches Gehör erhalten, damit kein Gutachten von Anfang an in die falsche Richtung weist.',
          ],
        },
        {
          heading: 'Weitere Vorwürfe und berufsrechtliche Folgen',
          paragraphs: [
            'Neben Körperverletzung oder fahrlässiger Tötung vertreten wir Sie auch bei Abrechnungsbetrug und Korruptionsvorwürfen. Dabei behalten wir nicht nur das Strafverfahren im Blick, sondern auch berufsrechtliche Konsequenzen: Verfahren vor Ärztekammern oder Approbationsbehörden laufen häufig parallel und können Ihre berufliche Existenz langfristig betreffen.',
          ],
        },
      ],
    },
  },
  {
    slug: 'steuerstrafrecht',
    de: {
      title: 'Steuerstrafrecht',
      tagline: 'Wenn unternehmerisches Handeln strafrechtlich bewertet wird',
      intro:
        'Das deutsche Steuerrecht ist heute so komplex, dass sich auch erfahrene Unternehmerinnen und Unternehmer zunehmend strafrechtlichen Ermittlungen ausgesetzt sehen. Internationale Entwicklungen und groß angelegte Verfahren lassen die Risiken weiter steigen. Umso wichtiger ist eine frühzeitige und strategische Verteidigung.',
      sections: [
        {
          heading: 'Wann geraten Sie ins Visier der Steuerfahndung?',
          paragraphs: [
            'Ein Steuerstrafverfahren beginnt häufig schneller als erwartet – oft genügen Unklarheiten oder Auffälligkeiten in Steuererklärungen. Steuerfahndung, Finanzbehörden und Staatsanwaltschaft arbeiten dabei eng zusammen, sodass sich Verfahren rasch dynamisch entwickeln. Gerade in dieser frühen Phase ist besonnenes Handeln entscheidend.',
            'Für Beschuldigte erreichen wir mit unserer Vorgehensweise häufig schon vor Anklageerhebung eine geräuschlose Einstellung der Ermittlungen – von großer Bedeutung sowohl für Personen des öffentlichen Lebens als auch für Unternehmen und deren Verantwortliche.',
          ],
        },
        {
          heading: 'Warum Steuerstrafrecht besonders komplex ist',
          paragraphs: [
            'Steuerstrafverfahren bewegen sich stets im Spannungsfeld zwischen Steuer- und Strafrecht. Während das Steuerrecht die Grundlage bildet, entscheidet das Strafrecht über die Konsequenzen. Es reicht daher nicht, nur eine Seite zu beherrschen – beide Rechtsgebiete müssen sicher verbunden und strategisch eingesetzt werden.',
          ],
        },
        {
          heading: 'Wie wir in Steuerstrafverfahren verteidigen',
          paragraphs: [
            'Wir analysieren sowohl die steuerrechtlichen Grundlagen als auch die strafrechtliche Bewertung, greifen gezielt den subjektiven Tatbestand an und arbeiten steuerliche Aspekte heraus, die die Staatsanwaltschaft häufig nicht ausreichend berücksichtigt.',
            'Auf der Gegenseite stehen spezialisierte, koordiniert agierende Einheiten – dem begegnen wir mit einer klaren Strategie und strukturiertem Vorgehen. In besonders komplexen Fällen, etwa im internationalen Steuerrecht, greifen wir auf ein bewährtes Netzwerk aus Steuerberatern und spezialisierten Steueranwälten zurück.',
          ],
        },
      ],
    },
  },
  {
    slug: 'wirtschaftsstrafrecht',
    de: {
      title: 'Wirtschaftsstrafrecht',
      tagline: 'Für Unternehmen und Verantwortliche',
      intro:
        'Im Wirtschaftsstrafrecht entscheiden oft Details. Bei Vorwürfen wie Betrug, Untreue, Korruption, Insolvenz- oder Geldwäschedelikten begleiten wir Unternehmen und ihre Verantwortlichen von der Durchsuchung bis zur Hauptverhandlung – mit der Verbindung aus rechtlicher Analyse und wirtschaftlichem Verständnis.',
      sections: [
        {
          heading: 'Welche Rolle spielen Beweismittel?',
          paragraphs: [
            'In Wirtschaftsstrafsachen stützt sich das Gericht häufig auf Urkunden und elektronische Daten, etwa E-Mails oder Telekommunikationsprotokolle. Deshalb liegt der Schwerpunkt der Verteidigung oft in der Analyse und Bewertung dieser Beweismittel: Wir prüfen ihre Aussagekraft, hinterfragen ihr Zustandekommen und arbeiten gezielt Schwächen heraus.',
          ],
        },
        {
          heading: 'Wie wir in der Verteidigung ansetzen',
          paragraphs: [
            'Wir konzentrieren uns insbesondere auf das materielle Recht und analysieren zugleich die Beweislage im Detail. So lässt sich früh erkennen, ob die Vorwürfe tatsächlich tragfähig sind – und gezielt Einfluss auf den Verlauf des Verfahrens nehmen.',
          ],
        },
        {
          heading: 'Verfahren frühzeitig beenden',
          paragraphs: [
            'Viele wirtschaftsstrafrechtliche Fragestellungen bedürfen keiner zwingenden Hauptverhandlung. Deshalb bestehen oft gute Möglichkeiten, bereits im Ermittlungsverfahren anzusetzen. Wir wirken auf eine möglichst frühe Einstellung hin und vermeiden so unnötige Belastungen und öffentliche Verfahren.',
          ],
        },
      ],
    },
  },
  {
    slug: 'schwurgerichtsverfahren',
    de: {
      title: 'Schwurgerichtsverfahren (Tötungsdelikt)',
      tagline: 'Wenn es um alles geht',
      intro:
        'Verfahren vor dem Schwurgericht gehören zu den schwerwiegendsten im Strafrecht. Im Mittelpunkt stehen regelmäßig vorsätzliche Tötungsdelikte – mit der möglichen Folge einer lebenslangen Freiheitsstrafe. Für Beschuldigte sind die Konsequenzen existenziell. Umso wichtiger ist eine Verteidigung, die fachlich, strategisch und persönlich auf diese besondere Situation vorbereitet ist.',
      sections: [
        {
          heading: 'Warum eine frühzeitige Verteidigung entscheidend ist',
          paragraphs: [
            'In Schwurgerichtsverfahren werden bereits im Ermittlungsverfahren entscheidende Weichen gestellt. Aussagen, Einlassungen oder Verteidigungsansätze lassen sich später oft nicht mehr korrigieren. Schon ein unüberlegtes Verhalten kann erhebliche Nachteile bringen – etwa wenn vorschnell eine Notwehrsituation behauptet und damit zugleich die Tat eingeräumt wird. Machen Sie daher keine Angaben ohne anwaltliche Beratung.',
          ],
        },
        {
          heading: 'Die besondere Belastung der Untersuchungshaft',
          paragraphs: [
            'Häufig wird schon zu Beginn Untersuchungshaft angeordnet. Diese Situation ist enorm belastend und erzeugt erheblichen Druck, unter dem leicht unüberlegte Aussagen oder Entscheidungen getroffen werden. Eine zentrale Aufgabe der Verteidigung ist es, Sie in dieser Phase zu stabilisieren, zu schützen und strategisch zu begleiten.',
          ],
        },
        {
          heading: 'Welche Rolle Gutachten und Indizien spielen',
          paragraphs: [
            'In Verfahren wegen Tötungsdelikten kommt es maßgeblich auf kriminaltechnische Untersuchungen und rechtsmedizinische Gutachten an. Häufig stützt sich die Anklage auf eine Vielzahl von Indizien, die zu einer Gesamtschau zusammengeführt werden. Genau hier setzen wir an:',
          ],
          bullets: [
            'Überprüfung kriminaltechnischer Ermittlungen',
            'kritische Analyse rechtsmedizinischer Gutachten',
            'Aufdeckung von Lücken oder Widersprüchen in der Indizienkette',
          ],
        },
        {
          heading: 'Unser Vorgehen',
          paragraphs: [
            'Unsere Verteidigung ist von Beginn an auf eine klare Strategie ausgerichtet. Wir analysieren die Ermittlungsakte im Detail, identifizieren Schwachstellen und entwickeln ein strukturiertes Vorgehen:',
          ],
          bullets: [
            'frühzeitiges Einwirken auf das Ermittlungsverfahren',
            'Aufzeigen von Ermittlungslücken',
            'Durchsetzen notwendiger Beweiserhebungen',
            'konsequente Wahrnehmung Ihrer Rechte',
          ],
        },
        {
          heading: 'Haft und Anklage angreifen',
          paragraphs: [
            'Ein wesentlicher Bestandteil ist die Überprüfung der Untersuchungshaft. Haftbeschwerden oder Haftprüfungsanträge greifen nicht nur Bedingungen und Verhältnismäßigkeit an, sondern bieten zugleich die Möglichkeit, früh auf Schwächen der Ermittlungen hinzuweisen und entlastende Umstände einzubringen. Parallel zielt die Verteidigung darauf, schon die Erhebung der Anklage zum Schwurgericht zu verhindern.',
          ],
        },
      ],
    },
  },
  {
    slug: 'umweltstrafrecht',
    de: {
      title: 'Umweltstrafrecht',
      tagline: 'An der Schnittstelle von Strafrecht, Umweltrecht und Technik',
      intro:
        'Umweltstrafverfahren bewegen sich an der Schnittstelle zwischen Strafrecht, Umweltrecht und technischen Fragestellungen. Häufig stehen komplexe Genehmigungslagen, behördliche Vorgaben und betriebliche Abläufe im Mittelpunkt. Die Verfahren können erhebliche Auswirkungen auf Unternehmen, Verantwortliche und deren öffentliche Wahrnehmung haben – eine präzise und strategische Verteidigung ist daher unerlässlich.',
      sections: [
        {
          heading: 'Wann entstehen umweltstrafrechtliche Vorwürfe?',
          paragraphs: [
            'Ermittlungen entstehen häufig im Zusammenhang mit behördlichen Kontrollen, Genehmigungsverfahren oder betrieblichen Abläufen. Schon vermeintliche Verstöße gegen Auflagen oder Dokumentationspflichten können einen Anfangsverdacht begründen. Hinzu kommt, dass sich die Verfahren oft auf interpretationsbedürftige technische Gutachten oder behördliche Bewertungen stützen.',
          ],
        },
        {
          heading: 'Warum Umweltstrafrecht besonders komplex ist',
          paragraphs: [
            'Die Verteidigung erfordert weit mehr als strafrechtliches Fachwissen. Entscheidend ist vor allem das Verständnis für:',
          ],
          bullets: [
            'umweltrechtliche Genehmigungsvoraussetzungen',
            'behördliche Entscheidungsprozesse',
            'technische und betriebliche Abläufe',
          ],
        },
        {
          heading: 'Sachverständige und Gutachten',
          paragraphs: [
            'Technische Fragen – etwa zu Emissionen, Grenzwerten oder Anlagenbetrieb – sind oft entscheidend. Wir greifen auf ein etabliertes Netzwerk qualifizierter Sachverständiger zurück, hinterfragen Gutachten kritisch, bringen eigene Bewertungen ein und ordnen technische Sachverhalte rechtlich präzise ein. In geeigneten Fällen arbeiten wir eng mit spezialisierten Partnern im Verwaltungsrecht zusammen.',
          ],
        },
        {
          heading: 'Diskrete Beendigung des Verfahrens',
          paragraphs: [
            'Ein Schwerpunkt liegt darin, Verfahren bereits im Ermittlungsstadium zu beeinflussen. Gerade im Umweltstrafrecht bestehen häufig gute Möglichkeiten, ohne öffentliche Hauptverhandlung zu einer Einstellung zu gelangen – diskret und ohne unnötige öffentliche Aufmerksamkeit. Das schützt nicht nur Sie persönlich, sondern auch Ihr Unternehmen vor reputationsschädigender Berichterstattung.',
          ],
        },
      ],
    },
  },
  {
    slug: 'allgemeines-strafrecht',
    de: {
      title: 'Allgemeines Strafrecht',
      tagline: 'Wenn strafrechtliche Vorwürfe Ihren Alltag bestimmen',
      intro:
        'Strafverfahren im allgemeinen Strafrecht betreffen häufig sehr persönliche Lebensbereiche. Anders als im Wirtschaftsstrafrecht stehen nicht unternehmerische Entscheidungen im Fokus, sondern individuelle Handlungen mit unmittelbaren Konsequenzen für Freiheit, Reputation und Zukunft. Neben der juristischen Bewertung spielen persönliche, berufliche und soziale Auswirkungen eine entscheidende Rolle.',
      sections: [
        {
          heading: 'Wann geraten Sie ins Visier der Ermittlungsbehörden?',
          paragraphs: [
            'Ermittlungen beginnen häufig plötzlich – durch eine Anzeige, eine polizeiliche Kontrolle oder Aussagen Dritter. Bereits ein Anfangsverdacht kann genügen. Unüberlegte Aussagen oder falsches Verhalten können den weiteren Verlauf maßgeblich beeinflussen. Deshalb gilt: frühzeitig handeln und keine Angaben ohne rechtliche Beratung machen.',
          ],
        },
        {
          heading: 'Warum eine Strafverteidigung im Alltag anspruchsvoll ist',
          paragraphs: [
            'Auch scheinbar „einfach gelagerte" Verfahren sind oft komplexer, als sie wirken: Aussage steht gegen Aussage, Beweismittel sind interpretationsbedürftig, und rechtliche Bewertungen hängen von Details ab. Wirksame Verteidigung bedeutet nicht Anpassung, sondern konsequente Interessenvertretung.',
          ],
        },
        {
          heading: 'Welche Rolle spielen Beweise?',
          paragraphs: [
            'Die Beweisführung stützt sich häufig auf Zeugenaussagen, polizeiliche Feststellungen oder Sachverständigengutachten – also stärker auf persönliche Wahrnehmungen als auf Dokumente. Wir prüfen kritisch: Wie belastbar sind Aussagen? Gibt es Widersprüche? Unter welchen Umständen wurden Beweise erhoben?',
          ],
        },
        {
          heading: 'Frühzeitige Beendigung des Verfahrens',
          paragraphs: [
            'In vielen Fällen besteht die Möglichkeit, bereits im Ermittlungsverfahren eine Einstellung zu erreichen. Durch fundierte rechtliche Argumentation und strategisches Vorgehen arbeiten wir darauf hin, belastende Hauptverhandlungen zu vermeiden und das Verfahren möglichst früh zu beenden.',
          ],
        },
        {
          heading: 'Alles, was Strafrecht ist',
          paragraphs: [
            'Wir verteidigen Sie in allen Bereichen des Strafrechts. Dazu zählen insbesondere die folgenden Vergehen und Verbrechen:',
          ],
          bullets: [
            'Straftaten nach dem Betäubungsmittelgesetz, §§ 29 ff. BtMG',
            'Widerstand gegen Vollstreckungsbeamte, § 113 StGB',
            'Hausfriedensbruch, § 123 StGB',
            'Unerlaubtes Entfernen vom Unfallort, § 142 StGB',
            'Vortäuschen einer Straftat, § 145d StGB',
            'Falsche uneidliche Aussage, § 153 StGB',
            'Falsche Verdächtigung, § 164 StGB',
            'Sexueller Missbrauch von Schutzbefohlenen, § 174 StGB',
            'Sexueller Übergriff, sexuelle Nötigung, Vergewaltigung, § 177 StGB',
            'Besitz und Verbreitung von Kinderpornografie, § 184b StGB',
            'Besitz und Verbreitung von Jugendpornografie, § 184c StGB',
            'Sexuelle Belästigung, § 184i StGB',
            'Beleidigung, § 185 StGB',
            'Üble Nachrede, § 186 StGB',
            'Verleumdung, § 187 StGB',
            'Mord, § 211 StGB',
            'Totschlag, § 212 StGB',
            'Fahrlässige Tötung, § 222 StGB',
            'Körperverletzung, § 223 StGB',
            'Gefährliche Körperverletzung, § 224 StGB',
            'Misshandlung von Schutzbefohlenen, § 225 StGB',
            'Schwere Körperverletzung, § 226 StGB',
            'Körperverletzung mit Todesfolge, § 227 StGB',
            'Fahrlässige Körperverletzung, § 229 StGB',
            'Beteiligung an einer Schlägerei, § 231 StGB',
            'Nachstellung, § 238 StGB',
            'Freiheitsberaubung, § 239 StGB',
            'Nötigung, § 240 StGB',
            'Bedrohung, § 241 StGB',
            'Diebstahl, § 242 StGB',
            'Besonders schwerer Fall des Diebstahls, § 243 StGB',
            'Diebstahl mit Waffen, Bandendiebstahl, Wohnungseinbruchdiebstahl, § 244 StGB',
            'Schwerer Bandendiebstahl, § 244a StGB',
            'Unterschlagung, § 246 StGB',
            'Raub, § 249 StGB',
            'Schwerer Raub, § 250 StGB',
            'Raub mit Todesfolge, § 251 StGB',
            'Räuberischer Diebstahl, § 252 StGB',
            'Erpressung, § 253 StGB',
            'Räuberische Erpressung, § 255 StGB',
            'Strafvereitelung, § 258 StGB',
            'Hehlerei, § 259 StGB',
            'Geldwäsche, § 261 StGB',
            'Betrug, § 263 StGB',
            'Computerbetrug, § 263a StGB',
            'Subventionsbetrug, § 264 StGB',
            'Untreue, § 266 StGB',
            'Urkundenfälschung, § 267 StGB',
            'Ausstellen unrichtiger Gesundheitszeugnisse, § 278 StGB',
            'Gebrauch unrichtiger Gesundheitszeugnisse, § 279 StGB',
            'Sachbeschädigung, § 303 StGB',
            'Brandstiftung, § 306 StGB',
            'Schwere Brandstiftung, § 306a StGB',
            'Brandstiftung mit Todesfolge, § 306c StGB',
            'Fahrlässige Brandstiftung, § 306d StGB',
            'Gefährdung des Straßenverkehrs, § 315c StGB',
            'Trunkenheit im Verkehr, § 316 StGB',
            'Verstoß gegen das Infektionsschutzgesetz, § 75 IfSG',
          ],
        },
      ],
    },
  },
];

export const getPractice = (slug: string) =>
  practices.find((p) => p.slug === slug);
