import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const StyledH3 = styled.h3`
  color: ${p => p.theme.white};
  font-size: 25px;
  line-height: ${p => p.theme.titleLineHeight};
`;
const H3: React.FunctionComponent<Props> = ({ children }) => {


  return (
    <StyledH3>
      {children}
    </StyledH3>
  );

}

export default H3;