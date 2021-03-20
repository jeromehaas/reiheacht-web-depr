import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  color?: string;
}

const StyledHighlight = styled.span`
  color: ${(p) => (p.color ? p.color : p.theme.blue)};
  display: inline-block;
`;

const Highlight: React.FunctionComponent<Props> = ({ children, color }) => (
  <StyledHighlight color={color}>
    {children}
  </StyledHighlight>
);

export default Highlight;
