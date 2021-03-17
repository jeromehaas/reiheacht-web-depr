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

const Home = () => (
  <div>
    <PageWrapper>
      <Navigation />
      <Start />
      <Services />
      <Projects />
      <Employees />
      <Contact />
      <Footer />
      <CookieBanner />
    </PageWrapper>
  </div>
);

export default Home;
