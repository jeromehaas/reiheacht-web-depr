import React from 'react';
import styled from 'styled-components';
import logoLookLeft from '@/public/animations/logo-look-left.json';
import logoLookUp from '@/public/animations/logo-look-up.json';
import { Lottie } from '@crello/react-lottie';

const StyledLogo = styled.div`
  width: 100%;
  max-height: 400px;
  max-width: 400px;
  margin: 0 auto;

  .desktop {display: block}
  .mobile {display: none}

  @media (max-width: 1100px) {
    .desktop {display: none}
    .mobile {display: none};
  }

  @media (max-width: 800px) {
    margin: 100px auto 0 auto;
    .desktop {display: none}
    .mobile {display: block}
  }

`;

const Logo: React.FunctionComponent = () => (
  <StyledLogo>
    <div className="desktop">
      <Lottie
        config={{ animationData: logoLookLeft, autoplay: true, loop: true }}
        playingState="playing"
        speed={1}
        width="100%"
        height="100%"
        style={{ margin: 0, position: 'relative', left: '6px' }}
        direction={1}
      />
    </div>
    <div className="mobile">
      <Lottie
        config={{ animationData: logoLookUp, autoplay: true, loop: true }}
        playingState="playing"
        speed={1}
        width="100%"
        height="100%"
        style={{ margin: 0 }}
        direction={1}
      />
    </div>
  </StyledLogo>
);

export default Logo;
