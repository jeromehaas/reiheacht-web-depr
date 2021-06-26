import React from 'react';
import Project from '@/components/pages/Project';
import { HL } from '@/components/text/Text';
import Video from '@/components/partials/Video';
import Head from '@/components/partials/Head';

interface Props { }

const content = {
  intro: {
    title: <>Unser Showreel<HL color="blue">.</HL></>,
    text: <></>,
  },
  projectOverview: {
    imageLink: '/logos/projects/reiheacht.svg',
    imageAlt: 'reiheacht',
    title: 'Showreel.',
    text: 'Animation, Design, Illustration',
  },
  outro: {
    title: <>Ebenfalls an einem mass-geschneidertem Erklärfilm interessiert<HL color="blue">?</HL></>,
  },
  switcher: {
    nextProject: '/projekte/extreme-agrarinitiative',
    previousProject: '/projekte/agrarinitiative',
  },

};

const AgrarInitiative: React.FunctionComponent<Props> = () => (
  <Project content={content}>
    <Head title="Motion Design Showreel | reiheacht" description="Das reiheacht Showreel – Ein Auswahl unserer Besten Motion Design Animationen" />
    <Video link="https://player.vimeo.com/video/546612359" />
  </Project>
);

export default AgrarInitiative;
