import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

interface Props {
  content: String;
  link: String;
}

const StyledButton = styled.button`
  width: auto;
  display: inline-block;
  min-width: 200px;
  padding: ${p => p.theme.spacingSmall} ${p => p.theme.spacingMedium}; 
  background-color: ${p => p.theme.orange};
  border-radius: ${p => p.theme.borderRadius};
  border: none;
  outline: none;
  margin: 0 ${p => p.theme.spacingBig} ${p => p.theme.spacingBig} 0;
  transition: ${p => p.theme.standardTransition};
   
  a {
    color: ${p => p.theme.white};
    text-decoration: none;
    font-size: ${p => p.theme.buttonFontSize};
    font-family: ${p => p.theme.buttonFontFamily};
  }

  &:hover {
    background-color: ${p => p.theme.orangeHover};
  }
  `;


const Button: React.FunctionComponent<Props> = ({ content, link }) => {

  return (
    <StyledButton>
      <Link href={link}>
        <a>{content}</a>
      </Link>
    </StyledButton>
  );

}

export default Button;