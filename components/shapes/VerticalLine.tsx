import React from 'react';
import styled, { css } from 'styled-components';

const StyledVerticalLine = styled.i`
  width: 5px;
  height: 100%;
  background-color: ${(p) => p.theme.orange};
  display: block;
  margin: 0 30px;

${({ animated, delay }) => animated === true && delay
    && css`
    height: 0%;
    animation: 0.5s ease-in-out ${delay} 1 forwards extendVertical;
    @keyframes extendVertical {
    0% {height: 0%;}
    100% {height: 100%;}
    }
`}

`;

interface Props {
  className?: string;
  animated?: boolean;
  delay?: string;
}

const VerticalLine: React.FunctionComponent<Props> = ({ delay }) => (
  <StyledVerticalLine animated delay={delay} />
);

export default VerticalLine;
