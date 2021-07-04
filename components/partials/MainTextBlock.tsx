import React from 'react';
import { H1, P } from '@/components/text/Text';
import Button from '@/components/buttons/Button';
import HorizontalLine from '@/components/shapes/HorizontalLine';
import Carousel from '@/components/animations/Carousel';
import Space from '@/components/layout/Space';
import styled from 'styled-components';
import PlayButton from '@/components/buttons/PlayButton';

const MoveDownWrapper = styled.div`
  top: -60px;
  opacity: 1;
  /* animation: slideDown  1s forwards 3s; */
  position: relative;

  @keyframes slideDown {
    0% {top: -60px; opacity: 0.1; }
    100% {top: 0px; opacity: 1; }
  }
`;

interface Props {
  content: {
    title: any;
    buttons: any[];
    text: any;
  }
}

const MainTextBlock: React.FunctionComponent<Props> = ({ content }) => (
  <MoveDownWrapper>
    <H1>{content.title}</H1>
    <HorizontalLine />
    <P fullWidth size="big">{content.text}</P>
    <Space height="60px" />
    <PlayButton />
    {content.buttons.map((button) => (
      <Button key={button.text} type="anchor" target={button.target} text={button.text} />
    ))}
  </MoveDownWrapper>
);

export default MainTextBlock;
