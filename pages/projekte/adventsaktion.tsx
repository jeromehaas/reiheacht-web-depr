import React from 'react';
import Project from '@/components/pages/Project';
import { HL } from '@/components/text/Text';
import Image from '@/components/partials/Image';
import Head from '@/components/partials/Head';
import Video from '@/components/partials/Video';
import Space from '@/components/layout/Space';

interface Props { }

const content = {
  intro: {
    title: <>Schöne Adventszeit<HL color="blue">.</HL></>,
    text: <>In Zusammenarbeit mit der Kreativabteilung der HotellerieSuisse durften wir für ihre Adventsaktion 2021 Illustrationen in vielen Formaten für verschiedene Einsatzzwecke kreieren. Kurze Animationen für Social Media runden das Paket ab. Eine fröhliche Adventszeit!</>,
  },
  projectOverview: {
    imageLink: '/logos/projects/hotellerie-suisse.svg',
    imageAlt: 'Hotellerie Suisse',
    title: 'Adventsaktion 2021',
    text: 'Illustration & Animation',
  },
  outro: {
    title: <>Du möchtest auch eine wichtige Botschaft an dein Zielpublikum <br />bringen<HL color="blue">?</HL></>,
  },
  switcher: {
    nextProject: '/projekte/trinkwasserinitiative',
    previousProject: '/projekte/extreme-agrarinitiative',
  },

};

const AgrarInitiative: React.FunctionComponent<Props> = () => (
  <Project content={content}>
    <Head title="Illustration und Motion Design für HotellerieSuisse | reiheacht" description="Illustrationen und Animationen in vielen Formaten für die HotellerieSuisse" />
    <Image src="/projects/hotellerie-suisse/landingpage.jpg" alt="Landingpage" />
    <Space height="30px" />
    <Image src="/projects/hotellerie-suisse/inserat.png" alt="Inserat" />
    <Space height="30px" />
    <span style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridGap: '30px' }}>
      <Image src="/projects/hotellerie-suisse/booster.gif" alt="Booster" />
      <Image src="/projects/hotellerie-suisse/roadtrip.gif" alt="Roadtrip" />
    </span>
  </Project>
);

export default AgrarInitiative;
