import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const StyledCarousel = styled.span`
  color: ${(p) => p.theme.blue};
  display: inline-block;
  position: relative;
  height:  1em;
  width: 660px;
  overflow: hidden;
  vertical-align: middle;

  @media (max-width: 900px) {
    width: 530px;
  }

  @media (max-width: 720px) {
    width: 440px;
  }

  @media (max-width: 620px) {
    width: 355px;
  }

  @media (max-width: 525px) {
    width: 265px;
  }

  @media (max-width: 420px) {
    width: 220px;
  }



`;

const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: -5px;
  animation: 2s ease-in-out 2s 1 forwards carousel;
  font-family: 'Helvetica Neue 85 Heavy';


  @keyframes carousel {
      0% {top: -5px;}
      35% {top: -100px;}
      65% {top: -100px;}
      100% {top: -195px;}
    }

    @media (max-width: 900px) {
      @keyframes carousel {
      0% {top: -5px;}
      35% {top: -85px;}
      65% {top: -85px;}
      100% {top: -165px;}
      }
    }

    @media (max-width: 720px) {
      @keyframes carousel {
      0% {top: -5px;}
      35% {top: -72px;}
      65% {top: -72px;}
      100% {top: -143px;}
      }
    }

    @media (max-width: 620px) {
      @keyframes carousel {
      0% {top: -5px;}
      35% {top: -65px;}
      65% {top: -65px;}
      100% {top: -125px;}
    }
    }

    @media (max-width: 525px) {
      top: -2px;
      @keyframes carousel {
      0% {top: -2px;}
      35% {top: -52px;}
      65% {top: -52px;}
      100% {top: -102px;}
      }
    }

    @media (max-width: 420px) {
      top: 0px;
      @keyframes carousel {
      0% {top: 0px;}
      35% {top: -45px;}
      65% {top: -45px;}
      100% {top: -90px;}
      }
    }

`;

const CarouselItem = styled.span`
  display: block;
  line-height: 1;
  margin-bottom: 20px;
  font-family: 'Helvetica Neue 85 Heavy';
`;

const Dot = styled.span`
  color: ${(p) => p.theme.white}
`;

const carouselItems = [
  'Magie',
  'Idee',
  'Zusammenarbeit',
];

interface Props {
  className: String;
  items: String[];
}

const Carousel: React.FunctionComponent<Props> = () => (
  <StyledCarousel>
    <CarouselWrapper>
      {carouselItems.map((item) => (
        <CarouselItem key={item}>
          {item}
          <Dot>.</Dot>
        </CarouselItem>
      ))}
    </CarouselWrapper>
  </StyledCarousel>
);

export default Carousel;
