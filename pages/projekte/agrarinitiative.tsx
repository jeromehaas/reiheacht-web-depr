import React from 'react';
import Project from '@/components/pages/Project';
import { H2 } from '@/components/text/Text';
import Paragraph from '@/components/text/Paragraph';
import Highlight from '@/components/text/Highlight';
import Video from '@/components/partials/Video';
import Button from '@/components/buttons/Button';
import Image from '@/components/partials/Image';
import Spacer from '@/components/layout/Spacer';

interface Props { }

const content = {
  intro: {
    title: <>Hühner an die Front<Highlight>.</Highlight></>,
    text: <>Passend zum Illustrationsstil der Kampagne des Schweizer Bauernverbands für die kommende Trinkwasserinitiative im Juni 2021 durften wir auch für GalloSuisse drei Hühner visualisieren, die den Figuren aus der Kampagne tatkräftig unter die Arme greifen. </>,
  },
  projectOverview: {
    imageLink: '/logos/projects/gallosuisse.svg',
    imageAlt: 'Schweizer Bauernverband',
    title: 'Agrarinitiative.',
    text: 'Idee, Design, Illustration',
  },
  outro: {
    title: <>Ebenfalls an einem mass-geschneidertem Erklärfilm interessiert<Highlight>?</Highlight></>,
  },
  switcher: {
    nextProject: '/projekte/extreme-agrarinitiative',
    previousProject: '/projekte/smartphone-schnitzeljagd',
  },

};

const AgrarInitiative: React.FunctionComponent<Props> = () => (
  <Project content={content}>
    <Image src="/projects/agrarinitiative/draft.png" alt="Arbeiter" />
    <Image src="/projects/agrarinitiative/illustration.png" alt="Familie" />
  </Project>
);

export default AgrarInitiative;
