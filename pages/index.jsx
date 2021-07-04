import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import Navigation from '@/components/partials/Navigation';
import Start from '@/components/sections/Start';
import Services from '@/components/sections/Services';
import Projects from '@/components/sections/Projects';
import Employees from '@/components/sections/Employees';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/partials/Footer';
import CookieBanner from '@/components/partials/CookieBanner';
import IntroAnimation from '@/components/animations/IntroAnimation';
import Showreel from '@/components/partials/Showreel';
import Head from '@/components/partials/Head';

const Home = () => (
  <div>
    <PageWrapper>
      <Head title="Motion Design & Werbefilm Agentur aus Luzern" description="Wir sind reiheacht. Wir erwecken deine Botschaft mit kreativen Motion Design- und Filmlösungen zum Leben." />
      <Navigation />
      <Start />
      <Services />
      <Projects />
      <Employees />
      <Contact />
      <Footer />
      <CookieBanner />
      <Showreel />
    </PageWrapper>
  </div>
);

export default Home;
