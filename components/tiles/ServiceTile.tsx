import React from 'react';
import styled from 'styled-components';
import { H3, P } from '@/components/text/Text';
import Reveal, { Slide } from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';
import ListItem from '@/components/text/ListItem';

const moveUp = keyframes`
  from {top: 40px;  position: relative;}
  to {top: 5px; position: relative;}
`;

const StyledServiceTile = styled.div`
  width: calc(100% / 3);
  height: 100%;
  overflow: hidden;
  position: relative;

  .initial {
    width: 100%;
    height: 100%;
    display: block;
    /* position: relative; */

    img {
      width: 100%;
      height: 100%;
      display: inline-block;
      object-fit: cover;
    }

  }

  &:hover {

    .overlay {
      bottom: 0;
      height: 100%;
    }

    .textWrapper {
      height: 100%;
      margin-top: -20px;

    .listItems {
        max-height: unset;
        opacity: 1;
      }

    }

  }

  @media (max-width: 850px) {
    width: calc(100% / 2);
  }

  @media (max-width: 550px) {
    width: calc(100% / 1);
    margin-top: 30px;
  }



  .overlay {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0; 
    width: 100%;
    height: 80px;
    transition: all 0.7s ease
  }


    .textWrapper {
      width: 100%;
      height: 80px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      transition: all 0.7s ease;

      .title {
        height: 80px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 15px;
      }

      .listItems {
        padding: 0 15px;
        height: 0px;
        transition: all 0.7s ease;
        opacity: 0;

      }

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
    <div className="overlay" style={{ backgroundColor: content.overlayColor }}>
      <div className="textWrapper">

        <div className="title">
          <H3>{content.title}</H3>
        </div>

        <div className="listItems">
          <ul>
            <Reveal keyframes={moveUp} duration={700} damping={2} fraction={0}>
              {content.description.map((item, index) => (
                <ListItem key={index}>
                  {item}
                </ListItem>
              ))}
            </Reveal>
          </ul>
        </div>

      </div>
    </div>

  </StyledServiceTile>
);

export default ServiceTile;
