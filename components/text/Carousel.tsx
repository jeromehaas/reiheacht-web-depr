import React from 'react';
import styled from 'styled-components';
import { useInView, InView } from 'react-intersection-observer';
import { useSelector, useDispatch } from 'react-redux'

const StyledCarousel = styled.span`
  color: ${p => p.theme.blue};
  display: inline-block;
  position: relative;
  height:  80px;
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

  &.active {
  animation: 2s ease-in-out 2s 1 forwards carousel;
  }

  @keyframes carousel {
      0% {top: -0px;}
      35% {top: -95px;}
      65% {top: -95px;}
      100% {top: -193px;}
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