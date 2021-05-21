import React from 'react';
import Section from '@/components/layout/Section';
import MainTextBlock from '@/components/partials/MainTextBlock';
import Scroller from '@/components/animations/Scroller';
import Space from '@/components/layout/Space';
import styled from 'styled-components';

interface Props { }

const MarginRight = styled.span`
  margin-right: 15px;
  @media (max-width: 550px) {
    margin-right: 9px;
  }  
`;

const content = {
  section: 'home',
  title: <>Hier beginnt<br />die<MarginRight /></>,
  carouselItems: ['Magie', 'Idee', 'Zusammenarbeit'],
  text: <>reiheacht ist eine digitale Kreativagentur, die mit Innovation und Zusammenarbeit einzigartige Bewegtbildlösungen anbietet, damit du deine Marke da stärken kannst, wo du deine Kunden am besten erreichst.<br /> <span style={{ display: 'inline-block', marginTop: '15px' }}>Wir bewegen alles und jeden – setz dich in die reiheacht.</span></>,
  buttons: [
    { text: 'Projekte', target: 'projects', delay: '7.75s' },
    { text: 'Sitzplatz buchen', target: 'contact', delay: '8.0s' },
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
