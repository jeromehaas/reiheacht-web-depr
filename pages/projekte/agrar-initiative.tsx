import React from 'react';
import Project from '@/components/pages/Project';
import H2 from '@/components/text/H2';
import Paragraph from '@/components/text/Paragraph';
import Highlight from '@/components/text/Highlight';
import Video from '@/components/partials/Video';

interface Props { }

const content = {
  intro: {
    title: <H2>Von der Skizze bis zur Animation<Highlight>.</Highlight></H2>,
    text: <Paragraph>Für die kommende Agrarinitiative im Juni 2021 hat uns der Schweizer Bauernverband damit beauftragt verschiedene Illustrationen und  Animationen für Ihre Kampagne zu erstellen.Zur Kommunikation werden  verschiedene Medienkanäle wie Print, Video und Webbanner eingesetzt.</Paragraph>
  },
  outro: {
    title: <H2>Erwecke deine <br /> Idee zum <Highlight>Leben</Highlight>.</H2>,
    text: <Paragraph>Das tun wir den ganzen Tag – und wir lieben es.</Paragraph>
  }

}

const AgrarInitiative: React.FunctionComponent<Props> = () => {


  return (
    <Project content={content}>
      <Video link={"https://player.vimeo.com/video/519844178"} />
    </Project>
  );

}

export default AgrarInitiative;