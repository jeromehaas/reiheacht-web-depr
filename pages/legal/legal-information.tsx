import React from 'react';
import Legal from '@/components/pages/Legal';
import { H2, H3 } from '@/components/text/Text';
import LegalItem from '@/components/text/LegalItem';
import Spacer from '@/components/layout/Spacer';
import ListItem from '@/components/text/ListItem';
import Paragraph from '@/components/text/Paragraph';

const content = [
  {
    title: '1. Erhebung, Verarbeitung und Nutzung personenbezogener Daten',
    text: 'Bei einem Besuch dieser Website erheben wir keine personenbezogenen Daten von Ihnen. Personenbezogene Daten werden nur erhoben, wenn Sie uns diese selbst über unser Kontaktformular mitteilen. Diese Daten werden ausschliesslich zur Beantwortung Ihres Anliegens genutzt und danach wieder gelöscht.',
    items: [],
  },
  {
    title: '2. Verwendung von eigenen Cookies',
    text: 'Beim Aufruf bestimmter Seiten wird ein so genanntes «Session-Cookie» gesetzt. Hierbei handelt es sich um eine kleine Textdatei, welche ausschliesslich dazu dient, bestimmte Applikationen nutzen zu können. Sie können bei den meisten Webbrowsern die Einstellungen so ändern, dass Ihr Browser neue Cookies nicht akzeptiert oder Sie können erhaltene Cookies jederzeit von Ihrem Computer löschen lassen.',
    items: [],
  },
  {
    title: '3. Server-Log-Dateien',
    text: 'Wie bei jeder Verbindung mit einem Webserver protokolliert und speichert der Server unseres Webhosting-Anbieters Hostpoint in 8640 Rapperswil-Jona, Schweiz, bestimmte technische Daten. Zu diesen Daten gehören die IP-Adresse und das Betriebssystem Ihres Geräts, die Daten, die Zugriffszeit, die Art des Browsers sowie die Browser-Anfrage inklusive der Herkunft der Anfrage (Referrer). Dies ist aus technischen Gründen erforderlich, um Ihnen unsere Website zur Verfügung zu stellen. Der Webhosting-Anbieter schützt diese Daten mit technischen und organisatorischen Massnahmen vor unerlaubten Zugriffen und gibt sie nicht an Dritte weiter. Soweit wir dabei personenbezogene Daten verarbeiten, tun wir dies aufgrund unseres Interesses, Ihnen die bestmögliche Nutzererfahrung zu bieten und die Sicherheit und Stabilität unserer Systeme zu gewährleisten.',
    items: [],
  },
  {
    title: '4. Dritt-Anbieter',
    text: 'Wir weisen Sie darauf hin, dass wir bei Links und Inhalte Dritter die auf unserer Webseite auftauchen können, keinen Einfluss auf die Datenschutzbestimmungen Dritter haben und diese nicht garantieren können. ',
    items: [],
  },
  {
    title: '5. Google Analytics',
    text: 'Diese Website nutzt Google Analytics, einen Webanalysedienst der Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA. Google Analytics verwendet sog. «Cookies», d.h. Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen. Google nutzt diese Informationen, um im Auftrag des Betreibers dieser Website Ihre Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem Websitebetreiber zu erbringen. Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt. Durch eine entsprechende Einstellung in Ihrem Browser können Sie die Speicherung der Cookies verhindern oder wieder löschen.',
    items: [],
  },
  {
    title: '6. Ihre Rechte',
    text: 'Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstösst oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich bei der Aufsichtsbehörde beschweren.',
    items: [],
  },
  {
    title: '7. Urheberrechte',
    text: 'Alle Inhalte auf reiheacht.ch sind urheberechtlich geschützt. und gehören einzig und allein der reiheacht oder den ausdrücklich genannten Rechtsinhabern. Für eine Verwendung jeglicher Art von Inhalten auf reiheacht.ch ist schriftlich im Voraus eine Zustimmung einzuholen.',
    items: [],
  },

];

interface Props { }

const LegalInformation: React.FunctionComponent<Props> = () => (
  <>
    <Legal>
      <H2 color="darkGrey">Datenschutzerklärung.</H2>
      <Spacer marginBottom="60px" />
      {content.map((item, index) => (
        <LegalItem key={index} title={item.title} text={item.text} />
      ))}
      <Paragraph>
        Datenschutzerklärung vom März 2021
      </Paragraph>

      <Paragraph>
        Sie erreichen uns unter folgenden Kontaktdaten:
        reiheacht Marketing GmbH
        Spillgässli 12
        6205 Eich
        hallo@reiheacht.ch

      </Paragraph>
      <Spacer marginBottom="60px" />

    </Legal>
  </>
);

export default LegalInformation;
