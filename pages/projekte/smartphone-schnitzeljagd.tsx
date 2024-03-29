import React from 'react';
import Project from '@/components/pages/Project';
import { HL } from '@/components/text/Text';
import Video from '@/components/partials/Video';
import Head from '@/components/partials/Head';

interface Props { }

const content = {
  intro: {
    title: <>Im Einklang, mit <br /> deinem Produkt<HL color="blue">.</HL></>,
    text: <>In Zusammenarbeit mit der swisslocaltravel durften wir einen Trailer für ihre Familienschnitzeljagd umsetzen. Die Herausforderung bestand darin, dass der Trailer das günstige Familienangebot widerspiegelt. Design und Illustrationen wurden von von der swisslocaltravel bereitgestellt. </>,
  },
  projectOverview: {
    imageLink: '/logos/projects/swiss-local-travel.svg',
    imageAlt: 'Swiss Local Travel',
    title: 'Smartphone-Schnitzeljagd.',
    text: 'Animation',
  },
  outro: {
    title: <>Darfs ein passender Trailer für dein <HL color="blue">Produkt</HL>?</>,
  },
  switcher: {
    nextProject: '/projekte/extreme-agrarinitiative',
    previousProject: '/projekte/agrarinitiative',
  },

};

const AgrarInitiative: React.FunctionComponent<Props> = () => (

  <Project content={content}>
    <Head title="" description="" />
    <Video link="https://player.vimeo.com/video/520907425" />
  </Project>

);

export default AgrarInitiative;
