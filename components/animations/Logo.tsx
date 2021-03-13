import React from 'react';
import Image from '@/components/partials/Image';
import styled from 'styled-components';

interface Props { }

const StyledLogo = styled.div`
  height: 600px;
  width: 100%;
  max-height: 500px;
  position: relative;


    .head, .eyes {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      max-height: 100%;
      max-width: 100%;
      padding: 100px;
    }

    @media (max-width: 1100px) {
      display: none;
    }

    @media (max-width: 800px) {
      display: flex;
      height: 300px;

      .head, .eyes {
        padding: 60px; 
      }

    }

`;

const Logo: React.FunctionComponent<Props> = () => (
  <StyledLogo>
    <img className="eyes" src="/animations/logo_eyes.svg" alt="eyes" />
    <img className="head" src="/animations/logo_head.svg" alt="head" />
  </StyledLogo>

);

export default Logo;
