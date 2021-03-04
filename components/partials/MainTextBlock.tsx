import React, { Fragment } from 'react';
import H1 from '../text/H1'
import H2 from '../text/H2'
import Highlight from '../text/Highlight'
import Paragraph from '@/components/text/Paragraph';
import styled from 'styled-components';
import { useInView, InView } from 'react-intersection-observer';
import { useSelector, useDispatch } from 'react-redux';
import { start } from 'repl';
import { updateTextBlocks } from 'redux/actions';
import { prependOnceListener } from 'process';
import Button from '@/components/buttons/Button';
import HorizontalLine from '@/components/shapes/HorizontalLine';
import Carousel from '@/components/text/Carousel';

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

interface Props { }

const MainTextBlock: React.FunctionComponent<Props> = () => {

  const dispatch = useDispatch();
  const isVisible = useSelector((state) => state.textBlocks.start.visible);

  return (
    <MoveDownWrapper className={isVisible ? 'active' : ''}>
      <InView onChange={() => dispatch(updateTextBlocks({ start: { visible: true } }))}>
        {({ inView, ref, entry }) => (
          <div ref={ref}>
            <H1>Hier beginnt <br /> die
              <Carousel className={isVisible ? 'active' : ''} items={['Magie', 'Idee', 'Zusammenarbeit']} />
            </H1>
          </div>
        )}
      </InView >
      <HorizontalLine className={isVisible ? 'active' : ''} animated={true} />
      <Paragraph animated={true} className={isVisible ? 'active' : ''} > reiheacht ist eine digitale Kreativagentur, die mit Innovation und Zusammenarbeit einzigartige Lösungen anbietet, damit du deine Marke da stärken kannst, wo du deine Kunden am besten erreichst. <br /> Wir bewegen alles und jeden – setz dich in die reiheacht.</Paragraph>
      <Button link={'#'} content={'hello'} animated={true} className={isVisible ? 'active' : ''} />
      <Button link={'#'} content={'hello'} animated={true} className={isVisible ? 'active' : ''} customDelay={'5.25s'} />
    </MoveDownWrapper>
  );

}

export default MainTextBlock;