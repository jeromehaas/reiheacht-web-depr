import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import styled from 'styled-components';
import H2 from '@/components/text/H2';
import Button from '@/components/buttons/Button';
import Spacer from '@/components/layout/Spacer';
import astronaut from '../public/animations/astronaut.json';
import { Lottie } from '@crello/react-lottie';

const StyledPageNotFound = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background-image: url('/illustrations/page-not-found/space-background.svg') !important; 
  background-repeat: no-repeat;
  background-size: cover;
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

  .world {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    clip-path: circle(32%);
  }

  .astronaut {

  }
`;


interface Props { }

const PageNotFound: React.FunctionComponent<Props> = () => {


  return (
    <StyledPageNotFound>
      <img className="moon" src="/illustrations/page-not-found/moon.svg" />
      <img src="/illustrations/page-not-found/world.gif" alt="" className="world" />
      <Lottie
        config={{ animationData: astronaut, loop: true, autoplay: true }}
        playingState={'playing'}
        speed={1}
        width={'100%'}
        height={'auto'}
        direction={1}
      />
      <div className="message">
        <H2>Oops, hier gehörst <br /> du nicht hin.</H2>
        <Spacer marginBottom="20px" />
        <Button link="/" content="Bring mich zurück!" />
      </div>
    </StyledPageNotFound>
  );

}

export default PageNotFound;