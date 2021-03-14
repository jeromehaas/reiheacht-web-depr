import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const StyledErrorMessage = styled.div`
    width: 100;
    background-color: ${(p) => p.theme.white};
`;

const ErrorMessage: React.FunctionComponent<Props> = ({ children }) => (
  <StyledErrorMessage>
    {children}
  </StyledErrorMessage>
);

export default ErrorMessage;
