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
    title: <H2>
      Im Einklang, mit deinem Produkt.
      <Highlight>.</Highlight>
    </H2>,
    text: <Paragraph>In Zusammenarbeit mit der swisslocaltravel durften wir einen Trailer für ihre Familienschnitzeljagd umsetzen. Die Herausforderung bestand darin, dass der Trailer das günstige Familienangebot widerspiegelt. Design und Illustrationen wurden von von der swisslocaltravel bereitgestellt. </Paragraph>,
  },
  projectOverview: {
    imageLink: '/logos/projects/schweizer-bauernverband.svg',
    imageAlt: 'Schweizer Bauernverband',
    title: 'Smartphone-Schnitzeljagd.',
    text: 'Animation',
  },
  outro: {
    title: <H2>
      Darfs ein passender Trailer für dein
      {' '}
      <Highlight>Produkt</Highlight>
      ?
    </H2>,
    button: <Button link="/#contact" content="Sitzplatz buchen" animated className="active" customDelay="3s" />,
  },

};

const AgrarInitiative: React.FunctionComponent<Props> = () => (
  <Project content={content}>
    <Video link="https://player.vimeo.com/video/520907425" />
  </Project>
);

export default AgrarInitiative;
