import React from 'react';
import Section from '@/components/layout/Section';
import H2 from '@/components/text/H2';
import H3 from '@/components/text/H3';
import Highlight from '@/components/text/Highlight';
import Paragraph from '@/components/text/Paragraph';
import TextBlock from '@/components/partials/TextBlock';
import Button from '@/components/buttons/Button';
import ListItem from '@/components/text/ListItem';
import TileSet from '@/components/partials/TileSet';

interface Props { }

const tileContent = [
  {
    image: '/illustrations/services/idea.svg',
    alt: 'Schweizer Bauernverband',
    title: <H3>Schweizer Bauernverband</H3>,
    description: <Paragraph>Agrarinitiative</Paragraph>,
    overlayColor: '#9EA600',
    link: '/projekte/agrar-initiative'
  },
  {
    image: '/illustrations/services/storytelling.svg',
    alt: 'GalloSuisse',
    title: <H3>GalloSuisse</H3>,
    description: <Paragraph>Osterkampagne</Paragraph>,
    overlayColor: '#C70103',
    link: '/projekte/agrar-initiative'
  },
  {
    image: '/illustrations/services/illustration.svg',
    alt: 'Schweizer Bauernverband',
    title: <H3>Schweizer Bauernverband</H3>,
    description: <Paragraph>Agrarinitiative</Paragraph>,
    overlayColor: '#9EA600',
    link: '/projekte/agrar-initiative'
  },
  {
    image: '/illustrations/services/storytelling.svg',
    alt: 'Design',
    title: <H3>Design</H3>,
    description: <Paragraph>Agrarinitiative</Paragraph>,
    overlayColor: '#FC0031',
    link: '/projekte/agrar-initiative'
  },
  {
    image: '/illustrations/services/sound.svg',
    alt: 'Schweizer Bauernverband',
    title: <H3>Schweizer Bauernverband</H3>,
    description: <Paragraph>Agrarinitiative</Paragraph>,
    overlayColor: '#9EA600',
    link: '/projekte/agrar-initiative'
  },
  {
    image: '/illustrations/services/film.svg',
    alt: 'GalloSuisse',
    title: <H3>GalloSuisse</H3>,
    description: <Paragraph>Osterkampagne</Paragraph>,
    overlayColor: '#C70103',
    link: '/projekte/agrar-initiative'
  },
] 

const textBlockContent = {
  section: 'projects',
  title: <H2>Perfekte Aussicht, <br /> aus der besten <Highlight>reihe</Highlight>.</H2>,
  text: <Paragraph>Dein Spitzenprogramm – zurücklehnen und geniessen.</Paragraph>,
}

const Projects: React.FunctionComponent<Props> = () => {


  return (
    <Section id={'projects'}>
      <TextBlock content={textBlockContent} />
      <TileSet tiles={tileContent} />
    </Section>
  );

}

export default Projects;