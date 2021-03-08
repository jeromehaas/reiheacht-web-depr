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
        <title>reiheacht - Hier begintn die Zusammenarbeit.</title>
        <meta name="description" content="Animation | Storytelling| Design | Illustration | Web | Werbefilm" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/fonts/HelveticaNeue-Medium.ttf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/HelveticaNeue-Roman.ttf" as="font" crossOrigin="" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#2775b7" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
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
