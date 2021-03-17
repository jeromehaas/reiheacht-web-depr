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
    title: <>Osterzeit ist Eierzeit.<Highlight>.</Highlight></>,
    text: <>Die Osterzeit rückt näher und wie es sich in der Schweiz gehört, dürfen die vielen Ostereier und Schoggihasen natürlich nicht fehlen. Um darauf aufmerksam zu machen, dass immer mehr Importeiern Einhalt in der Schweiz geboten wird, haben wir in Zusammenarbeit mit GalloSuisse eine Illustration erarbeitet, welche auf dramatische Weise aufzeigt, dass immer weniger Schweizer Eier verzehrt werden.</>,
  },
  projectOverview: {
    imageLink: '/logos/projects/gallosuisse.svg',
    imageAlt: 'GalloSuissse',
    title: 'Osterkampagne.',
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
