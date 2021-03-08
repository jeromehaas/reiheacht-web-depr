import React from 'react';
import Limiter from '@/components/layout/Limiter';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  hero?: Boolean;
  id?: String;
}

const StyledSection = styled.div`
  width: 100%;
  margin-bottom: 150px;
  padding-top: 80px;
  min-height: ${(p) => (p.hero ? 'calc(100vh - 60px - 80px - 80px)' : null)}
`;

const Section: React.FunctionComponent<Props> = ({ children, hero, id }) => (
  <Limiter id={id}>
    <StyledSection hero={hero}>
      {children}
    </StyledSection>
  </Limiter>
);

export default Section;
