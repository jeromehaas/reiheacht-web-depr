import React from 'react';
import styled from 'styled-components';
import { HL } from '@/components/text/Text';

const StyledCarousel = styled.span`
  color: ${(p) => p.theme.blue};
  display: inline-block;
  position: relative;
  height:  1em;
  width: 660px;
  overflow: hidden;
  vertical-align: middle;

  @media (max-width: 900px) { width: 590px; }
  @media (max-width: 750px) { width: 520px; }
  @media (max-width: 670px) { width: 420px; }
  @media (max-width: 550px) { width: 350px; }
  @media (max-width: 470px) { width: 300px; }
  @media (max-width: 415px) { width: 250px; }

`;

const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: -5px;
  animation: 1.5s ease-in-out 1.5s 1 forwards carousel;
  font-family: 'Helvetica Neue 85 Heavy';

  @keyframes carousel {
      0% {top: -5px;}
      40% {top: -100px;}
      60% {top: -100px;}
      100% {top: -195px;}
    }

  @media (max-width: 900px) {
    @keyframes carousel {
    0% {top: -5px;}
    40% {top: -85px;}
    60% {top: -85px;}
    100% {top: -165px;}
    }
  }

  @media (max-width: 750px) {
    @keyframes carousel {
    0% {top: -5px;}
    40% {top: -72px;}
    60% {top: -72px;}
    100% {top: -143px;}
    }
  }

  @media (max-width: 670px) {
    @keyframes carousel {
    0% {top: -5px;}
    40% {top: -65px;}
    60% {top: -65px;}
    100% {top: -125px;}
    }
  }

  @media (max-width: 550px) {
    top: -2px;
    @keyframes carousel {
    0% {top: -2px;}
    40% {top: -57px;}
    60% {top: -57px;}
    100% {top: -111px;}
    }
  }

  @media (max-width: 470px) {
    top: -2px;
    @keyframes carousel {
    0% {top: -2px;}
    40% {top: -51px;}
    60% {top: -51px;}
    100% {top: -100px;}
    }
  }

  @media (max-width: 415px) {
    top: -1px;
    @keyframes carousel {
    0% {top: -1px;}
    40% {top: -45px;}
    60% {top: -45px;}
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

interface Props {
  items: string[];
}

const Carousel: React.FunctionComponent<Props> = ({ items }) => (
  <StyledCarousel>
    <CarouselWrapper>
      {items.map((item) => (
        <CarouselItem key={item}>
          {item}
          <HL color="white">.</HL>
        </CarouselItem>
      ))}
    </CarouselWrapper>
  </StyledCarousel>
);

export default Carousel;
