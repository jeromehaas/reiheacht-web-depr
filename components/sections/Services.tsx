import React from 'react';
import Section from '@/components/layout/Section';
import { HL } from '@/components/text/Text';
import TextBlock from '@/components/partials/TextBlock';
import TileSet from '@/components/partials/TileSet';

interface Props { }

const tileContent = [
  {
    image: '/illustrations/services/idea.svg',
    alt: 'Planung',
    title: 'Planung',
    description: ['Idee', 'Konzept'],
    overlayColor: 'white',
    link: '#hello',
  },
  {
    image: '/illustrations/services/storytelling.svg',
    alt: 'Storytelling',
    title: 'Storytelling',
    description: ['Drehbuch', 'Storyboard'],
    overlayColor: 'orange',
    link: '#hello',
  },
  {
    image: '/illustrations/services/film.svg',
    alt: 'Film',
    title: 'Film',
    description: ['Motion Design', 'Erklärfilm', 'Werbefilm', 'Imagefilm'],
    overlayColor: 'white',
    link: '#hello',
  },
  {
    image: '/illustrations/services/illustration.svg',
    alt: 'Design',
    title: 'Design',
    description: ['Illustration', 'Layout'],
    overlayColor: 'orange',
    link: '#hello',
  },
  {
    image: '/illustrations/services/sound.svg',
    alt: 'Sound design',
    title: 'Sound design',
    description: ['Voice Over', 'Soundeffekte', 'Musik'],
    overlayColor: 'white',
    link: '#hello',
  },
  {
    image: '/illustrations/services/web.svg',
    alt: 'Web',
    title: 'Web',
    description: ['Webbanner', 'UI Animation'],
    overlayColor: 'orange',
    link: '#hello',
  },
];

const textBlockContent = {
  section: 'services',
  title: <>Erwecke deine <br /> Idee zum <HL color="blue">Leben</HL>.</>,
  text: <>Das tun wir den ganzen Tag – und wir lieben es.</>,
};

const Services: React.FunctionComponent<Props> = () => (
  <Section id="services">
    <TextBlock content={textBlockContent} />
    <TileSet tiles={tileContent} type="services" />
  </Section>
);

export default Services;
