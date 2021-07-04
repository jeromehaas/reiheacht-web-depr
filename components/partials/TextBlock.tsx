import React from 'react';
import { useDispatch } from 'react-redux';
import { updateCurrentPosition } from 'redux/actions';
import Reveal from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';
import { InView } from 'react-intersection-observer';
import Space from '@/components/layout/Space';
import { H2, P } from '@/components/text/Text';
import HorizontalLine from '@/components/shapes/HorizontalLine';
import styled from 'styled-components';

const StyledTextBlock = styled.div`
  ${P} {
    max-width: ${(p) => (p.maxWidth ? p.maxWidth : null)};
  }
`;

const moveDown = keyframes`
  from {top: -60px; opacity: 0.1; position: relative;}
  to {top: 0px; opacity: 1; position: relative;}
`;

interface Props {
  content: any;
  maxWidth?: string;
}

const TextBlock: React.FunctionComponent<Props> = ({ content, maxWidth }) => {

  const dispatch = useDispatch();

  return (
    <Reveal keyframes={moveDown} triggerOnce fraction={1}>
      <StyledTextBlock maxWidth={maxWidth}>
        <InView onChange={() => dispatch(updateCurrentPosition(content.section))}>
          {({ ref }) => (
            <div ref={ref}>
              <H2>{content.title}</H2>
              <HorizontalLine animated delay="0.3s" />
              <P size="large">{content.text}</P>
              <Space height="30px" />
            </div>
          )}
        </InView>
      </StyledTextBlock>
    </Reveal>
  );

};

export default TextBlock;
