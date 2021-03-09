import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  animated?: Boolean;
  className?: String;
}

const StyledParagraph = styled.p`
  font-size: 18px;
  font-family: ${(p) => (p.bold ? 'Helvetica 65 Medium' : 'Helvetica 55 Roman')};
  color: ${(p) => (p.color === 'darkGrey' ? p.theme.darkGrey : p.theme.white)};
  line-height: 160%;
  max-width: 600px;
  opacity: ${(p) => (p.animated ? 0 : 1)};

    &.active {
      animation: 0.5s ease-in-out 4.5s 1 forwards appear;
    }

    @keyframes appear {
      0% {opacity: 0;}
      100% {opacity: 1;}
    }

`;

const Paragraph: React.FunctionComponent<Props> = ({
  children, animated, className, color, bold,
}) => (
  <StyledParagraph className={className} animated={animated} color={color} bold={bold}>
    {children}
  </StyledParagraph>
);

export default Paragraph;
