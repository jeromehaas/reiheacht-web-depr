import React from 'react';
import Project from '@/components/pages/Project';
import { HL } from '@/components/text/Text';
import Video from '@/components/partials/Video';
import Image from '@/components/partials/Image';
import Space from '@/components/layout/Space';
import Head from '@/components/partials/Head';

interface Props { }

const content = {
  intro: {
    title: <>Von der Skizze bis <br />zur Animation<HL color="blue">.</HL></>,
    text: <>Für die Agrarinitiative vom Juni 2021 hat uns der Schweizer Bauernverband damit beauftragt ihre Kampagne gegen die Trinkwasserinitiative zu designen, illustrieren und animieren. Die illustrierten Sujets werden auf verschiedenen Medienkanälen wie Print, Video und Webbanner kommuniziert. </>,
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
    nextProject: '/projekte/adventsaktion',
    previousProject: '/projekte/altuna-box',
  },

};

const AgrarInitiative: React.FunctionComponent<Props> = () => (
  <Project content={content}>
    <Head title="Motion Design und Illustrationen für den Sbv | reiheacht" description="Schaue dir die bekannten Sujets zur Kampagne Extreme Agrarinitiative an, illustriert und animiert von der reiheacht" />
    <Image src="/projects/extreme-agrarinitiative/employee.png" alt="Arbeiter" />
    <Space height="30px" />
    <Image src="/projects/extreme-agrarinitiative/family.png" alt="Familie" />
    <Space height="30px" />
    <Image src="/projects/extreme-agrarinitiative/foodwaste.png" alt="Foodwaste" />
    <Space height="30px" />
    <Image src="/projects/extreme-agrarinitiative/import.png" alt="Import" />
    <Space height="30px" />
    <Image src="/projects/extreme-agrarinitiative/draft.png" alt="Entwurf" />
    <Space height="30px" />
    <Image src="/projects/extreme-agrarinitiative/illustration.png" alt="Illustration" />
    <Space height="30px" />
    <Video link="https://player.vimeo.com/video/520902562" />
  </Project>
);

export default AgrarInitiative;
