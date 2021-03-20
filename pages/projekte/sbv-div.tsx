import React from 'react';
import Project from '@/components/pages/Project';
import Highlight from '@/components/text/Highlight';
import Video from '@/components/partials/Video';
import Spacer from '@/components/layout/Spacer';

interface Props { }

const content = {
  intro: {
    title: <>Eine ganze Welt, <br /> nur für dich<Highlight>.</Highlight></>,
    text: <>Für verschiedene Erklärfilme zum Thema Schweizer Landwirtschaft haben wir für  den Schweizer Bauernverband eine einzigartige illustrierte Welt voller Tiere und Menschen kreiert, welche jederzeit nach Bedarf modifiziert und erweitert werden kann. Neben den Erklärfilmen in den Sprachen Deutsch, Französisch und Italienisch werden die Illustrationen auch für Print und andere Medien eingesetzt.</>,
  },
  projectOverview: {
    imageLink: '/logos/projects/schweizer-bauernverband.svg',
    imageAlt: 'Schweizer Bauernverband',
    title: 'Diverse Erklärfilme.',
    text: 'Storyboard, Design, Illustration & Animation',
  },
  outro: {
    title: <>Möchtest du auch deine eigene <Highlight>Welt</Highlight>?</>,
  },
  switcher: {
    nextProject: '/projekte/smartphone-schnitzeljagd',
    previousProject: '/projekte/trinkwasserinitiative',
  },

};

const AgrarInitiative: React.FunctionComponent<Props> = () => (
  <Project content={content}>
    <Video link="https://player.vimeo.com/video/520918592?width=100%&responsive=1" />
    <Spacer marginBottom="30px" />
    <Video link="https://player.vimeo.com/video/520918534" />
    <Spacer marginBottom="30px" />
    <Video link="https://player.vimeo.com/video/520918479" />
    <Spacer marginBottom="30px" />
    <Video link="https://player.vimeo.com/video/521055085" />
    <Spacer marginBottom="30px" />
  </Project>
);

export default AgrarInitiative;
