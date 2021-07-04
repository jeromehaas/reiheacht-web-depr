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
    <H2 color="white" fullWidth>Echte Menschen</H2>
    <Space height="20px" />
    <P fullWidth>Es ist essentiell zu wissen, welches die beste Videoart für deine einzigartige Botschaft ist. Ist das Hauptziel deine Marke zu vermenschlichen, dein Team   bei ihrer täglichen Tätigkeit zu präsentieren oder Menschen im Umgang mit deinem Produkt zu zeigen, so sollte die Wahl einen Werbe- oder Imagefilm fallen.</P>
    <Space height="20px" />
    <H2 fullWidth>Action & Cut</H2>
    <Space height="20px" />
    <P fullWidth>Für diese Art von Video braucht es somit echte Kameraarbeit vor Ort oder an einem Filmset mit echten Menschen.</P>
    <Space height="20px" />
    <P fullWidth>if your brand doesn’t combine animation with live action, knowing which is the best fit for your unique message is critical. If the main goal is to humanize your brand, live action is a good choice. Instead of paid actors, consider featuring key executives, real employees, and other partners or customers. Live-action allows you to communicate in much the same way you would in person, and having actual representatives of your company in your video will help your audience forge a stronger connection with your organization.</P>
    <Space height="20px" />
    <H2 color="white" fullWidth>Eine gesunde Mischung</H2>
    <Space height="20px" />
    <P fullWidth>So ziemlich kein Werbe- oder Imagefilm kommt ganz ohne Motion Design aus, sei es Text oder dein hübsches Logo, welche animiert werden.</P>
    <Space height="20px" />
    <P fullWidth>Setz dich in die reiheacht und lass uns zusammen deine Botschaft, in einer fesselnden Geschichte verpackt, in die Welt hinaustragen.</P>
    <Space height="20px" />
    <P fullWidth>Wir freuen uns auf die Zusammenarbeit!</P>
    <P fullWidth>Kontaktiere uns per E-mail auf <a href="mailto:hallo@reiheacht.ch" style={{ textDecoration: 'underline' }}>hallo@reiheacht.ch</a></P>
    <Space height="60px" />
  </Service>

);

export default WerbeUndImagefilm;
