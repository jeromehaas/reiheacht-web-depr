import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  animated?: Boolean;
  className: String;
}

const StyledParagraph = styled.p`
  font-size: 20px;
  font-family: 'Helvetica 55 Roman';
  color: ${p => p.theme.white}; 
  line-height: 160%;
  opacity: ${p => p.animated ? 0 : 1 };
  margin: 0 ${p => p.theme.spacingBig} ${p => p.theme.spacingBig} 0;

    &.active {
      animation: 0.5s ease-in-out 4.5s 1 forwards appear;
    }

    @keyframes appear {
      0% {opacity: 0;}
      100% {opacity: 1;}
    }

`;

const Paragraph: React.FunctionComponent<Props> = ({ children, animated, className }) => {

  return (
    <StyledParagraph className={className} animated={animated}>
      {children}
    </StyledParagraph>
  );

}

export default Paragraph;