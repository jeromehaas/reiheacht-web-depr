import React from 'react';
import { P, H3 } from '@/components/text/Text';
import Spacer from '@/components/layout/Spacer';

interface Props {
  title?: any;
  text?: any;
}

const LegalItem: React.FunctionComponent<Props> = ({ title, text }) => (
  <>
    <P bold size="normal" color="darkGrey" bold="true">{title}</P>
    <P size="small" color="darkGrey">{text}</P>
    <Spacer marginBottom="30px" />
  </>
);

export default LegalItem;
