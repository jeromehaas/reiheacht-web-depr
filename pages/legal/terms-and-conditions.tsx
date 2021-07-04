import React from 'react';
import Legal from '@/components/pages/Legal';
import {
  H4, P, HL,
} from '@/components/text/Text';
import LegalItem from '@/components/text/LegalItem';
import Space from '@/components/layout/Space';
import styled from 'styled-components';

const DownloadButton = styled.div`
  .wrapper {
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }

  a {
    text-decoration: underline;
  }
`;

const ListItem = styled.span`
  display: block;
`;

const content = [
  {
    title: <>1.	Geltungsbereich</>,
    text: <>
      a) Für sämtliche Verträge zwischen der Reihe 8 Marketing GmbH (Reihe 8) und dem Auftraggeber gelten die folgenden Allgemeinen Geschäftsbedingungen (AGB). Die AGB sind auf unbestimmte Zeit gültig, solange sie nicht von der Reihe 8 ausdrücklich in schriftlicher Form geändert wurden. <br />
      b) Sofern die AGB nicht umgehend nach Erhalt abgelehnt werden, gelten sie als angenommen. <br />
      c) Abweichungen gelten nur, wenn sie von der Reihe 8 schriftlich bestätigt wurden. In kundenbezogenen Offerten werden alle Leistungen/Gegenleistungen definiert, hauptsächlich die zu erbringenden Leistungen, Umfang, Dauer und Vergütung.  <br />
      d) Die Reihe 8 bietet Ihren Auftraggeber ein umfassendes Angebot im Bereich des Online Marketings an. Die Kernleistungen umfassen Konzeption, Drehbuch, Storyboard, div. Bewegtbildumsetzungen (Realfilm, Animation), Webentwicklung sowie Design und Illustration.  <br />
      e) Bei einer Annahme der Offerte gilt diese gemäss dem schweizerischen Obligationenrecht als verbindlicher Auftrag, sofern dies innerhalb der geregelten Frist stattfindet. Die Annahme der Offerte durch den Auftraggeber kann schriftlich per E-Mail oder Briefpost erfolgen.  <br />
    </>,
    items: [],
  },
  {
    title: <>2.	Leistungen
    </>,
    text: <>
      a) Eine Anpassung der vereinbarten Leistungen gemäss Offerte kann im gegenseitigen Einverständnis erfolgen. <br />
      b) Kommt es zu einer Kürzung von vertraglich vereinbarten Leistungsaufwänden, so wird eine angemessene Entschädigung vereinbart.<br />
      c) Die Reihe 8 behält sich vor Drittanbieter und externe Experten beizuziehen, sofern es der Leistungserbringung dient. <br />
    </>,
    items: [],
  },
  {
    title: <>3.	Dienstleistungen
    </>,
    text: <>
      a) Die vertraglich vereinbarten Leistungen werden durch die Reihe 8 professionell, sorgfältig und nach bestem Wissen und Gewissen erbracht. <br />
      b) Vom Auftraggeber anvertraute Informationen werden stets vertraulich behandelt.<br />
      c) Termine sind nur dann verbindlich, wenn dies ausdrücklich schriftlich festgehalten wurde und nur unter der Voraussetzung, dass der Auftraggeber die notwendigen Unterlagen termingerecht zur Verfügung stellt und jegliche vereinbarte Termine einhält.<br />
    </>,
    items: [],
  },
  {
    title: <>4.	Verpflichtungen Auftraggeber</>,
    text: <>
      a) Damit eine sachgemässe Abwicklung des Auftrages möglich ist, verpflichtet sich der Auftraggeber zur Auftragsbeteiligung und stellt alle notwendigen Informationen und Daten rechtzeitig der Reihe 8 zur Verfügung. <br />
      b) Verschiebungen eines festgelegten Termins durch mangelnde Beteiligung des Auftraggebers gehen zu dessen Lasten.<br />
      c) Liegen gesetzliche Vorschriften vor, so muss der Auftraggeber die Reihe 8 darüber informieren. <br />
    </>,
    items: [],
  },
  {
    title: <>5.	Zahlungsbedingungen</>,
    text: <>
      a) Nach Auftragsabschluss erfolgt die Rechnungsstellung. Die Rechnung ist ohne Abzug innerhalb von 30 Tagen zu begleichen.<br />
      b) Sofern keine Pauschale vereinbart wurde, werden die Leistungen nach Aufwand abgerechnet. <br />
      c) Das Nutzungsrecht wird erst bei Begleichung der vollständigen Rechnung an den Auftraggeber übergeben. Bei Zahlungsverzug behält sich die Reihe 8 vor, Leistungen und Werke zurückzubehalten.<br />
      d) Sofern nichts anderes vereinbart, gelten folgende Zahlungsbestimmungen: <ListItem>- 50% bei Auftragserteilung</ListItem><ListItem>- 50% bei Projektübergabe / Projektabschluss</ListItem>
      e) Zieht der Auftraggeber einen bereits erteilten Auftrag zurück, kann die Reihe 8 eine Ausfallentschädigung von 35% verrechnen.<br />
    </>,
    items: [],
  },
  {
    title: <>6.	Urheberrecht und Nutzungsrecht</>,
    text: <>
      a) Die Urheberrechte geschaffener Werke der Reihe 8 gehören ausschliesslich der Reihe 8.<br />
      b) Von Reihe 8 geschaffene Werke können jederzeit zur Eigenwerbung eingesetzt werden.<br />
      c) Ohne ausdrückliche Zustimmung dürfen von Reihe 8 geschaffene Werke in keiner Weise verändert oder angepasst werden. Der Auftraggeber besitzt lediglich das Nutzerrecht.<br />
      d) Sofern keine schriftliche Bestätigung vorliegt, dürfen die Nutzungsrechte nicht an Dritte übertragen werden.<br />
    </>,
    items: [],
  },
  {
    title: <>7.	Haftungsausschluss</>,
    text: <>
      a) Die Reihe 8 haftet für vorsätzlich durch Absicht oder durch Grobfahrlässigkeit entstandene Schäden.<br />
      b) Die Reihe 8 haftet nicht für Leistungsausfälle oder Leistungsverzögerungen, die durch eine höhere Gewalt (Krieg, Naturkatastrophen, Feuer, behördliche Anordnungen, Ausfall Kommunikationsnetze unserer Anbieter etc). entstanden sind. Der Auftraggeber trägt die volle Verantwortung betreffend Korrektheit, Aktualität und Vollständigkeit von Reihe 8 abgelieferter Werke.<br />
      c) Die Reihe 8 übernimmt keinerlei Haftung für Datenverluste oder Datenwiederbeschaffung.<br />
    </>,
    items: [],
  },
  {
    title: <>8.	Kosten</>,
    text: <>
      a) Dem Auftraggeber können Mehrkosten von bis zu 10% verrechnet werden.<br />
      b) Entsteht ein vom Auftraggeber initiierter Mehraufwand, welcher in der Offerte nicht berücksichtigt wurde, seien es Ergänzungen, Anpassungen oder Erweiterungen, so wird dieser nach geregeltem Stundenansatz angerechnet.<br />
      c) Lizenzen, Kosten und Leistungen von Dritten sind grundsätzlich nicht in der Offerte einkalkuliert und werden zu marktpreisüblichen Konditionen eingekauft und in Rechnung gestellt.<br />
      d) Reisespesen werden nach Aufwand verrechnet.<br />
      e) Sofern nichts anderes vereinbart, werden Leistungen an Werktagen ausserhalb der üblichen Arbeitszeiten (08.00-18.00 Uhr) mit einem Zuschlag von 100% vergütet, für Samstage ein Zuschlag von 50%, Expressleistungen und Arbeiten an Sonn- und Feiertagen mit einem Zuschlag von 100%.<br />
    </>,
    items: [],
  },
  {
    title: <>9.	 Vertragsauflösung</>,
    text: <>
      a) Der Auftraggeber hat, sofern nichts anderes vereinbart, jederzeit das Recht, vom Vertragsverhältnis zurückzutreten. Nimmt dieser dieses Recht in Anspruch, so hat dieser der Reihe 8 die bisher geleisteten Aufwände zu vergüten.<br />
    </>,
    items: [],
  },
  {
    title: <>10.	Recht und Gerichtsstand</>,
    text: <>
      a) Grundsätzlich ist das Schweizer Recht anwendbar. Gerichtsstand ist der Sitz der Reihe 8 Marketing GmbH. <br />
    </>,
    items: [],
  },
  {
    title: <>11. Schlussbestimmungen</>,
    text: <>
      a) Die Reihe 8 behält sich vor, diese AGB jederzeit nach bestem Wissen und Gewissen anzupassen. <br />
      b) Jede Partei darf während der Dauer der Zusammenarbeit sowie 12 Monate nach Beendigung des Vertrages keine Mitarbeiter einer anderen Partei abwerben.<br />
      c) Für sämtliche Streitereien aufgrund dieser Vereinbarungen ist der Gerichtsstand am Sitz der Reihe 8 zuständig. Anwendbar ist das Schweizer Recht. <br />
      d) Sind oder werden einzelne Bestimmungen dieses Vertrages unwirksam, so wird dadurch die Wirksamkeit der übrigen Bestimmungen nicht berührt. Anstelle der unwirksamen oder undurchführbaren Bestimmung soll eine Bestimmung eintreten, die dem wirtschaftlichen Zweck der unwirksamen möglichst nahekommt.<br />
    </>,
    items: [],
  },
  {
    title: <></>,
    text: <>AGB vom März 2021</>,
    items: [],
  },

];

interface Props { }

const TermsAndConditions: React.FunctionComponent<Props> = () => (
  <>
    <Legal>
      <H4 color="darkGrey">AGB<HL color="blue">.</HL></H4>
      <Space height="60px" />
      {content.map((item, index) => (
        <LegalItem key={index} title={item.title} text={item.text} />
      ))}
      <Space height="60px" />
      <DownloadButton>
        <div className="wrapper">
          <a href="/files/agb_reiheacht_mrz21.pdf" download>
            <P size="normal" color="darkGrey">Hier herunterladen</P>
          </a>
        </div>
      </DownloadButton>
      <Space height="90px" />
    </Legal>
  </>
);

export default TermsAndConditions;
