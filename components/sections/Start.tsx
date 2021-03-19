import React from 'react';
import Section from '@/components/layout/Section';
import MainTextBlock from '@/components/partials/MainTextBlock';
import Scroller from '@/components/animations/Scroller';
import Space from '@/components/layout/Space';

interface Props { }

const content = {
  section: 'home',
  title: <>Hier beginnt<br />die<span style={{ marginRight: '15px' }} /></>,
  carouselItems: ['Magie', 'Idee', 'Zusammenarbeit'],
  text: <>reiheacht ist eine digitale Kreativagentur, die mit Innovation und Zusammenarbeit einzigartige Lösungen anbietet, damit du deine Marke da stärken kannst, wo du deine Kunden am besten erreichst.<br /> <span style={{ display: 'inline-block', marginTop: '15px' }}>Wir bewegen alles und jeden – setz dich in die reiheacht.</span></>,
  buttons: [
    { text: 'Sitzplatz buchen', target: 'contact', delay: '7.5s' },
    { text: 'Projekte', target: 'projects', delay: '7.75s' },
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
