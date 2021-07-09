import React from 'react';
import Service from '@/components/pages/Service';
import {
  HL, P, H1, H2, H25, H3,
} from '@/components/text/Text';
import logoLookLeft from '@/public/animations/logo-look-left.json';
import { Lottie } from '@crello/react-lottie';
import Image from '@/components/partials/Image';
import ImageTwo from '@/components/partials/ImageTwo';
import Head from '@/components/partials/Head';
import HorizontalLine from '@/components/shapes/HorizontalLine';
import Space from '@/components/layout/Space';
import Quote from '@/components/text/Quote';
import Logo from 'components/animations/Logo';
import NextLink from 'next/link';

interface Props { }

const MotionDesign: React.FunctionComponent<Props> = () => (
  <Service>
    <Head title="Motion Design für deine Botschaft | reiheacht" description="Kreative Motion Design Lösungen für ein einmaliges Markenerlebnis" />
    <H1>Motion Design<HL color="blue">.</HL></H1>
    <HorizontalLine />
    <Space height="50px" />
    <Image src="/images/services/motion-design.png" alt="Motion Design" />
    <Quote content="Grafikdesign in Bewegung." />
    <Space height="20px" />
    <H25 color="white" fullWidth>Allgegenwärtiges Motion Design</H25>
    <Space height="20px" />
    <P fullWidth>Motion Design oder Motion Graphics ist überall – du siehst es in Serien, Filmen und in TV-Werbungen. Es gewinnt immer mehr an Bedeutung. Waren es früher vor allem Logoanimationen oder einfach animierte Texte und Grafiken, kann Motion Design heute viel komplexer sein. Es ist ein fester Bestandteil für viele kleine und grosse Unternehmen, welche damit  für ihre Marke oder ihr Produkt werben. Es ist nicht mehr aus dem Marketing wegzudenken.</P>
    <Space height="20px" />
    <H25 fullWidth>Knackige Botschaft, die bewegt</H25>
    <Space height="20px" />
    <P fullWidth>Einfach gesagt ist es Grafikdesign in Bewegung, mit dessen Einsatz die Botschaft auf kreative Weise verstärkt wird. Es erlaubt, das Auge des Zuschauenden noch gezielter zu führen.</P>
    <Space height="40px" />
    <ImageTwo src1="/gifs/motion-design-gif-1.gif" alt1="Motion Design 01" src2="/gifs/motion-design-gif-2.gif" alt2="Motion Design 02" />
    <Space height="40px" />
    <P fullWidth>Menschen konsumieren heute viele verschiedene Inhalte auf diversen Geräten in kürzester Zeit. Das macht Motion Design zur perfekten Wahl, um schnell, kurz und knackig seine gewünschte Botschaft an den Mann und die Frau zu bringen.</P>
    <Space height="20px" />
    <H25 fullWidth>Bunt und vielfältig</H25>
    <Space height="20px" />
    <P fullWidth>Motion Design ist sehr vielseitig und wird in vielen Bereichen eingesetzt, nicht nur für Werbezwecke. Du kannst damit brave Präsentationen und langweilige Jahreszahlen aufpeppen, komplexe Animationen auf deiner Webseite einbauen, es für Schulungen und Anleitungen einsetzen oder schwierige Themen <NextLink href="/leistungen/erklaervideo"><a className="service-link"> einfacher erklären</a></NextLink>. Und das ist nur die Spitze des Eisbergs.</P>
    <Space height="20px" />
    <H25 fullWidth>Massgeschneiderte Illustrationen & Designs</H25>
    <Space height="20px" />
    <P fullWidth>Um alle und alles zu bewegen, braucht es verschiedene grafische Elemente. Falls noch keine bestehen, erstellen wir in enger Zusammenarbeit mit dir, einzigartige, auf dich zugeschnittene Illustrationen und Grafiken. So stellen wir sicher, dass deine packend erzählte Botschaft auf kreative Art und Weise deine Zielgruppe erreicht. Wir erschaffen <NextLink href="/projekte/erklaerfilme-sbv"><a className="service-link">ganze Welten</a></NextLink>  voller Figuren, Icons und vieles mehr.</P>
    <Space height="20px" />
    <P fullWidth>Zudem kannst du alle von der reiheacht erstellten Designs und Illustrationen auch für deine  <NextLink href="/projekte/extreme-agrarinitiative"><a className="service-link">Printkampagne</a></NextLink> einsetzen. Schlage zwei Fliegen mit einer Klappe!</P>
    <Space height="40px" />
    <Image src="/images/services/massgeschneiderte-illustrationen.png" alt="Massgeschneiderte Illustrationen" />
    <Space height="40px" />
    <Image src="/images/services/ufo-illustration.png" alt="Illustration mit UFO" />
    <Space height="40px" />
    <H25 fullWidth>Auch eine Webseite kann animieren</H25>
    <Space height="20px" />
    <P fullWidth>Animationen auf Webseiten sind allgegenwärtig. Sie enthalten Buttons, welche Klick-Rückmeldungen geben, signalisieren einen Statuswechsel oder dienen zur Navigationshilfe, um die Benutzerfreundlichkeit zu steigern. Diese werden zum Teil nur unbewusst wahrgenommen.</P>
    <Space height="20px" />
    <P fullWidth>Javascript und CSS bieten von Haus aus viele Möglichkeiten, um  Animationen zu implementieren, stossen aber immer wieder an ihre Grenzen. Ganz im Gegensatz zu Animations-Programmen, welche mehr Wege bieten, um die Erfahrung zu verbessern.</P>
    <Space height="20px" />
    <P fullWidth>Soll das Icon verspielter bewegt, ein Produkt, eine Dienstleistung prominenter hervorgehoben werden, so können komplexere Animationen eine Abhilfe sein.</P>
    <Space height="20px" />
    <P fullWidth>Wie das funktioniert? Ganz einfach: Wir stellen dir die gewünschte Animation als Code in Form einer json-Datei oder als Gif zur Verfügung, welche du auf deiner Webseite einpflegen kannst. Fertig.</P>
    <Space height="40px" />
    <span style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridGap: '30px' }}>
      <Image src="/gifs/motion-design-gif-3.gif" alt="Stop Illustration" />
      <Lottie
        config={{ animationData: logoLookLeft, autoplay: true, loop: true }}
        playingState="playing"
        speed={1}
        width="100%"
        height="100%"
        style={{ margin: 0, position: 'relative', left: '6px' }}
        direction={1}
      />
    </span>
    <Space height="60px" />
    <P fullWidth>Setz dich in die reihacht und bringe deine Idee und Botschaft in Bewegung. Wir bewegen alle und alles.</P>
    <Space height="60px" />
    <P fullWidth superbold>Wir freuen uns auf die Zusammenarbeit!</P>
    <P fullWidth superbold>Kontaktiere uns per E-Mail auf <a href="mailto:hallo@reiheacht.ch" className="service-email-link">hallo@reiheacht.ch</a></P>
    <Space height="60px" />
  </Service>
);

export default MotionDesign;
