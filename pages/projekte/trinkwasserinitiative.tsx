import React from 'react';
import Project from '@/components/pages/Project';
import { H2 } from '@/components/text/Titles';
import Paragraph from '@/components/text/Paragraph';
import Highlight from '@/components/text/Highlight';
import Video from '@/components/partials/Video';
import Button from '@/components/buttons/Button';
import Image from '@/components/partials/Image';

interface Props { }

const content = {
  intro: {
    title: <H2>
      Dein Erklärfilm, auf dich zugeschnitten
      <Highlight>.</Highlight>
    </H2>,
    text: <Paragraph>Für die im Juni 2021 anstehende Trinkwasserinitiative durften wir zwei animierte Erklärfilme zu den Auswirkungen der Trinkwasserinitiative realisieren, welche überwiegend auf ihrer Webseite sowie Youtube eingesetzt werden. Damit sich diese Videos von den bisherigen Erklärfilmen abheben, haben wir hier einen neuen Stil kreiert.</Paragraph>,
  },
  projectOverview: {
    imageLink: '/logos/projects/schweizer-bauernverband.svg',
    imageAlt: 'Schweizer Bauernverband',
    title: 'Trinkwasserinitiative.',
    text: 'Storyboard, Design, Illustration & Animation',
  },
  outro: {
    title: <H2>
      Ebenfalls an einem massgeschneidertem Erklärfilm
      {' '}
      <Highlight>interessiert</Highlight>
      ?
           </H2>,
    button: <Button link="/#contact" content="Sitzplatz buchen" animated className="active" customDelay="3s" />,
  },

};

const TrinkwasserInitiative: React.FunctionComponent<Props> = () => (
  <Project content={content}>
    <Video link="https://player.vimeo.com/video/519844178" />
  </Project>
);

export default TrinkwasserInitiative;
