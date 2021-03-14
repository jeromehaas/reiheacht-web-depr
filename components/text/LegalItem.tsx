import React from 'react';
import { P, H3 } from '@/components/text/text';
import Spacer from '@/components/layout/Spacer';

interface Props {
  title: string;
  text: string;
}

const LegalItem: React.FunctionComponent<Props> = ({ title, text }) => (
  <>
    <P size="normal" color="darkGrey" bold="true">{title}</P>
    <P size="small" color="darkGrey">{text}</P>
    <Spacer marginBottom="30px" />
  </>
);

export default LegalItem;
