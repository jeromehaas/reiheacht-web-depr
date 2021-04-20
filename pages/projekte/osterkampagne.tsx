import React from 'react';
import Project from '@/components/pages/Project';
import { H2, HL } from '@/components/text/Text';
import Paragraph from '@/components/text/Paragraph';
import Video from '@/components/partials/Video';
import Button from '@/components/buttons/Button';
import Image from '@/components/partials/Image';

interface Props { }

const content = {
  intro: {
    title: <>Osterzeit ist Eierzeit<HL color="blue">.</HL></>,
    text: <>Die Osterzeit rückt näher und wie es sich in der Schweiz gehört, dürfen die vielen Ostereier und Schoggihasen natürlich nicht fehlen. Um darauf aufmerksam zu machen, dass bei einem Ja zur Trinkwasser-Initiative das Angebot an Schweizer Eiern drastisch abnehmen würde, haben wir für GalloSuisse ein Ostersujet erarbeitet, welches auf dramatische Weise aufzeigt, dass das traditionelle Eiertütschen in Zukunft vermehrt mit Importeiern stattfinden müsste. Das Sujet wird auf den Social Media Kanälen sowie im Printbereich eingesetzt.</>,
  },
  projectOverview: {
    imageLink: '/logos/projects/gallosuisse.svg',
    imageAlt: 'GalloSuissse',
    title: 'Ostersujet.',
    text: 'Idee, Design, Illustration',
  },
  outro: {
    title: <>Du möchtest auch eine wichtige Botschaft an dein Zielpublikum <br />bringen<HL color="blue">?</HL></>,
  },
  switcher: {
    nextProject: '/projekte/trinkwasserinitiative',
    previousProject: '/projekte/extreme-agrarinitiative',
  },

};

const AgrarInitiative: React.FunctionComponent<Props> = () => (
  <Project content={content}>
    <Image src="/projects/osterkampagne/draft.png" alt="Entwurf" />
    <Image src="/projects/osterkampagne/illustration.png" alt="Illustration" />
  </Project>
);

export default AgrarInitiative;
