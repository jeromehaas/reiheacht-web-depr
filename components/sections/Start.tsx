import React from 'react';
import Section from '@/components/layout/Section';
import MainTextBlock from '@/components/partials/MainTextBlock'

interface Props { }

const content = {
  section: 'start',
  title: <>Hier beginnt <br />die </>,
  carouselItems: ['Magie', 'Idee', 'Zusammenarbeit'],
  text: <>reiheacht ist eine digitale Kreativagentur, die mit Innovation und Zusammenarbeit einzigartige Lösungen anbietet, damit du deine Marke da stärken kannst, wo du deine Kunden am besten erreichst. <br /> Wir bewegen alles und jeden – setz dich in die reiheacht.</>,
  buttons: [
    { content: 'Sitzplatz buchen', link: '#', delay: '5s' },
    { content: 'Projekte', link: '#', delay: '5.25s' }
  ]
}

const Start: React.FunctionComponent<Props> = () => {

  return (
    <Section hero={true} id={'start'}>
      <MainTextBlock content={content} />
    </Section>
  );

}

export default Start;