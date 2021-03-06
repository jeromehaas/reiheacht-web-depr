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
import { Slide } from "react-awesome-reveal";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const moveDown = keyframes`
  from {top: -60px; opacity: 0.1; position: relative;}
  to {top: 0px; opacity: 1; position: relative;}
`;

interface Props {
  content: any;
}

const TextBlock: React.FunctionComponent<Props> = ({ content }) => {

  const dispatch = useDispatch();
  const isVisible = useSelector((state) => state.textBlocks[content.section].visible);

  return (

    <Reveal keyframes={moveDown} triggerOnce={true}>
        {content.title}
      <HorizontalLine animated={false} className={'active'} />
        {content.text}
    </Reveal>


  )

}

export default TextBlock;