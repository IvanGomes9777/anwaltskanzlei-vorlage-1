export interface QA {
  q: string;
  a: string;
}

export const faq: { de: QA[] } = {
  de: [
    {
      q: 'Was kostet ein Erstgespräch?',
      a: 'Das Erstgespräch dient dem gegenseitigen Kennenlernen und einer ersten Einschätzung. Die Kosten besprechen wir vorab transparent – häufig zu einer festen Pauschale. Die Vergütung richtet sich grundsätzlich nach dem RVG oder einer Honorarvereinbarung.',
    },
    {
      q: 'Wie schnell bekomme ich einen Termin?',
      a: 'In dringenden Fällen – etwa bei kurzen Fristen im Arbeitsrecht oder in Haftsachen – melden wir uns kurzfristig. In der Regel erhalten Sie innerhalb eines Werktags eine Rückmeldung.',
    },
    {
      q: 'Übernehmen Sie auch Mandate außerhalb von München?',
      a: 'Ja. Wir betreuen Mandantinnen und Mandanten in München und bundesweit. Vieles lässt sich heute zuverlässig per Telefon, Video und E-Mail klären.',
    },
    {
      q: 'Werden meine Angaben vertraulich behandelt?',
      a: 'Selbstverständlich. Als Rechtsanwältinnen und Rechtsanwälte unterliegen wir der gesetzlichen Verschwiegenheitspflicht. Bitte senden Sie besonders sensible Details nicht unverschlüsselt per Formular oder E-Mail.',
    },
    {
      q: 'Übernimmt meine Rechtsschutzversicherung die Kosten?',
      a: 'Bei vielen Angelegenheiten ja. Wir prüfen gern den Versicherungsschutz und holen für Sie eine Deckungszusage ein.',
    },
    {
      q: 'Was sollte ich zum Termin mitbringen?',
      a: 'Alle relevanten Unterlagen zu Ihrem Anliegen – zum Beispiel Verträge, Schreiben der Gegenseite, Bescheide oder Fristen. Je vollständiger, desto besser können wir beraten.',
    },
  ],
};
