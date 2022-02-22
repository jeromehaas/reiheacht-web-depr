import React from 'react';
import Project from '@/components/pages/Project';
import { HL } from '@/components/text/Text';
import Image from '@/components/partials/Image';
import Head from '@/components/partials/Head';
import Space from '@/components/layout/Space';

interface Props { }

const content = {
  intro: {
    title: <>Sporty in <br /> Bewegung<HL color="blue">.</HL></>,
    text: <>Sportcard hat uns kontaktiert um ihr herziges Maskottchen Sporty für ihren Chat in Bewegung zu bringen. Dank der tollen Zusammenarbeit mit Sportcard begrüsst dich Sporty nun zwinkernd, lächelnd, winkend oder an deinen Bildschirm klopfend im Sporcard Chat. Einfach ein sehr  freundlicher und zuvorkommender Bär.</>,
  },
  projectOverview: {
    imageLink: '/logos/testimonials/sportcard.svg',
    imageAlt: 'Hotellerie Suisse',
    title: 'Sporty in Bewegung.',
    text: 'Illustration, Animation, Sound Design',
  },
  outro: {
    title: <>Du möchtest auch eine wichtige Botschaft an dein Zielpublikum <br />bringen<HL color="blue">?</HL></>,
  },
  switcher: {
    nextProject: '/projekte/it-point-imagefilm',
    previousProject: '/projekte/reiheacht-showreel',
  },

};

const AgrarInitiative: React.FunctionComponent<Props> = () => (
  <Project content={content}>
    <Head
      title="Illustration und Motion Design von Sporty | reiheacht"
      description="Animierter Sporty für den Empfang und den Chat (Motion Design und Illustration)"
    />
    <Space height="30px" />
    <span style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridGap: '30px' }}>
      <Image src="/projects/sporty/sporty-wave.gif" alt="Sporty Wave" />
      <Image src="/projects/sporty/sporty-knock.gif" alt="Sporty Knock" />
    </span>
  </Project>
);

export default AgrarInitiative;
