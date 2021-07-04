import React from 'react';
import styled from 'styled-components';
import { P, HL, H4 } from '@/components/text/Text';

interface Props {
  content: string;
}

const StyledQuote = styled.div`
	margin: 80px auto;
	width: 100%;
	max-width: 800px;
	text-align: center;
`;

const Quote: React.FunctionComponent<Props> = ({ content }) => (
  <StyledQuote>
    <H4 fullWidth><HL color="blue">«</HL>{ content }<HL color="blue">»</HL></H4>
  </StyledQuote>
);

export default Quote;
