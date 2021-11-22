import React from 'react';
import Section from '@/components/layout/Section';
import { HL } from '@/components/text/Text';
import TextBlock from '@/components/partials/TextBlock';
import TileSet from '@/components/partials/TileSet';

interface Props { }

const textBlockContent = {
  section: 'employees',
  title: <>Dein <HL color="blue">Team</HL>.</>,
  text: <>Wir warten auf dein Startsignal.</>,
};

const tileContent = [
  {
    image: '/images/employees/marc.png',
    alt: 'Marc Sen',
    title: 'Marc Sen',
    description: 'Inhaber',
    email: 'marc.sen@reiheacht.ch',
    overlayColor: '#0374B6',
    animationColor: 'orange',
  },
  {
    image: '/images/employees/andrea.png',
    alt: 'Andrea Oldani',
    title: 'Andrea Oldani',
    description: 'Kommunikation',
    email: 'andrea.oldani@reiheacht.ch',
    overlayColor: '#025E94',
    animationColor: 'orange',
  },
  {
    image: '/images/employees/julia.png',
    alt: 'Julia Sen',
    title: 'Julia Sen',
    description: 'Administration',
    email: 'julia.sen@reiheacht.ch ',
    overlayColor: '#0374B6',
    animationColor: 'orange',
  },

];

const Employees: React.FunctionComponent<Props> = () => (
  <Section id="employees">
    <TextBlock content={textBlockContent} />
    <TileSet tiles={tileContent} type="employees" />
  </Section>
);

export default Employees;
