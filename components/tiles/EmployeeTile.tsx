import React, { useState } from 'react';
import styled from 'styled-components';
import { H4, P } from '@/components/text/Text';
import { Lottie } from '@crello/react-lottie';
import employeeAnimationBlue from '../../public/animations/employee-blue.json';
import employeeAnimationOrange from '../../public/animations/employee-orange.json';

const StyledEmployeeTile = styled.div`
  height: 100%;
  width: calc(100% / 3);
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
    background-color:${(p) => p.color};
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
    background-color:${(p) => p.theme.white};

    @media (max-width: 1050px) {
     height: 60px;
  }
 

    .text-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      margin-right: 15px;

      h4 { 
        margin-bottom: 5px;
      }

     
      h4, li, p  {
        line-height: 1;
      }
    
    }
    
    .icon-wrapper {
      img {
        width: 30px;

        @media (max-width: 300px) {
          display: none;
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
      color={content.overlayColor}
    >

      <div
        className="background-animation"

      />
      <Lottie
        config={{ animationData: content.animationColor === 'blue' ? employeeAnimationBlue : employeeAnimationOrange, autoplay: false }}
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

      <div className="overlay">
        <div className="text-wrapper">
          <H4 color="darkGrey">{content.title}</H4>
          <P color="darkGrey" size="small">{content.description}</P>
        </div>
        <div className="icon-wrapper">
          <a href={`mailto:${content.email}`}>
            <img src="/icon/other/email.svg" alt="E-Mail Icon" />
          </a>
        </div>
      </div>

    </StyledEmployeeTile>
  );

};
export default EmployeeTile;
