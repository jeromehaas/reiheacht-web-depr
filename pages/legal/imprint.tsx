import React from 'react';
import Legal from '@/components/pages/Legal';
import { H2, H3 } from '@/components/text/Titles';
import LegalItem from '@/components/text/LegalItem';
import Spacer from '@/components/layout/Spacer';
import ListItem from '@/components/text/ListItem';

const content = [
  {
    title: 'Verantwortlich für Konzeption, Inhalte und Redaktion:',
    text: 'reiheacht Marketing GmbH Spillgässli 12 6205 Eich Tel. + 41 41 552 06 00 hallo@reiheacht.ch',
    items: ['reiheacht Marketing GmbH', 'Spillgässli 12'],
  },
  {
    title: 'Haftungsausschluss',
    text: 'Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen. Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen. Alle Angebote sind unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.',
  },
  {
    title: 'Haftung für Links',
    text: 'Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungs-bereichs Es wird jegliche Verantwortung für solche Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene Gefahr des Nutzers oder der Nutzerin.',
  },
  {
    title: 'Urheberrechte',
    text: 'Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf der Website gehören ausschliesslich der oben genannten Firma/Person oder den speziell genannten Rechtsinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.',
  },
];

interface Props { }

const Imprint: React.FunctionComponent<Props> = () => (
  <>
    <Legal>
      <H2 color="darkGrey">Impressum</H2>
      <Spacer marginBottom="60px" />
      {content.map((item, index) => (
        <LegalItem key={index} title={item.title} text={item.text} />
      ))}
      <Spacer marginBottom="60px" />

    </Legal>
  </>
);

export default Imprint;
