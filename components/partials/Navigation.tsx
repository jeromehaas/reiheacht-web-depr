import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Lottie } from '@crello/react-lottie';
import { Link as Anchor } from 'react-scroll';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { toggleMobileNavigation, updateCurrentPosition } from 'redux/actions';
import { H2 } from '@/components/text/Text';
import Reveal, { Fade } from 'react-awesome-reveal';

import cx from 'classnames';
import Linker from '@/components/buttons/Link';
import hamburger from '../../public/animations/hamburger.json';
import Limiter from '../layout/Limiter';

const DesktopNavigation = styled.nav`
  position: relative; 
  height: 60px;
  
  .bar {    
    width: 100%;
    background-color: ${(p) => p.theme.darkGrey};
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
    margin: unset;
    float: right;
  }

  .link {
    margin-right: 50px;
    color: ${(p) => p.theme.white};
    text-decoration: none;
  }

  @media (max-width: 850px) {
    display: none;
  }
  
`;

const MobileNavigation = styled.nav`
  display: none;
  height: 75px;

  .bar {
    width: 100%;
    background-color: ${(p) => p.theme.darkGrey};
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
    position: fixed;
    top: -75px;
    height: 75px;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: white !important;
    animation-name: moveDown;
    animation-duration: 0.7s;
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
    margin: 0 !important;
  }

  .linkWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: -100vh;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-color: ${(p) => p.theme.darkGrey};
    align-items: center;
    z-index: 5;
    padding-top: 75px;
    transition: all 1s ease-in-out;
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);

  .link {
    color: inherited;
    margin: 10px;
    padding: 5px;
    font-size: 30px;
    display: inline-block;

    @media (max-height: 700px) {
      margin: 5px;
      padding: 5px;
      font-size: 20px;
    }

    @media (max-height: 450px) {
      margin: 5px;
      padding: 5px;
      font-size: 15px;
    }

  }
    
  &.active {
    top: 0vh;
    overflow: scroll;
    color: blue;
  }

}



  @media (max-width: 850px) {
    display: block;
  }
`;

const navigationItems = [
  {
    child: 'Home',
    link: 'home',
    section: 'home',
    type: 'anchor',
  },
  {
    child: 'Leistungen',
    link: 'services',
    section: 'services',
    type: 'anchor',
  },
  {
    child: 'Projekte',
    link: 'projects',
    section: 'projects',
    type: 'anchor',
  },
  {
    child: 'Agentur',
    link: 'employees',
    section: 'employees',
    type: 'anchor',
  },
  {
    child: 'Kontakt',
    link: 'contact',
    section: 'contact',
    type: 'anchor',
  },
  // {
  //   child: 'Blog',
  //   link: '/blog/overview',
  //   section: 'blog',
  //   type: 'link',
  // },
];

interface Props { }

const Navigation: React.FunctionComponent<Props> = () => {
  const dispatch = useDispatch();
  const mobileMenuIsVisible = useSelector((state: RootStateOrAny) => state.navigation.mobile.isVisible);
  const currentPosition = useSelector((state: RootStateOrAny) => state.currentPosition);

  return (
    <>
      <DesktopNavigation>
        <div className="bar">
          <Limiter>
            <div className="container">
              <div className="linkWrapper">
                {navigationItems.map((item, index) => (
                  <Linker
                    key={index}
                    delay={0}
                    type={item.type}
                    target={item.link}
                    className={currentPosition === item.section ? 'current' : null}
                    onClickFunction={() => dispatch(updateCurrentPosition(item.section))}
                  >
                    {item.child}
                  </Linker>
                ))}
              </div>
              <Linker type="anchor" target="home" delay={0}>
                <img className="logo" src="/logos/logo-white.svg" alt="reiheacht" />
              </Linker>
            </div>
          </Limiter>
        </div>
      </DesktopNavigation>
      <MobileNavigation>
        <div className="bar">
          <Limiter>
            <div className="container">
              <Anchor to="home" spy smooth duration={1000}>
                <img className="logo" src="/logos/logo-white.svg" alt="reiheacht" />
              </Anchor>
              <div onClick={() => dispatch(toggleMobileNavigation(mobileMenuIsVisible))}>
                <Lottie
                  config={{ animationData: hamburger, autoplay: false }}
                  playingState="playing"
                  speed={1}
                  width="40px"
                  height="40px"
                  style={{ margin: 0 }}
                  direction={mobileMenuIsVisible === true ? 1 : -1}
                />
              </div>
            </div>
          </Limiter>
        </div>
        <div className={cx('linkWrapper', mobileMenuIsVisible === true ? 'active' : '')}>
          <Fade cascade damping={0.2}>
            {navigationItems.map((item, index) => (

              <Linker
                key={index}
                type={item.type}
                target={item.link}
                delay={1000}
                className={currentPosition === item.section ? 'current' : null}
                onClickFunction={() => dispatch(toggleMobileNavigation(mobileMenuIsVisible))}
              >
                <span className="link">{item.child}</span>
              </Linker>
            ))}
          </Fade>
        </div>

      </MobileNavigation>
    </>
  );
};

export default Navigation;
