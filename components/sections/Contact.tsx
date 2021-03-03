import React from 'react';
import Section from '@/components/layout/Section';
import H2 from '@/components/text/H2';
import Highlight from '@/components/text/Highlight';
import Paragraph from '@/components/text/Paragraph';
import TextBlock from '@/components/partials/TextBlock'
import Button from '@/components/buttons/Button';

interface Props { }

const textBlockContent = {
  title: <H2>Sag <Highlight>Hallo</Highlight>!</H2>,
  paragraph: <Paragraph>Wir morsen zwar sehr gut, es gibt jedoch einfachere Wege, uns zu kontaktieren. <br /> <br />
  Wir freuen uns.</Paragraph>
}

const Contact: React.FunctionComponent<Props> = () => {


  return (
    <Section>
      <TextBlock content={textBlockContent} />
    </Section>
  );

}

export default Contact;