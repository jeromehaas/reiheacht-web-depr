import React from 'react';
import styled from 'styled-components';

const Limiter = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 ${p => p.theme.spacingBig}; 
`;

export default Limiter;