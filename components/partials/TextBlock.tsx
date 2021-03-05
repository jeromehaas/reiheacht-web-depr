import React, { Fragment } from 'react';
import H2 from '../text/H2'
import Highlight from '../text/Highlight'
import HorizontalLine from '../shapes/HorizontalLine';
import Paragraph from '../text/Paragraph';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { updateTextBlocks } from 'redux/actions';
import VisibilitySensor from 'react-visibility-sensor';
import H1 from '../text/H1';
import { useState, useEffect } from 'react';

const MoveDownWrapper = styled.div`
  position: relative;
  top: -60px;
  opacity: 0;

  &.active {
  animation: 1s ease-in-out 0.1s 1 forwards moveDown;
  }

  @keyframes moveDown {
      from {top: -60px; opacity: 0.1;}
      to {top: 0px; opacity: 1;}
    }
`;

interface Props {
  content: any;
}

const TextBlock: React.FunctionComponent<Props> = ({ content }) => {

  const dispatch = useDispatch();
  const isVisible = useSelector((state) => state.textBlocks[content.section].visible);

  return (
    <MoveDownWrapper className={isVisible ? 'active' : ''}>
      <VisibilitySensor
        onChange={(isVisible) => { dispatch(updateTextBlocks({ [content.section]: { visible: isVisible } })) }}
        active={true}
        partialVisibility={true}
        offset={{ top: 0, bottom: 0 }} >
        <Fragment>
          {content.title}
          <HorizontalLine />
          {content.text}
        </Fragment>
      </VisibilitySensor>
    </MoveDownWrapper >
  )

}

export default TextBlock;