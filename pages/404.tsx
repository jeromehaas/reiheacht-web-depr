import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import styled from 'styled-components';
import { H1, HL } from '@/components/text/Text';
import Button from '@/components/buttons/Button';
import Spacer from '@/components/layout/Spacer';
import { Lottie } from '@crello/react-lottie';
import astronaut from '../public/animations/astronaut.json';

const StyledPageNotFound = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background-image: url('/illustrations/page-not-found/space-background.svg') !important; 
  background-repeat: repeat;
  background-size: 1000px;
  position: relative;

  .message {
    position: absolute;
    top: 40px;
    left: 40px;
    margin-bottom: 20px;
  }

  .moon {
     position: absolute;
     bottom: 0;
     display: block;
  }

  .astronaut {
    width: 100px;
    transition: linear;
    animation: flyOver  15s  infinite forwards;
    animation-timing-function: linear;
  }



  @keyframes flyOver {
    0% {left: -200px; top: 50%;transform: rotate(0deg) }
    100% {left: 100%; top: 60%; transform: rotate(360deg) }
  }

  .fourZeroFour {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    max-width: 800px;
    padding: 30px;


    .wrapper {
      position: relative;
      display: block;
      width: 100%;
      height: 400px;

      .world {
        position: absolute;
        top: 50%;
        left: 50%;
        display: block;
        width: 40%;
        transform: translate(-50%, -50%);

      }

      .text {
        position: absolute;
        display: block;
        top: 50%;
        left: 50%;
        width: 100%;
        transform: translate(-50%, -50%);
      }

    }

  }



  .astronaut {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

  }
`;

interface Props { }

const PageNotFound: React.FunctionComponent<Props> = () => (
  <>
    <StyledPageNotFound>
      <img className="moon" src="/illustrations/page-not-found/moon.svg" alt="Mond" />
      <div className="fourZeroFour">
        <div className="wrapper">
          <img
            className="world"
            src="/illustrations/page-not-found/world.png
          "
            alt="World"
          />
          <img className="text" src="/illustrations/page-not-found/404.svg" alt="404" />
        </div>
      </div>
      {/* <Lottie
        config={{ animationData: astronaut, loop: true, autoplay: true }}
        playingState="playing"
        speed={2}
        width="100vw"
        direction={1}
      /> */}

      <img className="astronaut" src="/illustrations/page-not-found/astronaut.png" alt="Astronaut" />
      <div className="message">
        <H1>Oops, hier gehörst<br /> du nicht hin<HL color="blue">.</HL></H1>
        <Spacer marginBottom="20px" />
        <Button target="/" type="link" text="Bring mich zurück!" />
      </div>
    </StyledPageNotFound>
  </>
);

export default PageNotFound;
