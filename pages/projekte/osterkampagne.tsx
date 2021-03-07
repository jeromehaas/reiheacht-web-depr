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
    title: <H2>Ein Ei kommt selten allei<Highlight>.</Highlight></H2>,
    text: <Paragraph>Importeier nehmen in der Schweiz mehr und mehr zu. Deshalb hat uns GalloSuisse gebeten Ihnen verschiedene Ideen für zu präsentieren.</Paragraph>
  },
  projectOverview: {
    imageLink: '/logos/projects/gallosuisse.svg',
    imageAlt: 'GalloSuissse',
    title: 'Osterkampagne.',
    text: 'Idee, Design, Illustration'
  },
  outro: {
    title: <H2>Möchtest du auch eine eigene <Highlight>Welt</Highlight>?</H2>,
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