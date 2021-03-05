import React from 'react';
import Section from '@/components/layout/Section';
import H1 from '@/components/text/H1';
import Highlight from '@/components/text/Highlight';
import Paragraph from '@/components/text/Paragraph';
import MainTextBlock from '@/components/partials/MainTextBlock'
import Button from '@/components/buttons/Button';

interface Props { }

const Start: React.FunctionComponent<Props> = () => {

  return (
    <Section hero={true}>
      <MainTextBlock section={'start'} buttons={[{ content: 'Sitzplatz buchen', link: '#', delay: '5s' }, { content: 'Projekte', link: '#', delay: '5.25s' }]} />
    </Section>
  );

}

export default Start;