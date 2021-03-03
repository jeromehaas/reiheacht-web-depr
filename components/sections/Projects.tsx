import React from 'react';
import Section from '@/components/layout/Section';
import H2 from '@/components/text/H2';
import Highlight from '@/components/text/Highlight';
import Paragraph from '@/components/text/Paragraph';
import TextBlock from '@/components/partials/TextBlock'
import Button from '@/components/buttons/Button';

interface Props { }

const textBlockContent = {
  title: <H2>Perfekte Aussicht, <br /> aus der besten <Highlight>reihe</Highlight>.</H2>,
  paragraph: <Paragraph>Dein Spitzenprogramm – zurücklehnen und geniessen.</Paragraph>
}

const Projects: React.FunctionComponent<Props> = () => {


  return (
    <Section>
      <TextBlock content={textBlockContent} />
    </Section>
  );

}

export default Projects;