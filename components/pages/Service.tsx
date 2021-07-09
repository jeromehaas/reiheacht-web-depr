import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import Section from '@/components/layout/Section';
import CloseTriangle from '@/components/buttons/CloseTriangle';
import ProjectOverview from '@/components/partials/ProjectOverview';
import Space from '@/components/layout/Space';
import { H2, P } from '@/components/text/Text';
import ProjectSwitcher from '@/components/partials/ProjectSwitcher';
import JumpNavigation from '@/components/partials/JumpNavigation';

interface Props {
  children: React.ReactNode;
}

const Service: React.FunctionComponent<Props> = ({ children }) => (
  <PageWrapper>
    <JumpNavigation />
    <CloseTriangle position="top" target="/#services" />
    <Section>
      {children}
    </Section>
    <Space height="100px" />
    <CloseTriangle position="bottom" target="/#services" />
  </PageWrapper>
);

export default Service;
