import React from 'react';
import Section from '@/components/layout/Section';
import { H2, HL } from '@/components/text/Text';
import Paragraph from '@/components/text/Paragraph';
import TextBlock from '@/components/partials/TextBlock';
import Button from '@/components/buttons/Button';
import ContactForm from '@/components/partials/ContactForm';
import Image from '@/components/partials/Image';
import Logo from '@/components/animations/Logo';
import styled from 'styled-components';

const StyledContact = styled.div`

  .wrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

  @media (max-width: 800px) {
    flex-direction: column;
    }

  }

`;

interface Props { }

const textBlockContent = {
  section: 'contact',
  title: <>Sag <HL color="blue">Hallo</HL>!</>,
  text: <>Wir morsen zwar sehr gut, es gibt jedoch einfachere Wege, uns zu kontaktieren.<br /> <br />Wir freuen uns.</>,
};

const Contact: React.FunctionComponent<Props> = () => (
  <StyledContact>
    <Section hero id="contact">
      <TextBlock content={textBlockContent} maxWidth="500px" />
      <div className="wrapper">
        <ContactForm />
        <Logo />
      </div>
    </Section>
  </StyledContact>
);

export default Contact;
