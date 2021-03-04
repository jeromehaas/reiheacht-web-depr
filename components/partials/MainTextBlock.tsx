import React, { Fragment } from 'react';
import H1 from '../text/H1'
import H2 from '../text/H2'
import Highlight from '../text/Highlight'
import HorizontalLine from '../shapes/HorizontalLine';
import Paragraph from '../text/Paragraph'
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  top: -60px;
  opacity: 0;
  z-index: 10; 
  animation: 1s ease-in-out 0.2s 1 forwards moveDown;

  @keyframes moveDown {
      from {top: -60px; opacity: 0;}
      to {top: 0px; opacity: 1;}
    }

`;

const Carousel = styled.span`
  color: ${p => p.theme.blue};
  display: inline-block;
  position: relative;
  height:  calc(95px);
  margin-left: 20px;
  width: 610px;
  overflow: hidden;
  vertical-align: middle;
`;

const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0px;
  animation: 2s ease-in-out 1s 1 forwards carousel;

  @keyframes carousel {
      0% {top: -0px;}
      35% {top: -86px;}
      65% {top: -86px;}
      100% {top: -175px;}
    }
`;

const CarouselItem = styled.span`
  display: block;
`;

const Dot = styled.span`
  color: ${p => p.theme.white}
`;

const carouselItems = [
  'Magie',
  'Idee',
  'Zusammenarbeit',
];

interface Props { }

const MainTextBlock: React.FunctionComponent<Props> = () => {


  return (
    <Wrapper>
      <H1>Hier beginnt <br /> die
        <Carousel>
          <CarouselWrapper>
            {carouselItems.map((item, index) => (
              <CarouselItem key={index}>{item}<Dot>.</Dot></CarouselItem>
            ))}
          </CarouselWrapper>
        </Carousel>
      </H1>
      <HorizontalLine />
      <Paragraph>reiheacht ist eine digitale Kreativagentur, die mit Innovation und Zusammenarbeit einzigartige Lösungen anbietet, damit du deine Marke da stärken kannst, wo du deine Kunden am besten erreichst. <br />
      Wir bewegen alles und jeden – setz dich in die reiheacht.</Paragraph>
    </Wrapper>
  );

}

export default MainTextBlock;