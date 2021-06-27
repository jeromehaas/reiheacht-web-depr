import React from 'react';
import Service from '@/components/pages/Service';
import { HL } from '@/components/text/Text';
import Image from '@/components/partials/Image';
import Head from '@/components/partials/Head';

interface Props { }

const AgrarInitiative: React.FunctionComponent<Props> = () => (
  <Service>
    <Head title="Motion Design und Illustrationen für den Sbv | reiheacht" description="Schaue dir die bekannten Sujets zur Kampagne Extreme Agrarinitiative an, illustriert und animiert von der reiheacht" />
    <Image src="/projects/agrarinitiative/draft.png" alt="Arbeiter" />
    <Image src="/projects/agrarinitiative/illustration.png" alt="Familie" />
  </Service>
);

export default AgrarInitiative;
