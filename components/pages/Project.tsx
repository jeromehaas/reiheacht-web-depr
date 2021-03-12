import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import Section from '@/components/layout/Section';
import CloseTriangle from '@/components/buttons/CloseTriangle';
import HorizontalLine from '@/components/shapes/HorizontalLine';
import ProjectOverview from '@/components/partials/ProjectOverview';
import Spacer from '@/components/layout/Spacer';
import Head from 'next/head';
import { H2, P } from '@/components/text/Text';
import Button from '@/components/buttons/Button';

interface Props {
  children?: React.ReactNode;
  content: any
}

const Project: React.FunctionComponent<Props> = ({ children, content }) => (
  <div>
    <Head>
      <title>reiheacht - Hier begintn die Zusammenarbeit.</title>
      <meta name="description" content="Animation | Storytelling| Design | Illustration | Web | Werbefilm" />
      <link rel="preload" href="../fonts/helvetica-neue/HelveticaNeueLTStd-Roman.woff2" as="font" crossOrigin="" />
      <link rel="preload" href="../fonts/helvetica-neue/HelveticaNeueLTStd-Roman.woff" as="font" crossOrigin="" />
      <link rel="preload" href="../fonts/helvetica-neue/HelveticaNeueLTStd-Roman.ttf" as="font" crossOrigin="" />
      <link rel="preload" href="../fonts/helvetica-neue/HelveticaNeueLTStd-Roman.eot" as="font" crossOrigin="" />
      <link rel="preload" href="../fonts/helvetica-neue/HelveticaNeueLTStd-Md.woff2" as="font" crossOrigin="" />
      <link rel="preload" href="../fonts/helvetica-neue/HelveticaNeueLTStd-Md.woff" as="font" crossOrigin="" />
      <link rel="preload" href="../fonts/helvetica-neue/HelveticaNeueLTStd-Md.ttf" as="font" crossOrigin="" />
      <link rel="preload" href="../fonts/helvetica-neue/HelveticaNeueLTStd-Md.eot" as="font" crossOrigin="" />
      <link rel="icon" href="/favicon.ico" />
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
      <Spacer marginBottom="30px" />

      <Section>
        <H2>{content.intro.title}</H2>
        <Spacer marginBottom="30px" />
        <P>{content.intro.text}</P>
        <Spacer marginBottom="30px" />
        <ProjectOverview content={{
          imageLink: content.projectOverview.imageLink,
          imageAlt: content.projectOverview.imageAlt,
          title: content.projectOverview.title,
          text: content.projectOverview.text,
        }}
        />
        <Spacer marginBottom="30px" />
        {children}
        <Spacer marginBottom="60px" />
        <H2>{content.outro.title}</H2>
        <HorizontalLine className="active" animated={false} />
        <Button type="link" target="/" text="Sitzplatz buchen" />
        <Spacer marginBottom="130px" />
      </Section>
      <CloseTriangle position="bottom" />
    </PageWrapper>
  </div>
);

export default Project;
