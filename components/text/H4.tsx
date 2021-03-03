import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const StyledH4 = styled.h4`
  color: ${p => p.theme.white};
  font-size: 20px;   
  line-height: ${p => p.theme.titleLineHeight};
`;
const H4: React.FunctionComponent<Props> = ({ children }) => {


  return (
    <StyledH4>
      {children}
    </StyledH4>
  );

}

export default H4;