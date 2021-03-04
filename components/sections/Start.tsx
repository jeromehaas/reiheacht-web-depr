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
    <Section>
      <MainTextBlock />
      {/* <Button content={'Sitzplatz buchen'} link='/' />
      <Button content={'Projekte'} link='/' />   */}
    </Section>
  );

}

export default Start;