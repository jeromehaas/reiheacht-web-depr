import React from 'react';
import Limiter from '@/components/layout/Limiter';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const StyledSection = styled.div`
  width: 100%;
  margin-bottom: ${p => p.theme.spacingBig}
`;

const Section: React.FunctionComponent<Props> = ({ children }) => {

  return (
    <Limiter>
      <StyledSection>
        {children}
      </StyledSection>
    </Limiter>
  );

}

export default Section;