import React from 'react';
import Section from '@/components/layout/Section';
import { H2, H3 } from '@/components/text/Titles';

import Highlight from '@/components/text/Highlight';
import Paragraph from '@/components/text/Paragraph';
import TextBlock from '@/components/partials/TextBlock';
import Button from '@/components/buttons/Button';
import ListItem from '@/components/text/ListItem';
import TileSet from '@/components/partials/TileSet';

interface Props { }

const tileContent = [
  // {
  //   image: '/illustrations/projects/extreme-agrarinitiative.png',
  //   alt: 'Schweizer Bauernverband',
  //   title: <H3>Schweizer Bauernverband</H3>,
  //   description: <Paragraph>Extreme Agrarinitiative</Paragraph>,
  //   overlayColor: '#9EA600',
  //   link: '/projekte/#',
  // },
  // {
  //   image: '/illustrations/projects/osterkampagne.png',
  //   alt: 'GalloSuisse',
  //   title: <H3>GalloSuisse</H3>,
  //   description: <Paragraph>Osterkampagne</Paragraph>,
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
    description: 'SBV div',
    overlayColor: '#9EA600',
    link: '/projekte/sbv-div',
  },
  {
    image: '/illustrations/projects/smartphone-schnitzeljagd.png',
    alt: 'Design',
    title: 'Swisslocaltravel',
    description: 'Smartphone-Schnitzeljagd',
    overlayColor: '#FC0031',
    link: '/projekte/smartphone-schnitzeljagd',
  },
  {
    image: '/illustrations/projects/agrarinitiative.png',
    alt: 'GalloSuisse',
    title: 'GalloSuisse',
    description: 'Agrarinitiative',
    overlayColor: '#C70103',
    link: '/projekte/agrarinitiative',
  },
];

const textBlockContent = {
  section: 'projects',
  title: <>Perfekte Aussicht, aus der besten <Highlight>reihe</Highlight>.</>,
  text: <>Dein Spitzenprogramm – zurücklehnen und geniessen.</>,
};

const Projects: React.FunctionComponent<Props> = () => (
  <Section id="projects">
    <TextBlock content={textBlockContent} />
    <TileSet tiles={tileContent} type="projects" />
  </Section>
);

export default Projects;
