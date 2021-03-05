import React, { Fragment } from 'react';
import styled from 'styled-components';
import Limiter from '../layout/Limiter';
import Link from 'next/link';
import Lottie from 'react-lottie';
import * as animationData from '../../public/animations/hamburger.json';
import { Link as Anchor } from 'react-scroll'



const DesktopNavigation = styled.nav`
  position: relative; 
  height: 60px;
  margin-bottom: 150px;
  
  .bar {    
    width: 100%;
    background-color: ${p => p.theme.darkGrey};
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
    position: fixed;
    top: -60px;
    height: 60px;
    z-index: 15;
    color: white !important;
    animation-name: moveDown;
    animation-duration: 1s;  
    animation-delay: 0.2s;
    animation-direction: forwards;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
   
    @keyframes moveDown {
      from {top: -60px;}
      to {top: 0px;}
    }

   }

  .container {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    width: 125px !important;
  }

  .link {
    margin-right: 30px;
    color: ${p => p.theme.white};
  }

  @media (max-width: 1000px) {
    display: none;
  }
  
`;

const MobileNavigation = styled.nav`
  display: none;
  height: 75px;
  margin-bottom: 150px;

  .bar {
    width: 100%;
    background-color: ${p => p.theme.darkGrey};
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
    position: fixed;
    top: -75px;
    height: 75px;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: white !important;
    animation-name: moveDown;
    animation-duration: 1s;  
    animation-delay: 0.2s;
    animation-direction: forwards;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
    z-index: 15;

    @keyframes moveDown {
      from {top: -60px;}
      to {top: 0px;}
    }

  }

  .container {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    height:30px !important;
  }

  .linkWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: -100vh;
    width: 100%;
    height: 0vh;
    overflow: hidden;
    background-color: ${p => p.theme.darkGrey};
    align-items: center;
    z-index: 5;
    padding-top: 75px;
  }

  .link {
    padding: 20px 0;
    color: ${p => p.theme.white};
  }


  @media (max-width: 1000px) {
    display: block;
  }
`;


const navigationItems = [
  {
    text: 'Start',
    link: 'start'
  },
  {
    text: 'Leistungen',
    link: 'services'
  },
  {
    text: 'Projekte',
    link: 'projects'
  },
  {
    text: 'Agentur',
    link: 'employees'
  },
  {
    text: 'Kontakt',
    link: 'contact'
  }
]

const defaultOptions = {
  loop: false,
  autoplay: false,
  animationData: animationData.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

interface Props { }

const Navigation: React.FunctionComponent<Props> = () => {

  return (
    <>
      <DesktopNavigation>
        <div className='bar'>
          <Limiter>
            <div className="container">
              <div className="linkWrapper">
                <Anchor className={'link'} to={'start'} spy={true} smooth={true} duration={500}>Start</Anchor>
                <Anchor className={'link'} to={'services'} spy={true} smooth={true} duration={500}>Leistungen</Anchor>
                <Anchor className={'link'} to={'projects'} spy={true} smooth={true} duration={500}>Projekte</Anchor>
                <Anchor className={'link'} to={'employees'} spy={true} smooth={true} duration={500}>Agentur</Anchor>
                <Anchor className={'link'} to={'contact'} spy={true} smooth={true} duration={500}>Kontakt</Anchor>
                <Link href="/blog"><a className={'link'}>Blog</a></Link>
              </div>
              <Anchor className={'link'} to={'start'} spy={true} smooth={true} duration={500}>
                <img className={'logo'} src="/logos/logo_white.svg" alt="reiheacht" />
              </Anchor>
            </div>
          </Limiter>
        </div>
      </DesktopNavigation>
      <MobileNavigation>
        <div className="bar">
          <Limiter>
            <div className="container">
              <Link href={'#start'}>
                <a>
                  <img className={'logo'} src="/logos/logo_white.svg" alt="reiheacht" />
                </a>
              </Link>
              <Lottie
                options={defaultOptions}
                width={50}
                height={50}
                style={{ margin: 0 }} isStopped={false} isPaused={false}
                direction={1}
              />
            </div>
          </Limiter>
        </div>
        <div className="linkWrapper">
          <Anchor className={'link'} to={'start'} spy={true} smooth={true} duration={500}>Start</Anchor>
          <Anchor className={'link'} to={'services'} spy={true} smooth={true} duration={500}>Leistungen</Anchor>
          <Anchor className={'link'} to={'projects'} spy={true} smooth={true} duration={500}>Projekte</Anchor>
          <Anchor className={'link'} to={'employees'} spy={true} smooth={true} duration={500}>Agentur</Anchor>
          <Anchor className={'link'} to={'contact'} spy={true} smooth={true} duration={500}>Kontakt</Anchor>
          <Link href="/blog"><a className={'link'}>Blog</a></Link>
        </div>
      </MobileNavigation>
    </>
  );

}

export default Navigation;