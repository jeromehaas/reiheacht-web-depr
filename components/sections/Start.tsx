import React from 'react';
import Section from '@/components/layout/Section';
import H1 from '@/components/text/H1';
import Highlight from '@/components/text/Highlight';
import Paragraph from '@/components/text/Paragraph';
import TextBlock from '@/components/partials/TextBlock'

interface Props { }

const textBlockContent = {
  title: <H1>Hier beginnt die <Highlight>Zusammenarbeit</Highlight>.</H1>,
  paragraph: <Paragraph>reiheacht ist eine digitale Kreativagentur, die mit Innovation und Zusammenarbeit einzigartige Lösungen anbietet, damit du deine Marke da stärken kannst, wo du deine Kunden am besten erreichst. <br />
  Wir bewegen alles und jeden – setz dich in die reiheacht.</Paragraph>
}

const Start: React.FunctionComponent<Props> = () => {


  return (
    <Section>
      <TextBlock content={textBlockContent}>

      </TextBlock>

      <Paragraph>

      </Paragraph>
    </Section>
  );

}

export default Start;