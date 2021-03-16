import React from 'react';
import styled from 'styled-components';
import { H3, P, ListItem } from '@/components/text/Text';
import Reveal, { Slide } from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';

const StyledServiceTile = styled.div`
  width: calc(100% / 3);
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;

  .initial {
    width: 100%;
    height: 100%;
    display: block;
  }

  img {
    width: 100%;
    height: 100%;
    display: inline-block;
    object-fit: cover;
  }

  .arrow {
    display: none;
    width: 20px;
    height: 20px;
    position: absolute;
    bottom: 20px;
    right: 30px;
    object-fit: contain;
    transition: all 0.7s ease-in-out;

  }

  .overlay {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0; 
    width: 100%;
    height: 80px;
    transition: all 0.7s ease-in-out;
  }

  .textWrapper {
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: all 0.7s ease-in-out;
  }

  .title {
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 15px 30px;
  }

  ${H3} {
    font-size: 30px;
    font-family: 'Helvetica Neue 75 Bold';
  }

  .listItems {
    padding: 0 30px;
    height: 0px;
    transition: all 0.7s ease-in;
    opacity: 0;
  }

  ${ListItem} {
    line-height: 1;
    top: 30px;
    opacity: 0;
    font-size: 25px;
    position: relative;
    transition: all 0.7s ease-in;
    &:nth-child(1) { transition-delay: 0.1s; }
    &:nth-child(2) { transition-delay: 0.2s; }
    &:nth-child(3) { transition-delay: 0.3s; }
    &:nth-child(4) { transition-delay: 0.4s; }
  }

  &:hover {

    .overlay {
      bottom: 0;
      height: 100%;
    }

    .textWrapper {
      height: 100%;
      margin-top: -17.5%;
    }

    .listItems {
      max-height: unset;
      opacity: 1;
    }

    ${ListItem} {
      top: 5px;
      opacity: 1
    }

    .arrow {
      transform: rotate(-180deg);
    }

}

  @media (max-width: 1000px) {
    ${H3} { font-size: 25px; };
    ${ListItem} { font-size: 20px;}
  }

  @media (max-width: 850px) {
    ${H3} { font-size: 30px; };
    ${ListItem} { font-size: 25px;}
    &:nth-child(3) { order: 4 }
    &:nth-child(6) { order: 5 }
  }

  @media (max-width: 700px) {
    ${H3} { font-size: 25px; };
    ${ListItem} { font-size: 20px;}
  }


  @media (max-width: 550px) {
    ${H3} { font-size: 30px; };
    ${ListItem} { font-size: 25px;}
    &:nth-child(3) { order: unset }
    &:nth-child(3) { order: unset }
    &:nth-child(6) { order: unset }
    .overlay { height: 60px; }
    .textWrapper { height: 60px;}
    .title { height: 60px; }
    .arrow { display: block; }

  }
 
  @media (max-width: 450px) {
    ${H3} { font-size: 25px; };
    ${ListItem} { font-size: 20px;}
  }

  @media (max-width: 370px) {
    ${H3} { font-size: 22px; };
    ${ListItem} { font-size: 17px;}
  }

`;

interface Props {
  content: any
}

const ServiceTile: React.FunctionComponent<Props> = ({ content }) => (
  <StyledServiceTile>
    <div className="initial">
      <img src={content.image} alt={content.alt} />
    </div>
    <div className="overlay" style={{ backgroundColor: content.overlayColor === 'orange' ? '#C23E27' : '#FFFFFF' }}>
      <div className="textWrapper">
        <div className="title">
          <H3 color={content.overlayColor === 'orange' ? 'white' : 'darkGrey'}>{content.title}</H3>
        </div>
        <div className="listItems">
          <ul>
            {content.description.map((item, index) => (
              <ListItem size="normal" key={index} color={content.overlayColor === 'orange' ? '#FFFFFF' : '#1C1C1C'}>
                {item}
              </ListItem>
            ))}
          </ul>
        </div>

      </div>
    </div>
    <img className="arrow" src={content.overlayColor === 'orange' ? '/icons/arrows/arrow-up-white.svg' : '/icons/arrows/arrow-up-darkgrey.svg'} alt="Pfeil" />
  </StyledServiceTile>
);

export default ServiceTile;
