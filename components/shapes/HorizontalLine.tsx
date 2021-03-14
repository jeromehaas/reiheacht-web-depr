import React from 'react';
import styled, { css } from 'styled-components';

const StyledHorizontalLine = styled.i`
  width: 80px;
  height: 5px;
  background-color: ${(p) => p.theme.orange};
  display: block;
  margin: 30px 0;

    ${({ animated, delay }) => animated === true && delay
    && css`
      width: 0px;
      animation: 0.5s ease-in-out ${delay} 1 forwards extendHorizontal;
      @keyframes extendHorizontal {
      0% {width: 0px;}
      100% {width: 80px;}
    }
  `}

`;

interface Props {
  className?: String;
  animated?: Boolean;
}

const HorizontalLine: React.FunctionComponent<Props> = ({ className, animated, delay }) => (
  <StyledHorizontalLine animated delay={delay} />
);

export default HorizontalLine;
