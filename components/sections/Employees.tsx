import React from 'react';
import Section from '@/components/layout/Section';
import { H2, H3, H4 } from '@/components/text/Titles';

import Highlight from '@/components/text/Highlight';
import Paragraph from '@/components/text/Paragraph';
import TextBlock from '@/components/partials/TextBlock';
import Button from '@/components/buttons/Button';
import TileSet from '@/components/partials/TileSet';

interface Props { }

const textBlockContent = {
  section: 'employees',
  title: <H2>
    Dein
    {' '}
    <Highlight>Team</Highlight>
    .
  </H2>,
  text: <Paragraph>Wir warten auf dein Startsignal.</Paragraph>,

};

const tileContent = [
  {
    image: '/images/employees/mock-persona-male.png',
    alt: 'Marc Sen',
    title: <H4>Marc Sen</H4>,
    description: <Paragraph>Gründer & Motion Designer</Paragraph>,
    email: 'marc.sen@reiheacht.ch',
    overlayColor: '#0374B6',
  },
  {
    image: '/images/employees/mock-persona-female.png',
    alt: 'Ramona Basmaci',
    title: <H4>Ramona Basmaci</H4>,
    description: <Paragraph>Buchhaltung & HR </Paragraph>,
    email: 'ramona.basmaci@reiheacht.ch',
    overlayColor: '#0374B6',
  },
  {
    image: '/images/employees/mock-persona-female.png',
    alt: 'Julia Sen',
    title: <H4>Julia Sen</H4>,
    description: <Paragraph>Sachbearbeiterin</Paragraph>,
    email: 'julia.sen@reiheacht.ch ',
    overlayColor: '#0374B6',
  },
  {
    image: '/images/employees/mock-persona-male.png',
    alt: 'Jérôme Haas',
    title: <H4>Jérôme Haas</H4>,
    description: <Paragraph>Web-Entwickler</Paragraph>,
    email: 'jerome.haas@reiheacht.ch ',
    overlayColor: '#0374B6',
  },

];

const Employees: React.FunctionComponent<Props> = () => (
  <Section id="employees">
    <TextBlock content={textBlockContent} />
    <TileSet tiles={tileContent} type="employee" />
  </Section>
);

export default Employees;
