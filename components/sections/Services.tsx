import React from 'react';
import Section from '@/components/layout/Section';
// import { H2, H3 } from '@/components/text/Titles';
import { H2 } from '@/components/text/Text';
import Highlight from '@/components/text/Highlight';
import Paragraph from '@/components/text/Paragraph';
import TextBlock from '@/components/partials/TextBlock';
import Button from '@/components/buttons/Button';
import TileSet from '@/components/partials/TileSet';
import ListItem from '@/components/text/ListItem';

interface Props { }

const tileContent = [
  {
    image: '/illustrations/services/idea.svg',
    alt: 'Idee & Konzept',
    title: 'Idee & Konzept',
    description: [],
    overlayColor: '#C23E27',
  },
  {
    image: '/illustrations/services/storytelling.svg',
    alt: 'Storytelling',
    title: 'Storytelling',
    description: ['Drehbuch', 'Storyboard'],
    overlayColor: '#C23E27',
  },
  {
    image: '/illustrations/services/illustration.svg',
    alt: 'Film',
    title: 'Film',
    description: ['Erklärfilm', 'Werbefilm', 'Imagefilm'],
    overlayColor: '#C23E27',
  },
  {
    image: '/illustrations/services/web.svg',
    alt: 'Design',
    title: 'Design',
    description: ['Illustration', 'Layout', 'Webdesign'],
    overlayColor: '#C23E27',
  },
  {
    image: '/illustrations/services/sound.svg',
    alt: 'Sound design',
    title: 'Sound design',
    description: ['Voice Over', 'Soundeffekte'],
    overlayColor: '#C23E27',
  },
  {
    image: '/illustrations/services/film.svg',
    alt: 'Film',
    title: 'Film',
    description: ['Social Media', 'Webentwicklung'],
    overlayColor: '#C23E27',
  },
];

const textBlockContent = {
  section: 'services',
  title: <>Erwecke deine Idee zum <Highlight>Leben</Highlight>.</>,
  text: <>Das tun wir den ganzen Tag – und wir lieben es.</>,
};

const Services: React.FunctionComponent<Props> = () => (
  <Section id="services">
    <TextBlock content={textBlockContent} />
    <TileSet tiles={tileContent} type="services" />
  </Section>
);

export default Services;
