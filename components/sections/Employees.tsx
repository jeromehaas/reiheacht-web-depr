import React from 'react';
import Section from '@/components/layout/Section';
import {
  H2, H3, H4, P,
} from '@/components/text/Text';

import Highlight from '@/components/text/Highlight';
import TextBlock from '@/components/partials/TextBlock';
import Button from '@/components/buttons/Button';
import TileSet from '@/components/partials/TileSet';

interface Props { }

const textBlockContent = {
  section: 'employees',
  title: <>Dein <Highlight>Team</Highlight>.</>,
  text: <>Wir warten auf dein Startsignal.</>,
};

const tileContent = [
  {
    image: '/images/employees/mock-persona-male.png',
    alt: 'Marc Sen',
    title: <H4>Marc Sen</H4>,
    description: <P>Gründer & Motion Designer</P>,
    email: 'marc.sen@reiheacht.ch',
    overlayColor: '#0374B6',
  },
  {
    image: '/images/employees/mock-persona-female.png',
    alt: 'Ramona Basmaci',
    title: <H4>Ramona Basmaci</H4>,
    description: <P>Buchhaltung & HR </P>,
    email: 'ramona.basmaci@reiheacht.ch',
    overlayColor: '#0374B6',
  },
  {
    image: '/images/employees/mock-persona-female.png',
    alt: 'Julia Sen',
    title: <H4>Julia Sen</H4>,
    description: <P>Sachbearbeiterin</P>,
    email: 'julia.sen@reiheacht.ch ',
    overlayColor: '#0374B6',
  },
  {
    image: '/images/employees/mock-persona-male.png',
    alt: 'Jérôme Haas',
    title: <H4>Jérôme Haas</H4>,
    description: <P>Web-Entwickler</P>,
    email: 'jerome.haas@reiheacht.ch ',
    overlayColor: '#0374B6',
  },

];

const Employees: React.FunctionComponent<Props> = () => (
  <Section id="employees">
    <TextBlock content={textBlockContent} />
    <TileSet tiles={tileContent} type="employees" />
  </Section>
);

export default Employees;
