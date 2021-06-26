import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import Section from '@/components/layout/Section';
import CloseTriangle from '@/components/buttons/CloseTriangle';
import ProjectOverview from '@/components/partials/ProjectOverview';
import Space from '@/components/layout/Space';
import { H2, P } from '@/components/text/Text';
import ProjectSwitcher from '@/components/partials/ProjectSwitcher';
import Navigation from '@/components/partials/Navigation';

interface Intro {
  title: React.ReactNode;
  text: React.ReactNode;
}

interface Overview {
  imageLink: string;
  imageAlt: string;
  title: string;
  text: string;
}

interface Outro {
  title: Object;
}

interface Switcher {
  nextProject: string;
  previousProject: string;
}

interface Content {
  intro: Intro;
  projectOverview: Overview;
  outro: Outro;
  switcher: Switcher;
}

interface Props {
  children: React.ReactNode;
  content: Content;
}

const Project: React.FunctionComponent<Props> = ({ children, content }) => (
  <div>
    <PageWrapper>
      <Navigation />
      <CloseTriangle position="top" target="/#projects" />
      <Space height="80px" />
      <Section>
        <H2>{content.intro.title}</H2>
        <Space height="30px" />
        <P>{content.intro.text}</P>
        <Space height="30px" />
        <ProjectOverview content={{
          imageLink: content.projectOverview.imageLink,
          imageAlt: content.projectOverview.imageAlt,
          title: content.projectOverview.title,
          text: content.projectOverview.text,
        }}
        />
        <Space height="30px" />
        {children}
        <Space height="90px" />
        <ProjectSwitcher nextProject={content.switcher.nextProject} previousProject={content.switcher.previousProject} />
        <Space height="200px" />
      </Section>
      <CloseTriangle position="bottom" target="/#projects" />
    </PageWrapper>
  </div>
);

export default Project;
