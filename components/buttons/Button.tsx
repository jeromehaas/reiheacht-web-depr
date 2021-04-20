import React from 'react';
import styled, { css } from 'styled-components';
import Linker from '@/components/buttons/Link';

const getAnimated = ({ animate, delay }) => {
  if (animate && delay) {
    return css`
      transition: ${(p) => p.theme.standardTransition};
      opacity: 0;
      animation: ${(`0.5s ease-out ${delay} 1 forwards moveUp`)};
      @keyframes moveUp {
        from {top: 60px; opacity: 0;}
        to {top: 0px; opacity: 1;}
      }
    `;
  }
};

const getColor = ({ color, theme }) => {
  switch (color) {
    case 'orange': return css` background-color: ${theme.orange};`;
    case 'blue': return css` background-color: ${theme.blue};`;
    case 'white': return css` background-color: ${theme.white};  color: ${theme.darkGrey};`;
    default: return css` background-color: ${theme.orange};`;
  }
};

const StyledButton = styled.button`
  position: relative;
  width: auto;
  min-width: 200px;
  padding: 0;
  border-radius: 5px;
  border: none;
  outline: none;
  margin: 0 30px 30px 0;
  float: left;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  ${getAnimated};
  ${getColor};

  &:hover {
    background-color: ${(p) => p.theme.orangeHover};
  }

  a {
    color: red;
    width: 100%;
    height: 100%;
    display: inline-block;
    padding: 10px 15px;
  }

  @media (max-width: 750px) {
   a { font-size: 15px !important }
   min-width: 150px !important;
  }

  @media (max-width: 430px) {
   a { font-size: 12px !important }
   min-width: 120px !important;
   margin: 0 15px 15px 0;
  }

  `;

interface Props {
  type: string;
  text: string;
  target: string;
  color?: string;
  animate?: boolean;
  delay?: string;
}

const Button: React.FunctionComponent<Props> = ({
  text, target, animate, delay, color, type,
}) => (
  <StyledButton animate={animate} delay={delay} color={color}>
    <Linker type={type} target={target}>
      {text}
    </Linker>
  </StyledButton>
);

export default Button;
