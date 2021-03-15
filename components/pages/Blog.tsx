import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import Section from '@/components/layout/Section';
import CloseTriangle from '@/components/buttons/CloseTriangle';
import Space from '@/components/layout/Space';

interface Props {
  closeTriangleTarget: string;
  children: React.ReactNode;
}

const Blog: React.FunctionComponent<Props> = ({ children, closeTriangleTarget }) => (
  <div>
    <PageWrapper color="white">
      <CloseTriangle position="top" color="blue" target={closeTriangleTarget} />
      <Space height="30px" />
      <Section>
        {children}
      </Section>
      <CloseTriangle position="bottom" color="blue" target={closeTriangleTarget} />
    </PageWrapper>
  </div>
);

export default Blog;
