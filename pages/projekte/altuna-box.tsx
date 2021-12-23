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
    title: <>Schnell, platzsparend und einfach<HL color="blue">.</HL></>,
    text: <>Bei der Altuna Box handelt es sich um eine Verpackungslösung für verschiedene schützenswerte Produkte. Die Unique Selling Points wie z.B. das supereinfache Klicksystem oder die platzsparende Lagerung stehen bei diesem Video im Vordergrund. Deshalb hat uns die Firma HOLLIGER IMBALLEGNO AG damit beauftragt ihre Box in einem 3D Motion Design Video in Szene zu setzen.</>,
  },
  projectOverview: {
    imageLink: '/logos/testimonials/altuna.svg',
    imageAlt: 'altuna',
    title: 'Motion Design - 3D',
    text: 'Konzept, Storyboard, Modelling, Motion Design',
  },
  outro: {
    title: <>Du möchtest auch eine wichtige Botschaft an dein Zielpublikum <br />bringen<HL color="blue">?</HL></>,
  },
  switcher: {
    nextProject: '/projekte/extreme-agrarinitiative',
    previousProject: '/projekte/it-point-imagefilm',
  },

};

const AgrarInitiative: React.FunctionComponent<Props> = () => (
  <Project content={content}>
    <Head title="3D Motion Design - Altuna Box | reiheacht" description="3D Motion Design für die UPS der Altuna Box" />
    <Space height="15px" />
    <Video link="https://player.vimeo.com/video/659310558?h=c12d642cc1" />
  </Project>
);

export default AgrarInitiative;
