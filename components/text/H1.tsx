import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const StyledH1 = styled.h1`
 color: ${p => p.theme.white};
 font-size: 75px; 
`;
const H1: React.FunctionComponent<Props> = ({ children }) => {


  return (
    <StyledH1>
      {children}
    </StyledH1>
  );

}

export default H1;