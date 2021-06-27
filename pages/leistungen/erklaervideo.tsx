import React from 'react';
import Service from '@/components/pages/Service';
import {
  HL, P, H1, H2, H3,
} from '@/components/text/Text';
import Image from '@/components/partials/Image';
import Head from '@/components/partials/Head';
import HorizontalLine from '@/components/shapes/HorizontalLine';
import Space from '@/components/layout/Space';
import Quote from '@/components/text/Quote';

interface Props { }

const Erklaervideo: React.FunctionComponent<Props> = () => (
  <Service>
    <Head title="" description="" />
    <H1>Erklärvideo<HL color="blue">.</HL></H1>
    <HorizontalLine />
    <Space height="50px" />
    <Image src="/images/services/erklaervideo.png" alt="Erklärvideo" />
    <Quote content="Komplexe Themen einfach erklärt." />
    <Space height="20px" />
    <H2 color="white" fullWidth>Schnell und effizient</H2>
    <Space height="20px" />
    <P fullWidth>Du möchtest dein Unternehmen oder eine Dienstleistung vorstellen? Oder ein komplexes Thema aufgreifen, welches viele Informationen beinhaltet und vielleicht nicht ganz einfach verständlich ist?</P>
    <Space height="20px" />
    <P fullWidth>Ein Erklärvideo kann das genau richtige Werkzeug sein, welches deine  Botschaft auf kreative, einzigartige und unterhaltsame Weise verständlich übermittelt. Dadurch wird eine optimale Informationsvermittlung ermöglicht. Die Zuschauenden können zu einer bestimmten Handlung aufgefordert werden und es können Kaufimpulse gesetzt werden.</P>
    <Space height="20px" />
    <P fullWidth>Erklärvideos sind Kurzfilme, welche in der Regel 30 Sekunden bis maximal drei Minuten dauern. Eine möglichst schnelle Informationsübermittlung trägt dazu bei, keine Langweile beim Zuschauenden zu verursachen. </P>
    <Space height="20px" />
    <H2 fullWidth>Illustrierte Figuren und ganze Welten</H2>
    <Space height="20px" />
    <P fullWidth>Motion Design besteht vor allem aus einfachen und abstrakten Formen. Im Gegensatz werden in Erklärvideos üblicherweise animierte Menschen, Tiere und Welten eingesetzt, welche eine natürliche Umgebung fantasievoll und witzig nachempfinden.</P>
    <Space height="20px" />
    <P fullWidth>Setz dich in die reiheacht und lass uns zusammen deine Botschaft, in einer fesselnden Geschichte verpackt, in die Welt hinaustragen.</P>
    <Space height="20px" />
    <P fullWidth>Wir freuen uns auf die Zusammenarbeit!</P>
    <P fullWidth>Kontaktiere uns per E-mail auf <a href="mailto:hallo@reiheacht.ch" style={{ textDecoration: 'underline' }}>hallo@reiheacht.ch</a></P>
    <Space height="60px" />
  </Service>

);

export default Erklaervideo;
