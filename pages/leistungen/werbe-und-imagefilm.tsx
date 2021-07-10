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

const WerbeUndImagefilm: React.FunctionComponent<Props> = () => (
  <Service>
    <Head title="Werbe- und Imagefilm | reiheacht" description="Videoproduktion für Werbe- & Imagefilme, von der Idee über die Konzeption bis hin zum finalen Video für TV, Internet oder Kino" />
    <H1>Werbe- & Imagefilm<HL color="blue">.</HL></H1>
    <HorizontalLine />
    <Space height="50px" />
    <Image src="/images/services/werbe-und-imagefilm.png" alt="Werbe- und Imagefilm" />
    <Quote content="Reale Menschen, reale Bilder." />
    <Space height="20px" />
    <H25 color="white" fullWidth>Echte Menschen</H25>
    <Space height="20px" />
    <P fullWidth>Es ist essentiell zu wissen, welches die beste Videoart für deine einzigartige Botschaft ist. Ist das Hauptziel deine Marke zu vermenschlichen, dein Team   bei ihrer täglichen Tätigkeit zu präsentieren oder Menschen im Umgang mit deinem Produkt zu zeigen, so sollte die Wahl einen Werbe- oder Imagefilm fallen.</P>
    <Space height="20px" />
    <H25 fullWidth>Action & Cut</H25>
    <Space height="20px" />
    <P fullWidth>Für diese Form von Video braucht es echte Kameraarbeit vor Ort oder an einem Filmset mit einem Filmteam, professionellen SchauspielerInnen oder Laien. Während professionelle Schauspielende dein Video, ja, professionell wirken lassen. Es kann jedoch deinem Publikum helfen, eine stärkere Verbindung zu deinem Unternehmen aufzubauen, wenn du deine Mitarbeitenden einsetzt, welche auch tagtäglich dein Unternehmen repräsentieren. Das Video gewinnt an Authentizität.</P>
    <Space height="20px" />
    <H25 color="white" fullWidth>Eine würzige Mischung</H25>
    <Space height="20px" />
    <P fullWidth>So ziemlich kein Werbe- oder Imagefilm kommt ganz ohne Motion Design aus, sei es Text oder dein hübsches Logo, welche animiert werden.</P>
    <Space height="60px" />
    <P fullWidth>Setz dich in die reiheacht und lass uns zusammen deine Botschaft, in einer fesselnden Geschichte verpackt, in die Welt hinaustragen.</P>
    <Space height="60px" />
    <P fullWidth superbold>Wir freuen uns auf die Zusammenarbeit!</P>
    <P fullWidth superbold>Kontaktiere uns per E-Mail auf <a href="mailto:hallo@reiheacht.ch" className="service-email-link">hallo@reiheacht.ch</a></P>
    <Space height="60px" />
  </Service>

);

export default WerbeUndImagefilm;
