import React from 'react';
import Section from '@/components/layout/Section';
import MainTextBlock from '@/components/partials/MainTextBlock';

interface Props { }

const content = {
  section: 'home',
  title: <>Hier beginnt<br />die<span style={{ marginRight: '25px' }} /></>,
  carouselItems: ['Magie', 'Idee', 'Zusammenarbeit'],
  text: <>reiheacht ist eine digitale Kreativagentur, die mit Innovation und Zusammenarbeit einzigartige Lösungen anbietet, damit du deine Marke da stärken kannst, wo du deine Kunden am besten erreichst.<br />Wir bewegen alles und jeden – setz dich in die reiheacht.</>,
  buttons: [
    { text: 'Sitzplatz buchen', target: '#', delay: '5s' },
    { text: 'Projekte', target: '#', delay: '5.25s' },
  ],
};

const Start: React.FunctionComponent<Props> = () => (
  <Section hero id="home">
    <MainTextBlock content={content} />
  </Section>
);

export default Start;
