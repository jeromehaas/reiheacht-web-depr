import React from 'react';
import Project from '@/components/pages/Project';
import { HL } from '@/components/text/Text';
import Image from '@/components/partials/Image';

interface Props { }

const content = {
  intro: {
    title: <>Schweizer Hühner <br />packen mit an<HL color="blue">.</HL></>,
    text: <>Passend zum Illustrationsstil der Kampagne “Extreme Agrarinitiative” des Schweizer Bauernverbands für die im Juni 2021 anstehende Initiative  durften wir auch für GalloSuisse drei Hühner visualisieren, die den anderen Figuren des SBV tatkräftig unter die Arme greifen.</>,
  },
  projectOverview: {
    imageLink: '/logos/projects/gallosuisse.svg',
    imageAlt: 'Schweizer Bauernverband',
    title: 'Extreme Agrarinitiative.',
    text: 'Idee, Design, Illustration',
  },
  outro: {
    title: <>Ebenfalls an einem mass-geschneidertem Erklärfilm interessiert<HL color="blue">?</HL></>,
  },
  switcher: {
    nextProject: '/projekte/smartphone-schnitzeljagd',
    previousProject: '/projekte/sbv-div',
  },

};

const AgrarInitiative: React.FunctionComponent<Props> = () => (
  <Project content={content}>
    <Image src="/projects/agrarinitiative/draft.png" alt="Arbeiter" />
    <Image src="/projects/agrarinitiative/illustration.png" alt="Familie" />
  </Project>
);

export default AgrarInitiative;
