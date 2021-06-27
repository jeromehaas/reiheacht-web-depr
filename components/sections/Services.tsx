import React from 'react';
import Section from '@/components/layout/Section';
import { HL } from '@/components/text/Text';
import TextBlock from '@/components/partials/TextBlock';
import TileSet from '@/components/partials/TileSet';

interface Props { }

const tileContent = [
  {
    image: '/illustrations/services/idea.svg',
    alt: 'Videokonzeption',
    title: 'Videokonzeption',
    overlayColor: 'white',
    link: 'leistungen/videokonzeption',
  },
  {
    image: '/illustrations/services/storytelling.svg',
    alt: 'Storytelling',
    title: 'Storytelling',
    overlayColor: 'orange',
    link: '/leistungen/storytelling',
  },
  {
    image: '/illustrations/services/illustration.svg',
    alt: 'Motion Design',
    title: 'Motion Design',
    overlayColor: 'white',
    link: '/leistungen/motion-design',
  },
  {
    image: '/illustrations/services/film.svg',
    alt: 'Erklär Video',
    title: 'Erklärvideo',
    overlayColor: 'orange',
    link: '/leistungen/erklaervideo',
  },
  {
    image: '/illustrations/services/web.svg',
    alt: 'Werbe- & Imagefilm',
    title: 'Werbe- & Imagefilm',
    overlayColor: 'white',
    link: '/leistungen/werbe-und-imagefilm',
  },
  {
    image: '/illustrations/services/sound.svg',
    alt: 'Sound-Design',
    title: 'Sound-Design',
    overlayColor: 'orange',
    link: '/leistungen/sound-design',
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
