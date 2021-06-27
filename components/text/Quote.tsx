import React from 'react';
import styled from 'styled-components';
import { P, HL, H2 } from '@/components/text/Text';

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
    <H2 fullWidth><HL color="blue">«</HL>{ content }<HL color="blue">»</HL></H2>
  </StyledQuote>
);

export default Quote;
