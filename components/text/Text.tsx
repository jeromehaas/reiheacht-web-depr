import React from 'react';
import styled, { css } from 'styled-components';

interface Props { }

const getColor = ({ theme, color }) => {
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
  ${getColor}
  line-height: 1.5;
`;

const H1 = styled.h1`
  ${sharedTitleStyle};
 font-size: 75px; 

 @media (max-width: 800px) {
  ${sharedTitleStyle};
  font-size: 60px;
 }

 @media (max-width: 700px) {
  ${sharedTitleStyle};
  font-size: 50px;
 }

 @media (max-width: 500px) {
  ${sharedTitleStyle};
  font-size: 40px;
 }

 @media (max-width: 400px) {
  ${sharedTitleStyle};
  font-size: 30px;
 }
`;

const H2 = styled.h2`
  ${sharedTitleStyle};
  font-size: 50px; 

 @media (max-width: 800px) {
  font-size: 50px;
 }

 @media (max-width: 700px) {
  font-size: 40px;
 }

 @media (max-width: 500px) {
  font-size: 30px;
 }

 @media (max-width: 400px) {
  font-size: 30px;
 }

`;

const H3 = styled.h3`
  ${sharedTitleStyle};
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

export {
  H1,
  H2,
  H3,
  H4,
};
