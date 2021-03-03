import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}


const StyledParagraph = styled.p`
  font-size: 16px;
  font-family: 'Helvetica 55 Roman';
  color: ${p => p.theme.white}; 
  line-height: 160%;
  margin: 0 ${p => p.theme.spacingBig} ${p => p.theme.spacingBig} 0;
`;
const Paragraph: React.FunctionComponent<Props> = ({ children }) => {


  return (
    <StyledParagraph>
      {children}
    </StyledParagraph>
  );

}

export default Paragraph;