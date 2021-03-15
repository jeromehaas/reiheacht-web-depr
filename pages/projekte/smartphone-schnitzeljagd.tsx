import React from 'react';
import Project from '@/components/pages/Project';
import { H2, P } from '@/components/text/Text';

import Highlight from '@/components/text/Highlight';
import Video from '@/components/partials/Video';
import Button from '@/components/buttons/Button';
import Head from 'next/head';

interface Props { }

const content = {
  intro: {
    title: <>Im Einklang, mit deinem Produkt<Highlight>.</Highlight></>,
    text: <>In Zusammenarbeit mit der swisslocaltravel durften wir einen Trailer für ihre Familienschnitzeljagd umsetzen. Die Herausforderung bestand darin, dass der Trailer das günstige Familienangebot widerspiegelt. Design und Illustrationen wurden von von der swisslocaltravel bereitgestellt. </>,
  },
  projectOverview: {
    imageLink: '/logos/projects/schweizer-bauernverband.svg',
    imageAlt: 'Schweizer Bauernverband',
    title: 'Smartphone-Schnitzeljagd.',
    text: 'Animation',
  },
  outro: {
    title: <>Darfs ein passender Trailer für dein <Highlight>Produkt</Highlight>?</>,
  },
  switcher: {
    nextProject: '/projekte/sbv-div',
    previousProject: '/projekte/agrarinitiative',
  },

};

const AgrarInitiative: React.FunctionComponent<Props> = () => (
  <>
    <Project content={content}>
      <Video link="https://player.vimeo.com/video/520907425" />
    </Project>
  </>
);

export default AgrarInitiative;
