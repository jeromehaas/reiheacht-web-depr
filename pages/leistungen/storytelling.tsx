import React from 'react';
import Service from '@/components/pages/Service';
import {
  HL, P, H1, H4, H3,
} from '@/components/text/Text';
import Image from '@/components/partials/Image';
import Head from '@/components/partials/Head';
import HorizontalLine from '@/components/shapes/HorizontalLine';
import Space from '@/components/layout/Space';
import Quote from '@/components/text/Quote';
import NextLink from 'next/link';

interface Props { }

const Storytelling: React.FunctionComponent<Props> = () => (
  <Service>
    <Head title="Storytelling für Motion Design Werbe- und Imagefilm | reiheacht" description="Erreiche deine Zielgruppe mit packendem Storytelling für Motion Design, Werbe- & Imagefilm" />
    <H1>Videokonzeption<HL color="blue">.</HL></H1>
    <HorizontalLine />
    <Space height="50px" />
    <Image src="/images/services/storytelling.png" alt="Storytelling" />
    <Quote content="Emotionen verbinden mit Storytelling." />
    <Space height="20px" />
    <H4 color="white" fullWidth>Erzeuge Emotionen, die verbinden</H4>
    <Space height="20px" />
    <P fullWidth>Jeder möchte Eindruck hinterlassen und in Erinnerung bleiben. Gerade für Unternehmen sind das besonders wichtige Ziele. Die besten Geschichten sind diejenigen, welche man nicht mehr vergisst, weil diese die Zuschauenden mitfühlen, mitlachen oder mitweinen lassen.</P>
    <Space height="20px" />
    <P fullWidth>Grosse Unternehmen wie Apple, Google oder Adidas setzen nicht nur ihre Produkte gekonnt in Szene, sie erzählen eine Geschichte um ihr Produkt herum. So erzeugen sie eine authentische Verbindung und verankern ihre Botschaft in den Köpfen ihrer Zielgruppe.</P>
    <Space height="20px" />
    <P fullWidth> Trotz dessen ist dies ein oft vernachlässigter Aspekt in der Planung und Konzeption eines <NextLink href="/leistungen/motion-design"><a className="link--service">Animations-</a></NextLink>, <NextLink href="/leistungen/werbe-und-imagefilm"><a className="link--service">Werbe- oder Imagefilm</a></NextLink>.</P>
    <Space height="20px" />
    <P fullWidth>Niemand möchte eine emotionslose Ansprache über Produkte oder Dienstleistungen hören. Verpacke dein Produkt besser in eine fesselnde Geschichte, welche deine Marke, Kultur, Werte und Stil widerspiegeln.</P>
    <Space height="20px" />
    <H4 fullWidth>Erzähle Geschichten, die bleiben</H4>
    <Space height="20px" />
    <P fullWidth>Storytelling umfasst viele Aspekte, nicht nur das Geschehen auf dem Bildschirm, mögliche Dialoge oder die Stimme eines Voice Over Artists. Farben, Musik, Soundeffekte, die Animation eines oder mehrerer Objekte  tragen ebenfalls ihren Teil zum Storytelling bei und können Stimmung und Atmosphäre eines Videos entscheidend beeinflussen.</P>
    <Space height="20px" />
    <P fullWidth>Es ist bekannt, dass 80% der Botschaften visuell aufgenommen werden. Storytelling in Verbindung mit Motion Design oder Realfilm macht es zu einer grossartigen Möglichkeit um einen bleibenden und positiven Eindruck bei deiner Zielgruppe zu hinterlassen.</P>
    <Space height="20px" />
    <P fullWidth>Selbstverständlich kann auch ein Plakat an der Strasse oder ein Flyer eine Geschichte erzählen. Es darf nicht vergessen werden, dass auch heute noch viele Leute mit Print erreicht werden können. Video und Print bilden ein fantastisches Gespann um seine Marke zu präsentieren.</P>
    <Space height="20px" />
    <H4 fullWidth>Alles im Blickfeld mit einem Storyboard</H4>
    <Space height="20px" />
    <P fullWidth>Um auf einen Blick erkennen zu können, ob eine Geschichte funktioniert oder nicht, bedarf es je nach Umfang eines Projektes oft eines Storyboards mit einzelnen Bildabfolgen der Umsetzung. So kann schon vor der eigentlichen Videoproduktion gewährleistet werden, dass sich das Video in die gewünschte Richtung bewegt und wir unsere Ziele erreichen.</P>
    <Space height="20px" />
    <P fullWidth>Setz dich in die reiheacht und lass uns zusammen deine Botschaft, in einer fesselnden Geschichte verpackt, in die Welt hinaustragen.</P>
    <Space height="20px" />
    <P fullWidth>Wir freuen uns auf die Zusammenarbeit!</P>
    <P fullWidth>Kontaktiere uns per E-mail auf <a href="mailto:hallo@reiheacht.ch" className="link--service">hallo@reiheacht.ch</a></P>
    <Space height="60px" />
  </Service>

);

export default Storytelling;
