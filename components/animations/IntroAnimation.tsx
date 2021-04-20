import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Lottie } from '@crello/react-lottie';
import cx from 'classnames';
import intro from '../../public/animations/intro.json';

const StyledIntroAnimation = styled.div`

.wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  background-color: ${(p) => p.theme.darkGrey};
  opacity: 1;
  height: 100vh;

  &.active {
    animation: introDisappear  1s 1 forwards 0.5s;

    @keyframes introDisappear {
      0% { opacity: 1; height: 100vh;}
      99% { opacity: 0; height: 100vh;}
      100% {display: none !important; z-index: -10;}
    }

  }

  .innerWrapper {
    width: 100%;
    height: 100%;
    position: absolute;
  }

  svg {
    width: 100%;
    padding: 30px;
    max-width: 600px;
    margin: 0 auto;
  }

}
`;

interface Props { }

const IntroAnimation: React.FunctionComponent<Props> = () => {

  const [animationPlayed, setAnimationPlayed] = useState(false);

  return (

    <>
      <StyledIntroAnimation>
        <div className={cx('wrapper', animationPlayed === true ? 'active' : null)}>
          <div className="innerWrapper">
            <Lottie
              config={{ animationData: intro, loop: false, autoplay: true }}
              playingState="playing"
              speed={1}
              width="100vw"
              direction={1}
              style={{ display: 'flex', justifyContent: 'center' }}
              lottieEventListeners={[
                { callback: () => setAnimationPlayed(true), name: 'complete' },
              ]}
            />
          </div>
        </div>
      </StyledIntroAnimation>
    </>
  );
};

export default IntroAnimation;
