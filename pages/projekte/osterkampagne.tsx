import React from 'react';
import Project from '@/components/pages/Project';
import { H2 } from '@/components/text/Text';
import Paragraph from '@/components/text/Paragraph';
import Highlight from '@/components/text/Highlight';
import Video from '@/components/partials/Video';
import Button from '@/components/buttons/Button';
import Image from '@/components/partials/Image';

interface Props { }

const content = {
  intro: {
    title: <>Osterzeit ist Eierzeit<Highlight>.</Highlight></>,
    text: <>Die Osterzeit rückt näher und wie es sich in der Schweiz gehört, dürfen die vielen Ostereier und Schoggihasen natürlich nicht fehlen. Um darauf aufmerksam zu machen, dass mehr und mehr Importeiern Einhalt in der Schweiz geboten wird, haben wir für GalloSuisse ein Ostersujet erarbeitet, welches auf dramatische Weise aufzeigt, dass der Verzehr von Schweizer Eiern abnimmt.</>,
  },
  projectOverview: {
    imageLink: '/logos/projects/gallosuisse.svg',
    imageAlt: 'GalloSuissse',
    title: 'Ostersujet.',
    text: 'Idee, Design, Illustration',
  },
  outro: {
    title: <>Du möchtest auch eine wichtige Botschaft an dein Zielpublikum <br />bringen<Highlight>?</Highlight></>,
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
