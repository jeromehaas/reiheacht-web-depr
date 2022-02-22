import React from 'react';
import Section from '@/components/layout/Section';
import { HL } from '@/components/text/Text';
import TextBlock from '@/components/partials/TextBlock';
import TileSet from '@/components/partials/TileSet';

interface Props { }

const tileContent = [
  {
    image: '/illustrations/projects/reiheacht.png',
    alt: 'reiheacht',
    title: 'reiheacht',
    description: 'Showreel',
    overlayColor: '#0374B6',
    link: '/projekte/reiheacht-showreel',
  },
  {
    image: '/illustrations/projects/sporty.png',
    alt: 'Sportcard',
    title: 'Sportcard',
    description: 'Sporty als Chatbot',
    overlayColor: '#0071A6',
    link: '/projekte/sporty',
  },
  {
    image: '/illustrations/projects/it-point.png',
    alt: 'ITpoint',
    title: 'ITpoint',
    description: 'Imagefilm 2021',
    overlayColor: '#004A8F',
    link: '/projekte/it-point-imagefilm',
  },
  {
    image: '/illustrations/projects/altuna-box.png',
    alt: 'HOLLIGER IMBALLEGNO AG',
    title: 'HOLLIGER IMBALLEGNO AG',
    description: 'Altuna Box',
    overlayColor: '#0072BC',
    link: '/projekte/altuna-box',
  },
  {
    image: '/illustrations/projects/extreme-agrarinitiative.png',
    alt: 'Schweizer Bauernverband',
    title: 'Schweizer Bauernverband',
    description: 'Extreme Agrarinitiative',
    overlayColor: '#9EA600',
    link: '/projekte/extreme-agrarinitiative',
  },
  {
    image: '/illustrations/projects/adventsaktion.jpg',
    alt: 'HotellerieSuisse',
    title: 'HotellerieSuisse',
    description: 'Adventskampagne 2021',
    overlayColor: '#DA291C',
    link: '/projekte/adventsaktion',
  },
  // {
  //   image: '/illustrations/projects/osterkampagne.png',
  //   alt: 'GalloSuisse',
  //   title: 'GalloSuisse',
  //   description: 'Ostern 2021',
  //   overlayColor: '#C70103',
  //   link: '/projekte/osterkampagne',
  // },
  {
    image: '/illustrations/projects/trinkwasserinitiative.png',
    alt: 'Schweizer Bauernverband',
    title: 'Schweizer Bauernverband',
    description: 'Trinkwasserinitiative',
    overlayColor: '#9EA600',
    link: '/projekte/trinkwasserinitiative',
  },
  {
    image: '/illustrations/projects/sbv-div.png',
    alt: 'Schweizer Bauernverband',
    title: 'Schweizer Bauernverband',
    description: 'Diverse Erklärfilme',
    overlayColor: '#9EA600',
    link: '/projekte/erklaerfilme-sbv',
  },
  {
    image: '/illustrations/projects/agrarinitiative.png',
    alt: 'GalloSuisse',
    title: 'GalloSuisse',
    description: 'Extreme Agrarinitiative',
    overlayColor: '#C70103',
    link: '/projekte/agrarinitiative',
  },
];

const textBlockContent = {
  section: 'projects',
  title: <>Perfekte Aussicht,<br /> aus der besten <HL color="blue">reihe</HL>.</>,
  text: <>Dein Spitzenprogramm – zurücklehnen und geniessen.</>,
};

const Projects: React.FunctionComponent<Props> = () => (
  <Section id="projects">
    <TextBlock content={textBlockContent} />
    <TileSet tiles={tileContent} type="projects" />
  </Section>
);

export default Projects;
