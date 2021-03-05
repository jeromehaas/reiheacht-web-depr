import React from 'react';
import Head from 'next/head';
import PageWrapper from '@/components/layout/PageWrapper';
import Navigation from '@/components/partials/Navigation';
import Start from '@/components/sections/Start';
import Services from '@/components/sections/Services';
import Projects from '@/components/sections/Projects';
import Employees from '@/components/sections/Employees';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/partials/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/fonts/HelveticaNeue-Medium.ttf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/HelveticaNeue-Roman.ttf" as="font" crossOrigin="" />
      </Head>
      <PageWrapper>
        <Navigation />
        <Start />
        <Services />
        <Projects />
        <Employees />
        <Contact />
        <Footer />
      </PageWrapper>
    </div>
  );
}
