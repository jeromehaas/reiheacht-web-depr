import React from 'react';
import Project from '@/components/pages/Project';
import { HL } from '@/components/text/Text';
import Video from '@/components/partials/Video';
import Image from '@/components/partials/Image';
import Space from '@/components/layout/Space';

interface Props { }

const content = {
  intro: {
    title: <>Von der Skizze bis <br />zur Animation<HL color="blue">.</HL></>,
    text: <>Für die kommende Agrarinitiative im Juni 2021 hat uns der Schweizer Bauernverband damit beauftragt ihre Kampagne gegen die Trinkwasserinitiative zu designen, illustrieren und animieren. Die illustrierten Sujets werden auf verschiedenen Medienkanälen wie Print, Video und Webbanner kommuniziert. </>,
  },
  projectOverview: {
    imageLink: '/logos/projects/schweizer-bauernverband.svg',
    imageAlt: 'Schweizer Bauernverband',
    title: 'Extreme Agrarinitiative.',
    text: 'Design, Illustration & Animation',
  },
  outro: {
    title: <>Du möchtest deine Idee auch zum Leben <HL color="blue">erwecken</HL>?</>,
  },
  switcher: {
    nextProject: '/projekte/osterkampagne',
    previousProject: '/projekte/smartphone-schnitzeljagd',
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
    <Space height="30px" />
    <Video link="https://player.vimeo.com/video/520902562" />
  </Project>
);

export default AgrarInitiative;
