import React from 'react';
import styled, { css } from 'styled-components';

const getPageWrapperColor = ({ theme, color }) => {
  switch (color) {
    case 'white':
      return css` background-color: ${theme.white};`;
    case 'blue':
      return css` background-color: ${theme.blue}; `;
    case 'darkGrey':
      return css` background-color: ${theme.darkGrey}; `;
    case 'orange':
      return css` background-color: ${theme.orange}; `;
    default:
      return css` background-color: ${theme.darkGrey}; `;
  }
};

const StyledPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  margin-bottom: -150px;
  position: relative;
  overflow: hidden;
  ${getPageWrapperColor}
`;

interface Props {
  children: React.ReactNode;
  color?: string;
}

const PageWrapper: React.FunctionComponent<Props> = ({ color, children }) => (
  <StyledPageWrapper color={color}>
    {children}
  </StyledPageWrapper>
);

export default PageWrapper;
