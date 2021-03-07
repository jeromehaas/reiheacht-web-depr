import React from 'react';
import styled from 'styled-components';
import { useInView, InView } from 'react-intersection-observer';
import { useSelector, useDispatch } from 'react-redux'

const StyledCarousel = styled.span`
  color: ${p => p.theme.blue};
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
  top: -5px;

  &.active {
  animation: 2s ease-in-out 2s 1 forwards carousel;
  }

  @keyframes carousel {
      0% {top: -5px;}
      35% {top: -100px;}
      65% {top: -100px;}
      100% {top: -195px;}
    }

    @media (max-width: 800px) {
      @keyframes carousel {
      0% {top: -5px;}
      35% {top: -85px;}
      65% {top: -85px;}
      100% {top: -165px;}
      }
    }
    
    @media (max-width: 700px) {
      @keyframes carousel {
      0% {top: -5px;}
      35% {top: -75px;}
      65% {top: -75px;}
      100% {top: -145px;}
      }
    }

    @media (max-width: 500px) {
      @keyframes carousel {
      0% {top: -5px;}
      35% {top: -65px;}
      65% {top: -65px;}
      100% {top: -125px;}
    }
    }

    @media (max-width: 400px) {
      @keyframes carousel {
      0% {top: -5px;}
      35% {top: -55px;}
      65% {top: -55px;}
      100% {top: -105px;}
    }
    }

`;

const CarouselItem = styled.span`
  display: block;
  line-height: 1;
  margin-bottom: 20px;
`;

const Dot = styled.span`
  color: ${p => p.theme.white}
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

const Carousel: React.FunctionComponent<Props> = ({ className, items }) => {

  const [ref, inView, entry] = useInView();
  const dispatch = useDispatch();
  const isVisible = useSelector((state) => state.textBlocks.start.visible);

  return (
    <StyledCarousel className={isVisible ? 'active' : ''}>
      <CarouselWrapper className={isVisible ? 'active' : ''}>
        {items.map((item, index) => (
          <CarouselItem key={index}>{item}<Dot>.</Dot></CarouselItem>
        ))}
      </CarouselWrapper>
    </StyledCarousel>
  );

}

export default Carousel;