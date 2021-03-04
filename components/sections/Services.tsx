import React from 'react';
import Section from '@/components/layout/Section';
import H2 from '@/components/text/H2';
import H3 from '@/components/text/H3';
import Highlight from '@/components/text/Highlight';
import Paragraph from '@/components/text/Paragraph';
import TextBlock from '@/components/partials/TextBlock'
import Button from '@/components/buttons/Button';
import TileSet from '@/components/partials/TileSet';
import ListItem from '@/components/text/ListItem';

interface Props { }

const tileContent = [
  {
    image: '/illustrations/services/idea.svg',
    alt: 'Idee & Konzept',
    title: <H3>Idee & Konzept</H3>,
    description: '',
    overlayColor: '#C23E27'
  },
  {
    image: '/illustrations/services/storytelling.svg',
    alt: 'Storytelling',
    title: <H3>Storytelling</H3>,
    description: <ul> <ListItem>Drehbuch</ListItem> <ListItem>Storyboard</ListItem> </ul>,
    overlayColor: '#C23E27'
  },
  {
    image: '/illustrations/services/illustration.svg',
    alt: 'Film',
    title: <H3>Film</H3>,
    description: <ul> <ListItem>Animation</ListItem> <ListItem>Erklärfilm</ListItem>  <ListItem>Werbefilm</ListItem>  <ListItem>Imagefilm</ListItem> </ul>,
    overlayColor: '#C23E27'
  },
  {
    image: '/illustrations/services/storytelling.svg',
    alt: 'Design',
    title: <H3>Design</H3>,
    description: <ul> <ListItem>Illustration</ListItem> <ListItem>Layout</ListItem>  <ListItem>Webdesign</ListItem> </ul>,
    overlayColor: '#C23E27'
  },
  {
    image: '/illustrations/services/sound.svg',
    alt: 'Sound design',
    title: <H3>Sound design</H3>,
    description: <ul> <ListItem>Voice Over</ListItem> <ListItem>Soundeffekte</ListItem> </ul>,
    overlayColor: '#C23E27'
  },
  {
    image: '/illustrations/services/film.svg',
    alt: 'Film',
    title: <H3>Film</H3>,
    description: <ul> <ListItem>Social Media</ListItem> <ListItem>Webentwicklung</ListItem> </ul>,
    overlayColor: '#C23E27'
  },
] 

const textBlockContent = {
  title: <H2>Erwecke deine <br /> Idee zum <Highlight>Leben</Highlight>.</H2>,
  paragraph: <Paragraph>Das tun wir den ganzen Tag – und wir lieben es.</Paragraph>
}

const Services: React.FunctionComponent<Props> = () => {


  return (
    <Section>
      <TextBlock content={textBlockContent} />
      <TileSet tiles={tileContent} />
    </Section>
  );

}

export default Services;