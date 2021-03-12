import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const StyledCarousel = styled.span`
  color: ${(p) => p.theme.blue};
  display: inline-block;
  position: relative;
  height:  1em;
  width: calc(100% - 130px);
  overflow: hidden;
  vertical-align: middle;

  @media (max-width: 800px) {
    width: calc(100% - 115px);;
  }

  @media (max-width: 600px) {
    width: calc(100% - 0px);
  }

`;

const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 5px;
  animation: 2s ease-in-out 2s 1 forwards carousel;
  font-family: 'Helvetica Neue 85 Heavy';


  @keyframes carousel {
      0% {top: 5px;}
      35% {top: -90px;}
      65% {top: -90px;}
      100% {top: -185px;}
    }

    @media (max-width: 800px) {
      @keyframes carousel {
      0% {top: 5px;}
      35% {top: -75px;}
      65% {top: -75px;}
      100% {top: -155px;}
      }
    }
    
    @media (max-width: 700px) {
      @keyframes carousel {
      0% {top: 5px;}
      35% {top: -65px;}
      65% {top: -65px;}
      100% {top: -135px;}
      }
    }

    @media (max-width: 500px) {
      @keyframes carousel {
      0% {top: 5px;}
      35% {top: -55px;}
      65% {top: -55px;}
      100% {top: -115px;}
    }
    }

    @media (max-width: 400px) {
      @keyframes carousel {
      0% {top: 5px;}
      35% {top: -45px;}
      65% {top: -45px;}
      100% {top: -95px;}
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
