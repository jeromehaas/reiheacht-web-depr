import React from 'react';
import Section from '@/components/layout/Section';
import H2 from '@/components/text/H2';
import Highlight from '@/components/text/Highlight';
import Paragraph from '@/components/text/Paragraph';
import TextBlock from '@/components/partials/TextBlock'
import Button from '@/components/buttons/Button';

interface Props { }

const textBlockContent = {
  title: <H2>Erwecke deine <br /> Idee zum <Highlight>Leben</Highlight>.</H2>,
  paragraph: <Paragraph>Das tun wir den ganzen Tag – und wir lieben es.</Paragraph>
}

const Services: React.FunctionComponent<Props> = () => {


  return (
    <Section>
      <TextBlock content={textBlockContent} />
    </Section>
  );

}

export default Services;