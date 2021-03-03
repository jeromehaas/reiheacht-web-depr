import React from 'react';
import Section from '@/components/layout/Section';
import H1 from '@/components/text/H1';
import Highlight from '@/components/text/Highlight';
import Paragraph from '@/components/text/Paragraph';

interface Props { }

const Start: React.FunctionComponent<Props> = () => {


  return (
    <Section>
      <H1>Hier beginnt die <Highlight>Zusammenarbeit</Highlight>. </H1>
      <Paragraph>
        reiheacht ist eine digitale Kreativagentur, die mit Innovation und Zusammenarbeit einzigartige Lösungen anbietet, damit du deine Marke da stärken kannst, wo du deine Kunden am besten erreichst. <br />
        Wir bewegen alles und jeden – setz dich in die reiheacht.
      </Paragraph>
    </Section>
  );

}

export default Start;