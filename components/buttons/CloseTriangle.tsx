import React from 'react';
import { Lottie } from '@crello/react-lottie';
import styled, { css } from 'styled-components';
import Link from 'next/link';
import orangeCloseTriangleIn from '../../public/animations/orange-close-triangle-in.json';
import blueCloseTriangleIn from '../../public/animations/blue-close-triangle-in.json';

const Wrapper = styled.i`
  position: absolute;
  margin: 0 auto;
  height: 50px;
  width: 100%;

  ${({ direction }) => direction === 'top'
    && css`
      top: -15px;
    `}
 
  ${({ direction }) => direction === 'bottom'
    && css`
      bottom: -15px;
      transform: rotate(180deg)
    `}

`;

interface Props {
  position: string;
  color?: string;
}

const CloseTriangle: React.FunctionComponent<Props> = ({ position, color }) => (
  <Wrapper direction={position}>
    <Link href="/">
      <a>
        <Lottie
          config={{ animationData: color === 'blue' ? blueCloseTriangleIn : orangeCloseTriangleIn, autoplay: true }}
          playingState="playing"
          speed={1}
          width="80px"
          height="80px"
          style={{ margin: '0 auto' }}
        />
      </a>
    </Link>
  </Wrapper>
);

export default CloseTriangle;
