import React from 'react';
import Section from '@/components/layout/Section';
import { H2, H3 } from '@/components/text/Text';

import Highlight from '@/components/text/Highlight';
import Paragraph from '@/components/text/Paragraph';
import TextBlock from '@/components/partials/TextBlock';
import Button from '@/components/buttons/Button';
import ListItem from '@/components/text/ListItem';
import TileSet from '@/components/partials/TileSet';

interface Props { }

const tileContent = [
  {
    image: '/illustrations/projects/extreme-agrarinitiative.png',
    alt: 'Schweizer Bauernverband',
    title: 'Schweizer Bauernverband',
    description: 'Extreme Agrarinitiative',
    overlayColor: '#9EA600',
    link: '/projekte/extreme-agrarinitiative',
  },
  {
    image: '/illustrations/projects/osterkampagne.png',
    alt: 'Gallo Suisse',
    title: 'Gallo Suisse',
    description: 'Ostern 2021',
    overlayColor: '#C70103',
    link: '/projekte/osterkampagne',
  },
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
    link: '/projekte/sbv-div',

  },
  {
    image: '/illustrations/projects/extreme-agrarinitiative.png',
    alt: 'Gallo Suisse',
    title: 'Gallo Suisse',
    description: 'Agrarinitiative',
    overlayColor: '#C70103',
    link: '/projekte/agrarinitiative',
  },
  {
    image: '/illustrations/projects/smartphone-schnitzeljagd.png',
    alt: 'Design',
    title: 'Swisslocaltravel',
    description: 'Smartphone-Schnitzeljagd',
    overlayColor: '#FC0031',
    link: '/projekte/smartphone-schnitzeljagd',

  },
];

const textBlockContent = {
  section: 'projects',
  title: <>Perfekte Aussicht,<br /> aus der besten <Highlight>reihe</Highlight>.</>,
  text: <>Dein Spitzenprogramm – zurücklehnen und geniessen.</>,
};

const Projects: React.FunctionComponent<Props> = () => (
  <Section id="projects">
    <TextBlock content={textBlockContent} />
    <TileSet tiles={tileContent} type="projects" />
  </Section>
);

export default Projects;
