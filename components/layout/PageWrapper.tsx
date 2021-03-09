import React from 'react';
import styled from 'styled-components';

interface Props {
  color?: string;
  children: React.ReactNode;
}

const StyledPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: ${(p) => (p.color === 'white' ? p.theme.white : p.theme.darkGrey)};
  margin-bottom: -150px;
  position: relative;
  overflow: hidden;
`;
const PageWrapper: React.FunctionComponent<Props> = ({ color, children }) => (
  <StyledPageWrapper color={color}>
    {children}
  </StyledPageWrapper>
);

export default PageWrapper;
