import React from 'react';
import Paragraph from '@/components/text/Paragraph';
import Spacer from '@/components/layout/Spacer';

interface Props {
  title: string;
  text: string;
}

const LegalItem: React.FunctionComponent<Props> = ({ title, text }) => (
  <>
    <Paragraph color="darkGrey" bold="true">{title}</Paragraph>
    <Paragraph color="darkGrey">{text}</Paragraph>
    <Spacer marginBottom="30px" />
  </>
);

export default LegalItem;
