import React from 'react';
import Section from '@/components/layout/Section';
import { H2 } from '@/components/text/Titles';
import { H3 } from '@/components/text/Titles';
import Highlight from '@/components/text/Highlight';
import Paragraph from '@/components/text/Paragraph';
import TextBlock from '@/components/partials/TextBlock'
import Button from '@/components/buttons/Button';
import TileSet from '@/components/partials/TileSet'

interface Props { }

const textBlockContent = {
  section: 'employees',
  title: <H2>Dein <Highlight>Team</Highlight>.</H2>,
  text: <Paragraph>Wir warten auf dein Startsignal.</Paragraph>
}

const tileContent = [
  {
    image: '/images/employees/persona.png',
    alt: 'Marc Sen',
    title: <H3>Marc Sen</H3>,
    description: <Paragraph>Gründer & Motion Designer</Paragraph>,
    overlayColor: '#0374B6'
  },
  {
    image: '/images/employees/persona.png',
    alt: 'Ramona Basmaci',
    title: <H3>Ramona Basmaci</H3>,
    description: <Paragraph>Buchhaltung & HR </Paragraph>,
    overlayColor: '#0374B6'
  },
  {
    image: '/images/employees/persona.png',
    alt: 'Julia Sen',
    title: <H3>Julia Sen</H3>,
    description: <Paragraph>Sachbearbeiterin</Paragraph>,
    overlayColor: '#0374B6'
  }

] 

const Employees: React.FunctionComponent<Props> = () => {


  return (
    <Section id={'employees'}>
      <TextBlock content={textBlockContent} />
      <TileSet tiles={tileContent} />
    </Section>
  );

}

export default Employees;