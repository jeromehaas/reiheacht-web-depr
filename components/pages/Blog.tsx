import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import Section from '@/components/layout/Section';
import CloseTriangle from '@/components/buttons/CloseTriangle';
import HorizontalLine from '@/components/shapes/HorizontalLine';
import ProjectOverview from '@/components/partials/ProjectOverview';
import Spacer from '@/components/layout/Spacer';
import Head from 'next/head';
import Reveal, { Fade } from 'react-awesome-reveal';

interface Props {
  children?: React.ReactNode;
  content?: any
}

const Blog: React.FunctionComponent<Props> = ({ children, content }) => (
  <div>
    <PageWrapper color="white">
      <CloseTriangle position="top" color="blue" />
      <Spacer marginBottom="30px" />
      <Section>
        {children}
      </Section>
      <CloseTriangle position="bottom" color="blue" />
    </PageWrapper>
  </div>
);

export default Blog;