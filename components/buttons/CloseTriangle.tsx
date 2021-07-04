import React from 'react';
import { Lottie } from '@crello/react-lottie';
import styled, { css } from 'styled-components';
import Linker from '@/components/buttons/Link';
import orangeCloseTriangleIn from '@/public/animations/orange-close-triangle-in.json';
import blueCloseTriangleIn from '@/public/animations/blue-close-triangle-in.json';

const Wrapper = styled.i`
  position: absolute;
  margin: 0 auto;
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  z-index: 5;
  cursor: none;

  ${({ direction }) => direction === 'top'
    && css`
      top: 45px;
    `};
 
  ${({ direction }) => direction === 'bottom'
    && css`
      bottom: -15px;
      transform: rotate(180deg);
    `};

    .link {
      display: block;
      height: 65px;
      overflow: hidden;
    }

`;

interface Props {
  position: string;
  color?: string;
  target?: string;
  onClickAction?(): any;
}

const CloseTriangle: React.FunctionComponent<Props> = ({
  position, color, target, onClickAction,
}) => (

  <Wrapper direction={position} onClick={onClickAction}>
    <Linker type="link" target={target || '/'}>
      <Lottie
        config={{ animationData: color === 'blue' ? blueCloseTriangleIn : orangeCloseTriangleIn, autoplay: true }}
        playingState="playing"
        speed={1}
        width="80px"
        height="80px"
        style={{ margin: '0 auto', pointerEvents: 'none' }}
      />
    </Linker>
  </Wrapper>
);

export default CloseTriangle;
