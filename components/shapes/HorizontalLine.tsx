import React from 'react';
import styled from 'styled-components';

const StyledHorizontalLine = styled.i`
  width: ${(p) => (p.animated ? '0px' : '80px')};
  height: 5px;
  background-color: ${(p) => p.theme.orange};
  display: block;
  margin: ${(p) => p.theme.spacingBig} 0 35px 0;

    &.active {
      animation: 0.5s ease-in-out 4.5s 1 forwards extend;
    }

    @keyframes extend {
      0% {width: 0px;}
      100% {width: 80px;}
    }

`;

interface Props {
  className?: String;
  animated?: Boolean;
}

const HorizontalLine: React.FunctionComponent<Props> = ({ className, animated }) => (
  <StyledHorizontalLine animated className={className} />
);

export default HorizontalLine;
