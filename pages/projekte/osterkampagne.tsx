import React from 'react';
import Project from '@/components/pages/Project';
import { H2 } from '@/components/text/Text';
import Paragraph from '@/components/text/Paragraph';
import Highlight from '@/components/text/Highlight';
import Video from '@/components/partials/Video';
import Button from '@/components/buttons/Button';

interface Props { }

const content = {
  intro: {
    title: <>Ein Ei kommt selten allei<Highlight>.</Highlight></>,
    text: <>Importeier nehmen in der Schweiz mehr und mehr zu. Deshalb hat uns GalloSuisse gebeten Ihnen verschiedene Ideen für zu präsentieren.</>,
  },
  projectOverview: {
    imageLink: '/logos/projects/gallosuisse.svg',
    imageAlt: 'GalloSuissse',
    title: 'Osterkampagne.',
    text: 'Idee, Design, Illustration',
  },
  outro: {
    title: <>Möchtest du auch eine eigene <Highlight>Welt</Highlight>?</>,
  },
  switcher: {
    nextProject: '#',
    previousProject: '#',
  },

};

const AgrarInitiative: React.FunctionComponent<Props> = () => (
  <Project content={content} />
);

export default AgrarInitiative;
