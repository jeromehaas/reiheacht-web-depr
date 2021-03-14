import React, { useState } from 'react';
import styled from 'styled-components';
import { H3, H4, P } from '@/components/text/Text';
import Linker from '@/components/buttons/Link';
import { Lottie } from '@crello/react-lottie';
import employeeAnimation from '../../public/animations/employee.json';

const StyledEmployeeTile = styled.div`
  width: calc(100% / 3);
  height: 100%;
  overflow: hidden;
  position: relative;
  

  @media (max-width: 850px) {
    width: calc(100% / 2);
  }

  @media (max-width: 550px) {
    width: calc(100% / 1);
    margin-top: 30px;
  }

  .initial {
    width: 100%;
    height: 100%;
    display: block;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      display: inline-block;
      object-fit: cover;
    }
  }

  .background-animation {
    background-color: white;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;


  }  

  .overlay {
    position: absolute;
    bottom: 0px;
    right: 0;
    left: 0; 
    width: 100%;
    height: 80px;
    padding: 15px 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    transition: ${(p) => p.theme.standardTransition};

    @media (max-width: 350px) {
      height: 110px;
      flex-direction: column;
      justify-content: flex-start;
      align-items:flex-start
    } 

    .text-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      margin-right: 15px;

      h4 { 
        margin-bottom: 10px; 
      }
     
      /* p {
        margin: 0px;
        font-size: 14px;
      } */
     
      h4, li, p  {
        line-height: 1;
      }
    
    }
    
    .icon-wrapper {
      img {
        width: 25px;


      @media (max-width: 350px) {
        margin-top: 10px;
        width: 20px;
      }

    } 

    }

  }

 
`;

interface Props {
  content: any
}

const EmployeeTile: React.FunctionComponent<Props> = ({ content }) => {
  const [animationState, setAnimationState] = useState('inactive');

  return (

    <StyledEmployeeTile
      onMouseEnter={() => setAnimationState('active')}
      onMouseLeave={() => setAnimationState('inactive')}
    >

      <div
        className="background-animation"

      />
      <Lottie
        config={{ animationData: employeeAnimation, autoplay: false }}
        playingState="playing"
        speed={1}
        width="100%"
        height="100%"
        style={{
          position: 'absolute', top: '0', left: '0', bottom: '0', right: '0',
        }}
        direction={animationState === 'active' ? 1 : -1}
      />

      <div className="initial">
        <img src={content.image} alt={content.alt} />
      </div>

      <div className="overlay" style={{ backgroundColor: content.overlayColor }}>
        <div className="text-wrapper">
          <H4>{content.title}</H4>
          <P size="small">{content.description}</P>
        </div>
        <div className="icon-wrapper">
          <a href={`mailto:${content.email}`}>
            <img src="/icons/other/email.svg" alt="E-Mail Icon" />
          </a>
        </div>
      </div>

    </StyledEmployeeTile>
  );
};
export default EmployeeTile;
