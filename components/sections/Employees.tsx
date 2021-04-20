import React from 'react';
import Section from '@/components/layout/Section';
import {
  H2, H3, H4, P, HL,
} from '@/components/text/Text';

import TextBlock from '@/components/partials/TextBlock';
import Button from '@/components/buttons/Button';
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
    description: 'Gründer',
    email: 'marc.sen@reiheacht.ch',
    overlayColor: '#0374B6',
    animationColor: 'orange',
  },
  {
    image: '/images/employees/julia.png',
    alt: 'Julia Sen',
    title: 'Julia Sen',
    description: 'Sb. Administration',
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
