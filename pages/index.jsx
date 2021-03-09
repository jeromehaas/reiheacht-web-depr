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
      <Head>
        <title>reiheacht - Hier begintn die Zusammenarbeit.</title>
        <meta name="description" content="Animation | Storytelling| Design | Illustration | Web | Werbefilm" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/fonts/helvetica-neue/HelveticaNeueLTStd-Roman.woff2" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/helvetica-neue/HelveticaNeueLTStd-Roman.woff" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/helvetica-neue/HelveticaNeueLTStd-Roman.ttf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/helvetica-neue/HelveticaNeueLTStd-Roman.eot" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/helvetica-neue/HelveticaNeueLTStd-Md.woff2" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/helvetica-neue/HelveticaNeueLTStd-Md.woff" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/helvetica-neue/HelveticaNeueLTStd-Md.ttf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/helvetica-neue/HelveticaNeueLTStd-Md.eot" as="font" crossOrigin="" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#2775b7" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
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
