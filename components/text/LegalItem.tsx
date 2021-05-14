import React from 'react';
import { P } from '@/components/text/Text';
import Space from '@/components/layout/Space';

interface Props {
  title?: any;
  text?: any;
}

const LegalItem: React.FunctionComponent<Props> = ({ title, text }) => (
  <>
    <P size="normal" color="darkGrey" bold="true">{title}</P>
    <P size="small" color="darkGrey">{text}</P>
    <Space height="30px" />
  </>
);

export default LegalItem;
