import React from 'react';
import styled from 'styled-components';
import Limiter from '../layout/Limiter';
import Link from 'next/link';
import Lottie from 'react-lottie';
import * as animationData from '../../public/animations/hamburger.json';


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
    text: 'Home',
    link: '#'
  },
  {
    text: 'Leistungen',
    link: '#'
  },
  {
    text: 'Projekte',
    link: '#'
  },
  {
    text: 'Agentur',
    link: '#'
  },
  {
    text: 'Kontakt',
    link: '#'
  },
  {
    text: 'Blog',
    link: '#'
  },
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
                {navigationItems.map((item, index) => (
                  <a className={'link'} key={index}>{item.text}</a>
                ))}
              </div>
              <Link href={'#'}>
                <a>
                  <img className={'logo'} src="/logos/logo_white.svg" alt="reiheacht" />
                </a>
              </Link>
            </div>
          </Limiter>
        </div>
      </DesktopNavigation>
      <MobileNavigation>
        <div className="bar">
          <Limiter>
            <div className="container">
              <Link href={'#'}>
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
          {navigationItems.map((item, index) => (
            <a className={'link'} key={index}>{item.text}</a>
          ))}
        </div>
      </MobileNavigation>
    </>
  );

}

export default Navigation;