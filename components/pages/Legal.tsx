import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import Section from '@/components/layout/Section';
import CloseTriangle from '@/components/buttons/CloseTriangle';
import Spacer from '@/components/layout/Spacer';

interface Props {
  children?: React.ReactNode;
}

const Legal: React.FunctionComponent<Props> = ({ children }) => (
  <div>
    <PageWrapper color="white">
      <CloseTriangle position="top" target="/" color="blue" />
      <Spacer marginBottom="30px" />
      <Section>
        {children}
      </Section>
      <CloseTriangle position="bottom" target="/" color="blue" />
    </PageWrapper>
  </div>
);

export default Legal;
