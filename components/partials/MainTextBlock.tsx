import React, { Fragment } from 'react';
import { H1 } from '@/components/text/Titles'
import Paragraph from '@/components/text/Paragraph';
import styled from 'styled-components';
import { useInView, InView } from 'react-intersection-observer';
import { useSelector, useDispatch } from 'react-redux';
import { updateTextBlocks } from 'redux/actions';
import { prependOnceListener } from 'process';
import Button from '@/components/buttons/Button';
import HorizontalLine from '@/components/shapes/HorizontalLine';
import Carousel from '@/components/animations/Carousel';

const MoveDownWrapper = styled.div`
  position: relative;
  top: -60px;
  opacity: 0;

  &.active {
    animation: 1s ease-in-out 0.2s 1 forwards moveDown;
  }

  @keyframes moveDown {
      from {top: -60px; opacity: 0;}
      to {top: 0px; opacity: 1;}
    }
`;

interface Props {
  content: any
}

const MainTextBlock: React.FunctionComponent<Props> = ({ content }) => {

  const dispatch = useDispatch();
  const isVisible = useSelector((state) => state.textBlocks[content.section].visible);

  return (
    <MoveDownWrapper className={isVisible ? 'active' : ''}>
      <InView onChange={() => dispatch(updateTextBlocks({ start: { visible: true } }))}>
        {({ inView, ref, entry }) => (
          <div ref={ref}>
            <H1>{content.title}
              <Carousel className={isVisible ? 'active' : ''} items={content.carouselItems} />
            </H1>
          </div>
        )}
      </InView >
      <HorizontalLine className={isVisible ? 'active' : ''} animated={true} />
      <Paragraph animated={true} className={isVisible ? 'active' : ''} >{content.text}</Paragraph>
      {content.buttons.map((button, index) => (
        <Button key={index} link={button.link} content={button.content} animated={true} className={isVisible ? 'active' : ''} customDelay={`${5 + (index / 2)}s`} />
      ))}

    </MoveDownWrapper>
  );

}

export default MainTextBlock;