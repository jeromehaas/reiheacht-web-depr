import React from 'react';
import styled, { css } from 'styled-components';

interface Props { }

const getTitleColor = ({ theme, color }) => {
  switch (color) {
    case 'white':
      return css`
        color: ${theme.white};
      `;
    case 'blue':
      return css`
        color: ${theme.blue};
      `;
    case 'darkGrey':
      return css`
        color: ${theme.darkGrey};
      `;
    case 'orange':
      return css`
        color: ${theme.orange};
      `;
    default:
      return css`
        color: ${theme.white};
      `;
  }
};

const sharedTitleStyle = css`
  ${getTitleColor}
  line-height: 1.25;
`;

const H1 = styled.h1`
  ${sharedTitleStyle};
  font-size: 75px; 
  margin-right: 0px;
  font-family: 'Helvetica Neue 85 Heavy';
  /* font-family: ${(p) => p.theme.fontHeavy}; */

 @media (max-width: 900px) {
  ${sharedTitleStyle};
  font-size: 60px;
 }

 @media (max-width: 720px) {
  ${sharedTitleStyle};
  font-size: 50px;
 }

 @media (max-width: 620px) {
  ${sharedTitleStyle};
  font-size: 40px;
 }

 @media (max-width: 525px) {
  ${sharedTitleStyle};
  font-size: 30px;
 }

 @media (max-width: 420px) {
  ${sharedTitleStyle};
  font-size: 25px;
 }
`;

const H2 = styled.h2`
  ${sharedTitleStyle};
  font-size: 50px; 
  max-width: 660px;
  font-family: 'Helvetica Neue 85 Heavy';

  @media (max-width: 720px) {
  ${sharedTitleStyle};
  font-size: 50px;
 }

 @media (max-width: 620px) {
  ${sharedTitleStyle};
  font-size: 40px;
 }

 @media (max-width: 525px) {
  ${sharedTitleStyle};
  font-size: 30px;
 }

 @media (max-width: 420px) {
  ${sharedTitleStyle};
  font-size: 25px;
 }

`;

const H3 = styled.h3`
  ${sharedTitleStyle};
  font-family: 'Helvetica Neue 55 Roman', serif;
  font-size: 25px;

  @media (max-width: 800px) {
  font-size: 25px;
 }

 @media (max-width: 700px) {
  font-size: 25px;
 }

 @media (max-width: 500px) {
  font-size: 25px;
 }

 @media (max-width: 400px) {
  font-size: 20px;
 }

`;

const H4 = styled.h4`
  ${sharedTitleStyle};
  font-family: 'Helvetica Neue 55 Roman', serif;
  font-size: 20px;   

  @media (max-width: 800px) {
  font-size: 20px;
 }

 @media (max-width: 700px) {
  font-size: 20px;
 }

 @media (max-width: 500px) {
  font-size: 20px;
 }

 @media (max-width: 400px) {
  font-size: 20px;
 }
 `;

const getParagraphColor = ({ theme, color }) => {
  switch (color) {
    case 'white':
      return css`
        color: ${theme.white};
      `;
    case 'blue':
      return css`
        color: ${theme.blue};
      `;
    case 'darkGrey':
      return css`
        color: ${theme.darkGrey};
      `;
    case 'orange':
      return css`
        color: ${theme.orange};
      `;
    default:
      return css`
        color: ${theme.white};
      `;
  }
};

const getParagraphSize = ({ size }) => {
  switch (size) {
    case 'small':
      return css`
      font-size: 15px;
      `;
    case 'normal':
      return css`
      font-size: 20px;
      @media (max-width: 525px) {
        font-size: 15px;
      }
      `;
    case 'big':
      return css`
      font-size: 25px;
      @media (max-width: 525px) {
        font-size: 20px;
      }
      `;
    default:
      return css`
       font-size: 25px;;
      @media (max-width: 525px) {
        font-size: 20px;
      }
      `;
  }
};

const checkParagraphAnimated = ({ animate, delay }) => {
  if (animate && delay) {
    return css`
      transition: ${(p) => p.theme.standardTransition};
      opacity: 0;
      animation: ${`0.5s ease-in-out ${delay} 1 forwards appear}`};

      @keyframes appear {
        0% {opacity: 0;}
        100% {opacity: 1;}
    }

   `;
  }
};

const P = styled.p`
  font-size: 25px;
  max-width: 600px;
  opacity: 1;
  line-height: 1.6;
  font-family: 'Helvetica Neue 55 Roman', serif;
  ${getParagraphColor};
  ${getParagraphSize};
  ${checkParagraphAnimated};
`;

export {
  H1,
  H2,
  H3,
  H4,
  P,
};
