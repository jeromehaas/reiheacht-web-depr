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
  padding-top: 150px;
  min-height: ${(p) => (p.hero ? 'calc(100vh - 60px - 80px)' : null)};

  @media (max-width: 800px) {
    padding-top: 100px;
  }

`;

const Section: React.FunctionComponent<Props> = ({ children, hero, id }) => (

  <Limiter id={id}>
    <StyledSection hero={hero}>
      {children}
    </StyledSection>
  </Limiter>
);

export default Section;
