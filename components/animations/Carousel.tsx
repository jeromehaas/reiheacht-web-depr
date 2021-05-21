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
  @media (max-width: 760px) { width: 520px; }
  @media (max-width: 670px) { width: 420px; }
  @media (max-width: 560px) { width: 350px; }
  @media (max-width: 480px) { width: 300px; }
  @media (max-width: 425px) { width: 260px; }
  @media (max-width: 370px) { width: 230px; }

`;

const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: -5px;
  animation: 1.5s ease-in-out 5s 1 forwards carousel;
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

  @media (max-width: 760px) {
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

  @media (max-width: 560px) {
    top: -2px;
    @keyframes carousel {
    0% {top: -2px;}
    40% {top: -57px;}
    60% {top: -57px;}
    100% {top: -111px;}
    }
  }

  @media (max-width: 480px) {
    top: -2px;
    @keyframes carousel {
    0% {top: -2px;}
    40% {top: -51px;}
    60% {top: -51px;}
    100% {top: -102px;}
    }
  }

  @media (max-width: 425px) {
    top: -1px;
    @keyframes carousel {
    0% {top: -1px;}
    40% {top: -45px;}
    60% {top: -45px;}
    100% {top: -90px;}
    }
  }

 @media (max-width: 365px) {
    top: -1px;
    @keyframes carousel {
    0% {top: -1px;}
    40% {top: -43px;}
    60% {top: -43px;}
    100% {top: -85px;}
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
