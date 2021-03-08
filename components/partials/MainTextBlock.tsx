import React from 'react';
import { H1 } from '@/components/text/Titles';
import Paragraph from '@/components/text/Paragraph';
import styled from 'styled-components';
import { InView } from 'react-intersection-observer';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { updateTextBlocks } from 'redux/actions';
import Button from '@/components/buttons/Button';
import HorizontalLine from '@/components/shapes/HorizontalLine';
import Carousel from '@/components/animations/Carousel';
import Reveal from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';

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

const moveDown = keyframes`
  from {top: -60px; opacity: 0.1; position: relative;}
  to {top: 0px; opacity: 1; position: relative;}
`;

interface Props {
  content: any
}

const MainTextBlock: React.FunctionComponent<Props> = ({ content }) => {
  const dispatch = useDispatch();
  const isVisible = useSelector((state: RootStateOrAny) => state.textBlocks[content.section].visible);

  return (
    <Reveal keyframes={moveDown} triggerOnce>
      <InView onChange={() => dispatch(updateTextBlocks({ start: { visible: true } }))}>
        {({ ref }) => (
          <div ref={ref}>
            <H1>
              {content.title}
              <Carousel className="active" items={content.carouselItems} />
            </H1>
          </div>
        )}
      </InView>
      <HorizontalLine className="active" animated />
      <Paragraph animated className={isVisible ? 'active' : ''}>{content.text}</Paragraph>
      {content.buttons.map((button, index) => (
        <Button key={index} link={button.link} content={button.content} animated className={isVisible ? 'active' : ''} customDelay={`${5 + (index / 2)}s`} />
      ))}

    </Reveal>
  );
};

export default MainTextBlock;
