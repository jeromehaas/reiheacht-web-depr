import React from 'react';
import { H1, P } from '@/components/text/Text';
import Paragraph from '@/components/text/Paragraph';
import Button from '@/components/buttons/Button';
import HorizontalLine from '@/components/shapes/HorizontalLine';
import Carousel from '@/components/animations/Carousel';
import Reveal from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';
import Space from '@/components/layout/Space';
import styled from 'styled-components';

const MoveDownWrapper = styled.div`
  top: -60px;
  opacity: 0;
  animation: slideDown  1s forwards 3s;
  position: relative;

  @keyframes slideDown {
    0% {top: -60px; opacity: 0.1; }
    100% {top: 0px; opacity: 1; }
  }
`;

interface ButtonArray {
  text: string;
  target: string;
  delay: string;
}

interface Props {
  content: {
    title: any;
    buttons: any;
    text: any;
    carouselItems: string[]
  }
}

const MainTextBlock: React.FunctionComponent<Props> = ({ content }) => (
  <MoveDownWrapper>
    <H1>{content.title}<Carousel items={content.carouselItems} /></H1>
    <HorizontalLine delay="7s" animated />
    <P size="big" animated delay="7s">{content.text}</P>
    <Space height="60px" />
    {content.buttons.map((button) => (
      <Button key={button.text} type="anchor" target={button.target} text={button.text} animate delay={button.delay} />
    ))}
  </MoveDownWrapper>
);

export default MainTextBlock;
