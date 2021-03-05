import React from 'react';
import Section from '@/components/layout/Section';
import H1 from '@/components/text/H1';
import Highlight from '@/components/text/Highlight';
import Paragraph from '@/components/text/Paragraph';
import MainTextBlock from '@/components/partials/MainTextBlock'
import Button from '@/components/buttons/Button';

interface Props { }

const content = {
  section: 'start',
  title: <>hier beginnt <br />die </>,
  carouselItems: ['Magie', 'Idee', 'Zusammenarbeit'],
  text: <Paragraph>reiheacht ist eine digitale Kreativagentur, die mit Innovation und Zusammenarbeit einzigartige Lösungen anbietet, damit du deine Marke da stärken kannst, wo du deine Kunden am besten erreichst. <br /> Wir bewegen alles und jeden – setz dich in die reiheacht.</Paragraph>,
  buttons: [
    { content: 'Sitzplatz buchen', link: '#', delay: '5s' },
    { content: 'Projekte', link: '#', delay: '5.25s' }
  ]
}

const Start: React.FunctionComponent<Props> = () => {

  return (
    <Section hero={true}>
      <MainTextBlock content={content} />
    </Section>
  );

}

export default Start;