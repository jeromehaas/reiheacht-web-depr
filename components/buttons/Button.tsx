import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

interface Props {
  content: string;
  link: string;
  animated?: Boolean;
  className?: string;
  customDelay?: string;
}

const StyledButton = styled.button`
  width: auto;
  display: inline-block;
  min-width: 200px;
  padding: ${(p) => p.theme.spacingSmall} ${(p) => p.theme.spacingMedium}; 
  background-color: ${(p) => p.theme.orange};
  border-radius: ${(p) => p.theme.borderRadius};
  border: none;
  outline: none;
  margin: 0 ${(p) => p.theme.spacingBig} ${(p) => p.theme.spacingBig} 0;
  transition: ${(p) => p.theme.standardTransition};
  opacity: ${(p) => (p.animated ? 0 : 1)};
  position: relative;

  &.active {
      animation: ${(p) => (p.customDelay ? `1s ease-in-out ${p.customDelay} 1 forwards moveUp` : '1s ease-in-out 5s 1 forwards moveUp')};
    }

    @keyframes moveUp {
      from {top: 60px; opacity: 0;}
      to {top: 0px; opacity: 1;}
    }

  a {
    color: ${(p) => p.theme.white};
    text-decoration: none;
    font-size: ${(p) => p.theme.buttonFontSize};
    font-family: 'Helvetica 65 Medium';
  }

  &:hover {
    background-color: ${(p) => p.theme.orangeHover};
  }
  `;

const Button: React.FunctionComponent<Props> = ({
  content, link, animated, className, customDelay,
}) => (
  <StyledButton animated={animated} className={className} customDelay={customDelay}>
    <Link href={link}>
      <a>{content}</a>
    </Link>
  </StyledButton>
);

export default Button;
