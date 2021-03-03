import React from 'react';
import Head from 'next/head';
import PageWrapper from '@/components/layout/PageWrapper';
import Start from '@/components/sections/Start';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageWrapper>
        <Start>
          hello world
        </Start>
      </PageWrapper>
    </div>
  );
}
