import React from 'react';
import Legal from '@/components/pages/Legal';
import { H2, H3 } from '@/components/text/Text';
import LegalItem from '@/components/text/LegalItem';
import Spacer from '@/components/layout/Spacer';
import ListItem from '@/components/text/ListItem';
import Paragraph from '@/components/text/Paragraph';

const content = [
  {
    title: '',
    text: '',
    items: [],
  },

];

interface Props { }

const TermsAndConditions: React.FunctionComponent<Props> = () => (
  <>
    <Legal>
      <H2 color="darkGrey">Allgemeine Geschäftsbedingungen</H2>
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

export default TermsAndConditions;
