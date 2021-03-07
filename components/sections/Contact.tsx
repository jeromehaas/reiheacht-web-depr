import React from 'react';
import Section from '@/components/layout/Section';
import { H2 } from '@/components/text/Titles';
import Highlight from '@/components/text/Highlight';
import Paragraph from '@/components/text/Paragraph';
import TextBlock from '@/components/partials/TextBlock'
import Button from '@/components/buttons/Button';
import ContactForm from '@/components/partials/ContactForm';

interface Props { }

const textBlockContent = {
  section: 'contact',
  title: <H2>Sag <Highlight>Hallo</Highlight>!</H2>,
  text: <Paragraph>Wir morsen zwar sehr gut, es gibt jedoch einfachere Wege, uns zu kontaktieren. <br /> <br />Wir freuen uns.</Paragraph>
}

const Contact: React.FunctionComponent<Props> = () => {


  return (
    <Section id={'contact'}>
      <TextBlock content={textBlockContent} />
      <ContactForm />
    </Section>
  );

}

export default Contact;