import React from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';

interface Props {
  content: string;
  link: string;
  animated?: Boolean;
  customDelay?: string;
}

const checkAnimated = ({ animate, delay }) => {
  if (animate && delay) {
    return css`
      transition: ${(p) => p.theme.standardTransition};
      opacity: 0;
      animation: ${(`1s ease-in-out ${delay} 1 forwards moveUp`)};

      @keyframes moveUp {
        from {top: 60px; opacity: 0;}
        to {top: 0px; opacity: 1;}
      }

    `;
  }
};

const getColor = ({ color, theme }) => {
  switch (color) {
    case 'orange':
      return css`
        background-color: ${theme.orange};
      `;
    case 'blue':
      return css`
        background-color: ${theme.blue};
      `;
    case 'white':
      return css`
        background-color: ${theme.white};
        color: ${theme.darkGrey};
      `;
    default:
      return css`
      background-color: ${theme.orange};
      `;
  }
};

const StyledButton = styled.button`
  position: relative;
  width: auto;
  display: inline-block;
  min-width: 200px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  outline: none;
  margin: 0 30px 30px 0;
  ${checkAnimated};
  ${getColor};

  a {
    color: ${(p) => p.theme.white};
    text-decoration: none;
    font-size: 20px;
    line-height: 1.5;
  }

  &:hover {
    background-color: ${(p) => p.theme.orangeHover};
  }
  `;

const Button: React.FunctionComponent<Props> = ({
  text, target, animate, delay, color,
}) => (
  <StyledButton animate={animate} delay={delay} color={color}>
    <Link href={target}>
      <a>{text}</a>
    </Link>
  </StyledButton>
);

export default Button;
