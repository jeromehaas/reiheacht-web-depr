import React from 'react';
import Section from '@/components/layout/Section';
import MainTextBlock from '@/components/partials/MainTextBlock';
import Scroller from '@/components/animations/Scroller';
import Space from '@/components/layout/Space';
import { HL } from '@/components/text/Text';

interface Props { }

const content = {
  section: 'home',
  title: <>Hallo, wir sind <HL color="blue">reiheacht</HL>, eine Motion Design und Werbefilm Agentur aus Luzern<HL color="blue">.</HL></>,
  text: <>reiheacht ist eine digitale Kreativagentur, die mit Innovation und Zusammenarbeit einzigartige Bewegtbildlösungen anbietet, damit du deine Marke da stärken kannst, wo du deine Kunden am besten erreichst.<br /> <span style={{ display: 'inline-block', marginTop: '15px' }}>Wir bewegen alles und jeden – setz dich in die reiheacht.</span></>,
  buttons: [
    { text: 'Projekte', target: 'projects' },
    { text: 'Sitzplatz buchen', target: 'contact' },
  ],
};

const Start: React.FunctionComponent<Props> = () => (
  <Section hero id="home">
    <MainTextBlock content={content} />
    <Space height="260px" />
    <Scroller />
  </Section>
);

export default Start;
