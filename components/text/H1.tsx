import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const StyledH1 = styled.h1`
 color: ${p => p.theme.white};
 font-size: 75px; 
 line-height: ${p => p.theme.titleLineHeight};

 @media (max-width: 800px) {
  font-size: 60px;
 }

 @media (max-width: 700px) {
  font-size: 50px;
 }

 @media (max-width: 500px) {
  font-size: 40px;
 }

 @media (max-width: 400px) {
  font-size: 30px;
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