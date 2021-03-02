import React from 'react';
import styled from 'styled-components';

interface Props { }

const PageWrapper = styled.div` 
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: ${p => p.theme.darkGrey};
`;

export default PageWrapper;
