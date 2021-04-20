import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import Section from '@/components/layout/Section';
import CloseTriangle from '@/components/buttons/CloseTriangle';
import Space from '@/components/layout/Space';

interface Props {
  children?: React.ReactNode;
}

const Legal: React.FunctionComponent<Props> = ({ children }) => (
  <div>
    <PageWrapper color="white">
      <CloseTriangle position="top" target="/" color="blue" />
      <Space height="30px" />
      <Section>
        {children}
      </Section>
      <CloseTriangle position="bottom" target="/" color="blue" />
    </PageWrapper>
  </div>
);

export default Legal;
