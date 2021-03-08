import React from 'react';
import Project from '@/components/pages/Project';
import { H2 } from '@/components/text/Titles';
import Paragraph from '@/components/text/Paragraph';
import Highlight from '@/components/text/Highlight';
import Video from '@/components/partials/Video';
import Button from '@/components/buttons/Button';
import Image from '@/components/partials/Image';

interface Props { }

const content = {
  intro: {
    title: <H2>
      Von der Skizze bis zur Animation
      <Highlight>.</Highlight>
    </H2>,
    text: <Paragraph>Für die kommende Agrarinitiative im Juni 2021 hat uns der Schweizer Bauernverband damit beauftragt verschiedene Illustrationen und  Animationen für Ihre Kampagne zu erstellen.Zur Kommunikation werden  verschiedene Medienkanäle wie Print, Video und Webbanner eingesetzt.</Paragraph>,
  },
  projectOverview: {
    imageLink: '/logos/projects/schweizer-bauernverband.svg',
    imageAlt: 'Schweizer Bauernverband',
    title: 'Agrar-Initiative.',
    text: 'Design, Illustration & Animation',
  },
  outro: {
    title: <H2>
      Du möchtest deine Idee
      {' '}
      <br />
      {' '}
      auch zum Leben
      {' '}
      <Highlight>erwecken</Highlight>
      ?
    </H2>,
    button: <Button link="/#contact" content="Sitzplatz buchen" animated className="active" customDelay="3s" />,
  },

};

const AgrarInitiative: React.FunctionComponent<Props> = () => (
  <Project content={content}>
    <Video link="https://player.vimeo.com/video/520902562" />
    <Image src="/projects/agrarinitiative/employee.png" alt="Arbeiter" />
    <Image src="/projects/agrarinitiative/family.png" alt="Familie" />
    <Image src="/projects/agrarinitiative/foodwaste.png" alt="Foodwaste" />
    <Image src="/projects/agrarinitiative/import.png" alt="Import" />
    <Image src="/projects/agrarinitiative/draft.png" alt="Entwurf" />
    <Image src="/projects/agrarinitiative/illustration.png" alt="Illustration" />
  </Project>
);

export default AgrarInitiative;
