import React from 'react';
import Project from '@/components/pages/Project';
import { H2 } from '@/components/text/Titles';
import Paragraph from '@/components/text/Paragraph';
import Highlight from '@/components/text/Highlight';
import Video from '@/components/partials/Video';
import Button from '@/components/buttons/Button';

interface Props { }

const content = {
  intro: {
    title: <H2>Eine ganze Welt, nur für dich.<Highlight>.</Highlight></H2>,
    text: <Paragraph>Für verschiedene Erklärfilme zum Thema Schweizer Landwirtschaft haben wir für  den Schweizer Bauernverband eine einzigartige illustrierte Welt voller Tiere und Menschen kreiert, welche jederzeit nach Bedarf modifiziert und erweitert werden kann. Neben den Erklärfilmen werden die Illustrationen auch für Print und andere Medien eingesetzt.</Paragraph>
  },
  projectOverview: {
    imageLink: '/logos/projects/schweizer-bauernverband.svg',
    imageAlt: 'Schweizer Bauernverband',
    title: 'Diverse Erklärfilme.',
    text: 'Storyboard, Design, Illustration & Animation'
  },
  outro: {
    title: <H2>Du möchtest deine Idee <br /> auch zum Leben  <Highlight>erwecken</Highlight>?</H2>,
    button: <Button link={'/#contact'} content={'Sitzplatz buchen'} animated={true} className={'active'} customDelay={'3s'} />
  }

}

const AgrarInitiative: React.FunctionComponent<Props> = () => {


  return (
    <Project content={content}>
      <Video link={"https://player.vimeo.com/video/519844178"} />
    </Project>
  );

}

export default AgrarInitiative;