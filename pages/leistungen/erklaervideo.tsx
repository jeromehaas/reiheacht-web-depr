import React from 'react';
import Service from '@/components/pages/Service';
import {
  HL, P, H1, H2, H25, H3,
} from '@/components/text/Text';
import Image from '@/components/partials/Image';
import Head from '@/components/partials/Head';
import HorizontalLine from '@/components/shapes/HorizontalLine';
import Space from '@/components/layout/Space';
import Quote from '@/components/text/Quote';
import NextLink from 'next/link';

interface Props { }

const Erklaervideo: React.FunctionComponent<Props> = () => (
  <Service>
    <Head title="Motion Design Erklärfilme für deine Produkte | reiheacht" description="Komplexe Themen durch animierte Erklärfilme einfach erklärt" />
    <H1>Erklärvideo<HL color="blue">.</HL></H1>
    <HorizontalLine />
    <Space height="50px" />
    <Image src="/images/services/erklaervideo.png" alt="Erklärvideo" />
    <Quote content="Komplexe Themen einfach erklärt." />
    <Space height="20px" />
    <H25 color="white" fullWidth>Schnell und effizient</H25>
    <Space height="20px" />
    <P fullWidth>Du möchtest dein Unternehmen oder eine Dienstleistung vorstellen? Oder ein komplexes Thema aufgreifen, welches viele Informationen beinhaltet und vielleicht nicht ganz einfach verständlich ist?</P>
    <Space height="20px" />
    <P fullWidth>Ein Erklärvideo kann das genau richtige Werkzeug sein, welches deine  Botschaft auf kreative, einzigartige und unterhaltsame Weise verständlich übermittelt. Dadurch wird eine optimale Informationsvermittlung ermöglicht. Die Zuschauenden können zu einer bestimmten Handlung aufgefordert werden und es können Kaufimpulse gesetzt werden.</P>
    <Space height="20px" />
    <P fullWidth>Erklärvideos sind Kurzfilme, welche in der Regel 30 Sekunden bis maximal drei Minuten dauern. Eine möglichst schnelle Informationsübermittlung trägt dazu bei, keine Langweile beim Zuschauenden zu verursachen. </P>
    <Space height="20px" />
    <H25 fullWidth>Illustrierte Figuren und ganze Welten</H25>
    <Space height="20px" />
    <P fullWidth><NextLink href="/leistungen/motion-design"><a className="service-link">Motion Design</a></NextLink> besteht vor allem aus einfachen und abstrakten Formen. Im Gegensatz werden in Erklärvideos üblicherweise animierte Menschen, Tiere und Welten eingesetzt, welche eine natürliche Umgebung fantasievoll und witzig nachempfinden.</P>
    <Space height="60px" />
    <P fullWidth>Setz dich mit einer Tüte Popcorn in die reiheacht und zeige deiner Zielgruppe, warum dein Produkt die Probleme deiner Zielgruppe aus der Welt schaffen wird. </P>
    <Space height="60px" />
    <P fullWidth superbold>Wir freuen uns auf die Zusammenarbeit!</P>
    <P fullWidth superbold>Kontaktiere uns per E-Mail auf <a href="mailto:hallo@reiheacht.ch" className="service-email-link">hallo@reiheacht.ch</a></P>
    <Space height="60px" />
  </Service>

);

export default Erklaervideo;
