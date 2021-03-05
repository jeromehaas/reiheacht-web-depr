import React from 'react';
import Limiter from '@/components/layout/Limiter';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  hero?: Boolean;
}

const StyledSection = styled.div`
  width: 100%;
  min-height: ${p => p.hero ? 'calc(100vh - 330px)' : 'unset'};
  margin-bottom: 150px;
  padding-top: 80px;
`;

const Section: React.FunctionComponent<Props> = ({ children, hero, id }) => {

  return (
    <Limiter id={id}>
      <StyledSection hero >
        {children}
      </StyledSection>
    </Limiter>
  );

}

export default Section;