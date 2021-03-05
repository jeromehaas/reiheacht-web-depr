import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const StyledH1 = styled.h1`
 color: ${p => p.theme.white};
 font-size: 75px; 
 line-height: ${p => p.theme.titleLineHeight};

 @media (max-width: 1000px) {
  font-size: 55px;
 }

 @media (max-width: 550px) {
  font-size: 35px;
 }
`;

const H1: React.FunctionComponent<Props> = ({ children }) => {


  return (
    <StyledH1>
      {children}
    </StyledH1>
  );

}

export default H1;