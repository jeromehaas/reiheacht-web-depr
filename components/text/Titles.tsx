import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const H1 = styled.h1`
 color: ${p => p.theme.white};
 font-size: 75px; 
 line-height: ${p => p.theme.titleLineHeight};

 @media (max-width: 800px) {
  font-size: 60px;
 }

 @media (max-width: 700px) {
  font-size: 50px;
 }

 @media (max-width: 500px) {
  font-size: 40px;
 }

 @media (max-width: 400px) {
  font-size: 30px;
 }
`;

const H2 = styled.h2`
  color: ${p => p.theme.white};
 font-size: 50px; 
 line-height: ${p => p.theme.titleLineHeight};

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
  color: ${p => p.theme.white};
  font-size: 25px;
  line-height: ${p => p.theme.titleLineHeight};

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
  color: ${p => p.theme.white};
  font-size: 20px;   
  line-height: ${p => p.theme.titleLineHeight};

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
  H4
}