import React from 'react';
import Project from '@/components/pages/Project';
import { H2 } from '@/components/text/Text';
import Paragraph from '@/components/text/Paragraph';
import Highlight from '@/components/text/Highlight';
import Video from '@/components/partials/Video';
import Button from '@/components/buttons/Button';
import Image from '@/components/partials/Image';
import Spacer from '@/components/layout/Spacer';

interface Props { }

const content = {
  intro: {
    title: <>Von der Skizze bis zur Animation<Highlight>.</Highlight></>,
    text: <>Für die kommende Agrarinitiative im Juni 2021 hat uns der Schweizer Bauernverband damit beauftragt verschiedene Illustrationen und  Animationen für Ihre Kampagne zu erstellen.Zur Kommunikation werden  verschiedene Medienkanäle wie Print, Video und Webbanner eingesetzt.</>,
  },
  projectOverview: {
    imageLink: '/logos/projects/schweizer-bauernverband.svg',
    imageAlt: 'Schweizer Bauernverband',
    title: 'Extreme Agrarinitiative.',
    text: 'Design, Illustration & Animation',
  },
  outro: {
    title: <>Du möchtest deine Idee auch zum Leben <Highlight>erwecken</Highlight>?</>,
  },
  switcher: {
    nextProject: '/projekte/osterkampagne',
    previousProject: '/projekte/agrarinitiative',
  },

};

const AgrarInitiative: React.FunctionComponent<Props> = () => (
  <Project content={content}>
    <Image src="/projects/extreme-agrarinitiative/employee.png" alt="Arbeiter" />
    <Image src="/projects/extreme-agrarinitiative/family.png" alt="Familie" />
    <Image src="/projects/extreme-agrarinitiative/foodwaste.png" alt="Foodwaste" />
    <Image src="/projects/extreme-agrarinitiative/import.png" alt="Import" />
    <Image src="/projects/extreme-agrarinitiative/draft.png" alt="Entwurf" />
    <Image src="/projects/extreme-agrarinitiative/illustration.png" alt="Illustration" />
    <Spacer marginBottom="30px" />
    <Video link="https://player.vimeo.com/video/520902562" />
  </Project>
);

export default AgrarInitiative;