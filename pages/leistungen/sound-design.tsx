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

const SoundDesign: React.FunctionComponent<Props> = () => (
  <Service>
    <Head title="Sound Design für Motion Design und Werbefilm | reiheacht" description="Erwecke in deinen Videos Emotionen mit Musik, Voice Over und Soundeffekten" />
    <H1>Sound Design<HL color="blue">.</HL></H1>
    <HorizontalLine />
    <Space height="50px" />
    <Image src="/images/services/sound-design.png" alt="Sound Design" />
    <Quote content="Gewisse Klänge rufen gewisse Emotionen hervor." />
    <Space height="20px" />
    <H2 color="white" fullWidth>Den richtigen Ton treffen</H2>
    <Space height="20px" />
    <P fullWidth>Ist das Sound Design (dt. Tongestaltung) gut umgesetzt, fühlt es sich natürlich und unsichtbar an. Es kann einem finalen Produkt die letzte Note verpassen, es erst richtig zum Leben erwecken und zum Storytelling beitragen.</P>
    <Space height="20px" />
    <P fullWidth>Wir können damit eine gewünschte Atmosphäre erschaffen oder eine Animation verstärken.</P>
    <Space height="20px" />
    <P fullWidth>In Spielfilmen sowie Werbe- oder Imagefilmen längst im Einsatz, wird es im Motion Design oft noch vernachlässigt. Bei realen Bildern erwarten und kennen wir die natürlichen Geräusche. Wir wissen, wie Fahrzeuge im Verkehr, Fusstritte oder singende Vögel zu klingen haben. Da Animationen von Grund auf kreiert werden und oft abstrakte Formen enthalten, deren Geräusche wir nicht unbedingt kennen, bedarf es einer Vertonung. Es kann kein Audio direkt von der Quelle aufgezeichnet werden. </P>
    <Space height="20px" />
    <H2 fullWidth>Storytelling mit Audio</H2>
    <Space height="20px" />
    <P fullWidth>Stelle dir eine schöne Landschaft vor, doch statt strahlender Sonne und blauem Himmel ist es bewölkt, es regnet und ein starker Wind weht. Wir hören das Pfeifen des Windes und ein Heulen aus der Entfernung. Alleine das kann schon die gesamte Wahrnehmung der Geschichte verändern. Mische noch einen Voice Over Artist mit einer mysteriösen Stimme und unheimliche Musik dazu und schon hört sich ein Abendspaziergang nicht mehr so verlockend an. </P>
    <Space height="20px" />
    <H2 fullWidth>Die vier Aspekte des Sound Designs</H2>
    <Space height="20px" />
    <H3 fullWidht>Hintergrundgeräusche</H3>
    <P fullWidth>Leichte Regentropfen, Bauernhofgeräusche, Strassenverkehr etc.</P>
    <Space height="20px" />
    <H3 fullWidht>Sound Effekte</H3>
    <P fullWidth>Dient zur Vertonung und Verstärkung von Animationen, welche sich im Vordergrund abspielen wie ein Auto, ein Flugzeug, ein bellender Hund oder das Pfeifen des Windes etc.</P>
    <Space height="20px" />
    <H3 fullWidht>Voice Over</H3>
    <P fullWidth>Die Stimme, welche uns durch die Geschichte begleitet. Eignet sich hervorragend um Tempo aufzubauen, da dadurch weniger Text notwendig ist.</P>
    <Space height="20px" />
    <H3 fullWidht>Musik</H3>
    <P fullWidth>Die Musik gemischt mit den Hintergrundgeräuschen definiert die Atmosphäre des Videos.</P>
    <Space height="20px" />
    <P fullWidth>In der reiheacht hört man nicht nur das Popcorn poppen.</P>
    <Space height="20px" />
    <P fullWidth>Wir freuen uns auf die Zusammenarbeit!</P>
    <P fullWidth>Kontaktiere uns per E-mail auf <a href="mailto:hallo@reiheacht.ch" style={{ textDecoration: 'underline' }}>hallo@reiheacht.ch</a></P>
    <Space height="60px" />
  </Service>
);

export default SoundDesign;
