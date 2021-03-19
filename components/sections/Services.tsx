import React from 'react';
import Section from '@/components/layout/Section';
import { H2, ListItem } from '@/components/text/Text';
import Highlight from '@/components/text/Highlight';
import Paragraph from '@/components/text/Paragraph';
import TextBlock from '@/components/partials/TextBlock';
import Button from '@/components/buttons/Button';
import TileSet from '@/components/partials/TileSet';

interface Props { }

const tileContent = [
  {
    image: '/illustrations/services/idea.svg',
    alt: 'Planung',
    title: 'Planung',
    description: ['Idee', 'Konzept'],
    overlayColor: 'white',
  },
  {
    image: '/illustrations/services/storytelling.svg',
    alt: 'Storytelling',
    title: 'Storytelling',
    description: ['Drehbuch', 'Storyboard'],
    overlayColor: 'orange',
  },
  {
    image: '/illustrations/services/film.svg',
    alt: 'Film',
    title: 'Film',
    description: ['Animation', 'Erklärfilm', 'Werbefilm', 'Imagefilm'],
    overlayColor: 'white',
  },
  {
    image: '/illustrations/services/illustration.svg',
    alt: 'Design',
    title: 'Design',
    description: ['Illustration', 'Layout', 'Webdesign'],
    overlayColor: 'orange',
  },
  {
    image: '/illustrations/services/sound.svg',
    alt: 'Sound design',
    title: 'Sound design',
    description: ['Voice Over', 'Soundeffekte'],
    overlayColor: 'white',
  },
  {
    image: '/illustrations/services/web.svg',
    alt: 'Web',
    title: 'Web',
    description: ['Social Media', 'Webentwicklung'],
    overlayColor: 'orange',
  },
];

const textBlockContent = {
  section: 'services',
  title: <>Erwecke deine <br /> Idee zum <Highlight>Leben</Highlight>.</>,
  text: <>Das tun wir den ganzen Tag – und wir lieben es.</>,
};

const Services: React.FunctionComponent<Props> = () => (
  <Section id="services">
    <TextBlock content={textBlockContent} />
    <TileSet tiles={tileContent} type="services" />
  </Section>
);

export default Services;
