import React from 'react';
import Project from '@/components/pages/Project';
import { HL } from '@/components/text/Text';
import Video from '@/components/partials/Video';
import Space from '@/components/layout/Space';
import Head from '@/components/partials/Head';

interface Props { }

const content = {
  intro: {
    title: <>Eine ganze Welt, <br /> nur für dich<HL color="blue">.</HL></>,
    text: <>Für verschiedene Erklärfilme zum Thema Schweizer Landwirtschaft haben wir für  den Schweizer Bauernverband eine einzigartige illustrierte Welt voller Tiere und Menschen kreiert, welche jederzeit nach Bedarf modifiziert und erweitert werden kann. Neben den Erklärfilmen in den Sprachen Deutsch, Französisch und Italienisch werden die Illustrationen auch für Print und andere Medien eingesetzt.</>,
  },
  projectOverview: {
    imageLink: '/logos/projects/schweizer-bauernverband.svg',
    imageAlt: 'Schweizer Bauernverband',
    title: 'Diverse Erklärfilme.',
    text: 'Storyboard, Design, Illustration & Animation',
  },
  outro: {
    title: <>Möchtest du auch deine eigene <HL color="blue">Welt</HL>?</>,
  },
  switcher: {
    nextProject: '/projekte/agrarinitiative',
    previousProject: '/projekte/trinkwasserinitiative',
  },

};

const AgrarInitiative: React.FunctionComponent<Props> = () => (
  <Project content={content}>
    <Head title="Motion Design Erklärfilme Schweizer Bauernverband | reiheacht" description="Tauche ein in eine von der reiheacht illustrierten und animierten Bauernhofwelt voller Tiere und Menschen zu verschiedenen Landwirtschaftsthemen" />
    <Video link="https://player.vimeo.com/video/520918592?width=100%&responsive=1" />
    <Space height="30px" />
    <Video link="https://player.vimeo.com/video/520918534" />
    <Space height="30px" />
    <Video link="https://player.vimeo.com/video/520918479" />
    <Space height="30px" />
    <Video link="https://player.vimeo.com/video/521055085" />
    <Space height="30px" />
  </Project>
);

export default AgrarInitiative;
