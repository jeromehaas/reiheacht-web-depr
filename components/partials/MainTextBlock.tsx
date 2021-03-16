import React from 'react';
import { H1, P } from '@/components/text/Text';
import Paragraph from '@/components/text/Paragraph';
import Button from '@/components/buttons/Button';
import HorizontalLine from '@/components/shapes/HorizontalLine';
import Carousel from '@/components/animations/Carousel';
import Reveal from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';
import Space from '@/components/layout/Space';

const moveDown = keyframes`
  from {top: -60px; opacity: 0.1; position: relative;}
  to {top: 0px; opacity: 1; position: relative;}
`;

interface Props {
  content: {
    title: string;
    buttons: string[];
    text: string;
    carouselItems: string[]
  }
}

const MainTextBlock: React.FunctionComponent<Props> = ({ content }) => (
  <Reveal keyframes={moveDown} triggerOnce fraction={1}>
    <H1>{content.title}<Carousel items={content.carouselItems} /></H1>
    <HorizontalLine delay="4.5s" animated />
    <P size="big" animated delay="4.5s">{content.text}</P>
    <Space height="60px" />
    {content.buttons.map((button) => (
      <Button key={button.text} type="anchor" target={button.target} text={button.text} animate delay={button.delay} />
    ))}
  </Reveal>
);

export default MainTextBlock;
