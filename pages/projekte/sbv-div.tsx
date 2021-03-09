import React from 'react';
import Project from '@/components/pages/Project';
import { H2 } from '@/components/text/Titles';
import Paragraph from '@/components/text/Paragraph';
import Highlight from '@/components/text/Highlight';
import Video from '@/components/partials/Video';
import Button from '@/components/buttons/Button';
import Spacer from '@/components/layout/Spacer';

interface Props { }

const content = {
  intro: {
    title: <H2>Eine ganze Welt, nur für dich<Highlight>.</Highlight></H2>,
    text: <Paragraph>Für verschiedene Erklärfilme zum Thema Schweizer Landwirtschaft haben wir für  den Schweizer Bauernverband eine einzigartige illustrierte Welt voller Tiere und Menschen kreiert, welche jederzeit nach Bedarf modifiziert und erweitert werden kann. Neben den Erklärfilmen werden die Illustrationen auch für Print und andere Medien eingesetzt.</Paragraph>,
  },
  projectOverview: {
    imageLink: '/logos/projects/schweizer-bauernverband.svg',
    imageAlt: 'Schweizer Bauernverband',
    title: 'Diverse Erklärfilme.',
    text: 'Storyboard, Design, Illustration & Animation',
  },
  outro: {
    title: <H2>Möchtest du auch deine eigene <Highlight>Welt</Highlight>?</H2>,
    button: <Button link="/#contact" content="Sitzplatz buchen" animated className="active" customDelay="3s" />,
  },

};

const AgrarInitiative: React.FunctionComponent<Props> = () => (
  <Project content={content}>
    <Video link="https://player.vimeo.com/video/520918592" />
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
