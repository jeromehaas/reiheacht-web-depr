import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const StyledHighlight = styled.span`
  color: ${p => p.theme.blue};
  display: inline-block;
`;

const Highlight: React.FunctionComponent<Props> = ({ children }) => {


  return (
    <StyledHighlight>
      {children}
    </StyledHighlight>
  );

}

export default Highlight;