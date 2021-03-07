import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import styled from 'styled-components';
import { H2 } from '@/components/text/Titles';
import Button from '@/components/buttons/Button';
import Spacer from '@/components/layout/Spacer';
import astronaut from '../public/animations/astronaut.json';
import { Lottie } from '@crello/react-lottie';
import Head from 'next/head';

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
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;


interface Props { }

const PageNotFound: React.FunctionComponent<Props> = () => {


  return (
    <StyledPageNotFound>
      <Head>
        <title>reiheacht Marketing</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/fonts/HelveticaNeue-Medium.ttf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/HelveticaNeue-Roman.ttf" as="font" crossOrigin="" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#2775b7" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <img className="moon" src="/illustrations/page-not-found/moon.svg" />
      <img src="/illustrations/page-not-found/world.gif" alt="" className="world" />
      <Lottie
        config={{ animationData: astronaut, loop: true, autoplay: true }}
        playingState={'playing'}
        speed={1}
        width={'100%'}
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