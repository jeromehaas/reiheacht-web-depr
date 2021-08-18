import React from 'react';
import Project from '@/components/pages/Project';
import { HL } from '@/components/text/Text';
import Image from '@/components/partials/Image';
import Head from '@/components/partials/Head';

interface Props { }

const content = {
  intro: {
    title: <>Schweizer Hühner <br />packen mit an<HL color="blue">.</HL></>,
    text: <>Passend zum Illustrationsstil der Kampagne “Extreme Agrarinitiative” des Schweizer Bauernverbands durften wir auch für GalloSuisse drei Hühner visualisieren, die den anderen Figuren des SBV tatkräftig unter die Arme greifen.</>,
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
    nextProject: '/projekte/reiheacht-showreel',
    previousProject: '/projekte/erklaerfilme-sbv',
  },

};

const AgrarInitiative: React.FunctionComponent<Props> = () => (
  <Project content={content}>
    <Head title="Motion Design und Illustrationen für den Sbv | reiheacht" description="Schaue dir die bekannten Sujets zur Kampagne Extreme Agrarinitiative an, illustriert und animiert von der reiheacht" />
    <Image src="/projects/agrarinitiative/draft.png" alt="Arbeiter" />
    <Image src="/projects/agrarinitiative/illustration.png" alt="Familie" />
  </Project>
);

export default AgrarInitiative;
