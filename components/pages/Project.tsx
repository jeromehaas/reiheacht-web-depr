import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import Section from '@/components/layout/Section';
import CloseTriangle from '@/components/buttons/CloseTriangle';
import HorizontalLine from '@/components/shapes/HorizontalLine';
import ProjectOverview from '@/components/partials/ProjectOverview';
import Spacer from '@/components/layout/Spacer';
import Head from 'next/head';

interface Props {
  children: React.ReactNode;
  content: any
}

const Project: React.FunctionComponent<Props> = ({ children, content }) => (
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

      <CloseTriangle position="top" />
      <Spacer marginBottom="40px" />

      <Section>
        {content.intro.title}
        <Spacer marginBottom="40px" />
        {content.intro.text}
        <Spacer marginBottom="40px" />

        <ProjectOverview content={{
          imageLink: content.projectOverview.imageLink,
          imageAlt: content.projectOverview.imageAlt,
          title: content.projectOverview.title,
          text: content.projectOverview.text,
        }}
        />

        <Spacer marginBottom="40px" />
        {children}
        <Spacer marginBottom="40px" />
        {content.outro.title}
        <HorizontalLine className="active" animated={false} />
        {content.outro.button}
        <Spacer marginBottom="140px" />

      </Section>
      <CloseTriangle position="bottom" />
    </PageWrapper>
  </div>
);

export default Project;
