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
  content: any
}

const MainTextBlock: React.FunctionComponent<Props> = ({ content }) => (
  <Reveal keyframes={moveDown} triggerOnce fraction={1}>
    <H1>{content.title}<Carousel className="active" items={content.carouselItems} /></H1>
    <HorizontalLine className="active" animated />
    <P animate delay="4.5s">{content.text}</P>
    <Space height="30px" />
    {content.buttons.map((button, index) => (
      <Button key={index} target={button.target} text={button.text} animate delay={button.delay} />
    ))}
  </Reveal>
);

export default MainTextBlock;
