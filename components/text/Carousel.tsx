import React from 'react';
import styled from 'styled-components';
import { useInView, InView } from 'react-intersection-observer';
import { useSelector, useDispatch } from 'react-redux'

const StyledCarousel = styled.span`
  color: ${p => p.theme.blue};
  display: inline-block;
  position: relative;
  height:  80px;
  width: calc(100% - 130px);
  overflow: hidden;
  vertical-align: middle;

  @media (max-width: 1000px) {
    width: calc(100% - 95px);;
  }

  @media (max-width: 600px) {
    width: calc(100% - 0px);
  }

  @media (max-width: 550px) {
    width: calc(100% - 70px);
  }

  @media (max-width: 450px) {
    width: calc(100% - 0px);
    height:  80px;
  }

`;

const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0px;

  &.active {
  animation: 2s ease-in-out 2s 1 forwards carousel;
  }

  @keyframes carousel {
      0% {top: -0px;}
      35% {top: -95px;}
      65% {top: -95px;}
      100% {top: -193px;}
    }

    @media (max-width: 1000px) {
      top: 10px;
      @keyframes carousel {
      0% {top: 10px;}
      35% {top: -65px;}
      65% {top: -65px;}
      100% {top: -140px;}
    }

    @media (max-width: 550px) {
      top: 21px;
      @keyframes carousel {
      0% {top: 21px;}
      35% {top: -34px;}
      65% {top: -34px;}
      100% {top: -90px;}
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