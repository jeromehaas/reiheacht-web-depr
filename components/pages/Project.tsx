import React from 'react';
import H2 from '@/components/text/H2';
import Paragraph from '@/components/text/Paragraph'
import PageWrapper from '@/components/layout/PageWrapper';
import HighLight from '@/components/text/Highlight';
import Navigation from '@/components/partials/Navigation';
import Section from '@/components/layout/Section';
import CloseTriangle from '@/components/buttons/CloseTriangle';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import HorizontalLine from '@/components/shapes/HorizontalLine';
import ProjectOverview from '@/components/partials/ProjectOverview';

interface Props {
  children: React.ReactNode;
  content: any
}

const Project: React.FunctionComponent<Props> = ({ children, content }) => {

  return (
    <>
      <PageWrapper>

        <CloseTriangle position={'top'} />

        <Section>
          {content.intro.title}
          {content.intro.text}
          <ProjectOverview content={{
            imageLink: '/logos/projects/schweizer-bauernverband.svg',
            imageAlt: 'Schweizer Bauernverband',
            title: 'Agrar-Initiative.',
            text: 'Design, Illustration & Animation'
          }} />
          {children}
          {content.outro.title}
          <HorizontalLine className={'active'} animated={false} />
          {content.outro.button}


        </Section>
        <CloseTriangle position={'bottom'} />
      </PageWrapper>
    </>
  );

}

export default Project;