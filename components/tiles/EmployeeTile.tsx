import React from 'react';
import styled from 'styled-components';
import { H3 } from '@/components/text/Titles';
import Linker from '@/components/buttons/Link';

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
    background-color: white !important;
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
    padding: 15px;
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

      h4 { 
        margin-bottom: 10px; 
      }
     
      p { 
        margin: 0px;
        font-size: 14px;
      }
     
      h4, li, p  {
        line-height: 1;
      }
    
    }
    
    .icon-wrapper {
      img {
        width: 35px;

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

const EmployeeTile: React.FunctionComponent<Props> = ({ content }) => (
  <StyledEmployeeTile>

    <div className="background-animation" />

    <div className="initial">
      <img src={content.image} alt={content.alt} />
    </div>

    <div className="overlay" style={{ backgroundColor: content.overlayColor }}>
      <div className="text-wrapper">
        {content.title}
        {content.description}
      </div>
      <div className="icon-wrapper">
        <a href={`mailto:${content.email}`}>
          <img src="/icons/other/email.svg" alt="Email" />
        </a>
      </div>
    </div>

  </StyledEmployeeTile>
);

export default EmployeeTile;
