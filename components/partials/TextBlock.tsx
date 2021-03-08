import React, { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector, RootStateOrAn } from 'react-redux';
import { updateTextBlocks } from 'redux/actions';
import VisibilitySensor from 'react-visibility-sensor';
import Reveal, { Slide } from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';
import { InView } from 'react-intersection-observer';
import Paragraph from '../text/Paragraph';
import HorizontalLine from '../shapes/HorizontalLine';

const moveDown = keyframes`
  from {top: -60px; opacity: 0.1; position: relative;}
  to {top: 0px; opacity: 1; position: relative;}
`;

interface Props {
  content: any;
}

const TextBlock: React.FunctionComponent<Props> = ({ content }) => {
  const dispatch = useDispatch();
  const isVisible = useSelector((state: RootStateOrAny) => state.textBlocks[content.section].visible);

  return (

    <Reveal keyframes={moveDown} triggerOnce>

      <InView onChange={() => dispatch(updateTextBlocks({ [content.section]: { visible: true } }))}>
        {({ ref }) => (
          <div ref={ref}>
            {content.title}
            <HorizontalLine animated={false} className="active" />
            {content.text}
          </div>
        )}
      </InView>

    </Reveal>
  );
};

export default TextBlock;
