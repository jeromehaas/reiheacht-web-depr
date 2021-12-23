import React from 'react';
import Project from '@/components/pages/Project';
import { HL, H3 } from '@/components/text/Text';
import Image from '@/components/partials/Image';
import Head from '@/components/partials/Head';
import Video from '@/components/partials/Video';
import Space from '@/components/layout/Space';

interface Props { }

const content = {
  intro: {
    title: <>Empowering People to do what they love<HL color="blue">.</HL></>,
    text: <>Die ITpoint hat uns damit beauftragt ihr Mission-Statement mit einem Imagefilm in Bewegung zu bringen. “Empowering people to do what they love” steht dabei für die ITpoint im Fokus. Mit den IT-Lösungen ist die ITpoint ein essentielles Zahnrad in vielen Unternehmen, damit diese ihrer Leidenschaft nachgehen können. Ob Bäcker, Chauffeuer, Laborfach- oder Kauffrau, die Lösungen der ITpoint kennen keine Grenzen.</>,
  },
  projectOverview: {
    imageLink: '/logos/testimonials/it-point.svg',
    imageAlt: 'it-point',
    title: 'Imagefilm.',
    text: 'Drehbuch, Storyboard, Postproduction',
  },
  outro: {
    title: <>Du möchtest auch eine wichtige Botschaft an dein Zielpublikum <br />bringen<HL color="blue">?</HL></>,
  },
  switcher: {
    nextProject: '/projekte/altuna-box',
    previousProject: '/projekte/reiheacht-showreel',
  },

};

const AgrarInitiative: React.FunctionComponent<Props> = () => (
  <Project content={content}>
    <Head title="Imagefilm ITpoint | reiheacht" description="Empowering people to do what they love, Imagefilm ITpoint" />
    <H3>Deusche Version:</H3>
    <Space height="15px" />
    <Video link="https://player.vimeo.com/video/659304521?h=a6712c882a" />
    <Space height="30px" />
    <H3>Englische Version</H3>
    <Space height="15px" />
    <Video link="https://player.vimeo.com/video/659304521?h=a6712c882a" />
  </Project>
);

export default AgrarInitiative;
