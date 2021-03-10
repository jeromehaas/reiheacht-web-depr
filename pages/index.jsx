import React, { useState, Fragment } from 'react';
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
import Spacer from '@/components/layout/Spacer';
import introAnimation from '../public/animations/intro.json';

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

const Home = () => {
  const [animationPlayed, setAnimationPlayed] = useLocalStorage('true', 'animationWasPlayed');

  return (
    <div>

      <PageWrapper>

        {animationPlayed !== true ? (
          <Lottie
            config={{ animationData: introAnimation, loop: false, autoplay: true }}
            playingState="playing"
            speed={1}
            width="100%"
            height="100vh"
            direction={1}
            lottieEventListeners={[
              { callback: () => setAnimationPlayed(true), name: 'complete' },
            ]}
          />
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
