import React, { useState, useEffect, Fragment } from 'react';
import Head from 'next/head';
import PageWrapper from '@/components/layout/PageWrapper';
import Navigation from '@/components/partials/Navigation';
import Start from '@/components/sections/Start';
import Services from '@/components/sections/Services';
import Projects from '@/components/sections/Projects';
import Employees from '@/components/sections/Employees';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/partials/Footer';
import Paragraph from '@/components/text/Paragraph';
import Button from '@/components/buttons/Button';
import { Lottie } from '@crello/react-lottie';
import Video from '@/components/partials/Video';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import Player from '@vimeo/player';
import $ from 'jquery';
import introAnimation from '../public/animations/intro.json';

const player = new Player('handstick', {
  id: 19231868,
  width: 640,
});

function useLocalStorage(defaultValue, key) {
  const [value, setValue] = useState(defaultValue);

  React.useEffect(() => {
    const localStorageValue = window.localStorage.getItem(key);
    if (localStorageValue !== null) {
      setValue(JSON.parse(localStorageValue));
    }
  }, [key]);

  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

const PlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const Home = () => {
  const [animationPlayed, setAnimationPlayed] = useLocalStorage('true', 'animationWasPlayed');
  const [videoStatus, setVideoStatus] = useState(false);
  return (
    <div>

      <PageWrapper>

        {animationPlayed !== true ? (
          <iframe src="https://player.vimeo.com/video/520902562?api=1&amp;background=1&amp;mute=0&amp;loop=0&amp;autoplay=1" frameBorder="0" id="video" title="Die Antwort Intro Showreel" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen="allowfullscreen" className="video visible" data-ready="true" />
        ) : (
          <>
            <Navigation />
            <Start />
            <Services />
            <Projects />
            <Employees />
            <Contact />
            <Footer />
          </>

        )}
      </PageWrapper>
    </div>
  );
};

export default Home;
