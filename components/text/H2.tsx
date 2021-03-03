import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const StyledH2 = styled.h2`
  color: ${p => p.theme.white};
 font-size: 50px; 
 line-height: ${p => p.theme.titleLineHeight};
`;
const H2: React.FunctionComponent<Props> = ({ children }) => {


  return (
    <StyledH2>
      {children}
    </StyledH2>
  );

}

export default H2;