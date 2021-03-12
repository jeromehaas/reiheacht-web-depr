import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import styled from 'styled-components';
import { H2 } from '@/components/text/Titles';
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
        width: 50%;
        transform: translate(-50%, -50%);
        clip-path: circle(32%);
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
          <img className="world" src="/illustrations/page-not-found/world.gif" alt="World" />
          <img className="text" src="/illustrations/page-not-found/404.svg" alt="404" />
        </div>
      </div>
      <Lottie
        config={{ animationData: astronaut, loop: true, autoplay: true }}
        playingState="playing"
        speed={1}
        width="100%"
        direction={1}
      />
      <div className="message">
        <H2>
          Oops, hier gehörst
          <br />
          {' '}
          du nicht hin.
        </H2>
        <Spacer marginBottom="20px" />
        <Button target="/" type="link" text="Bring mich zurück!" />
      </div>
    </StyledPageNotFound>
  </>
);

export default PageNotFound;
