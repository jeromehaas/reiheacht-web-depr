import React from 'react';
import Head from 'next/head';
import PageWrapper from '@/components/layout/PageWrapper';
import Section from '@/components/layout/Section';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageWrapper>
        <Section>
          hello world
        </Section>
      </PageWrapper>
    </div>
  );
}
