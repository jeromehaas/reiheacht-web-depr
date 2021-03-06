import React from 'react';
import { Lottie } from '@crello/react-lottie';
import closeTriangleIn from '../../public/animations/close-triangle-in.json';
import styled, { css } from 'styled-components';


const Wrapper = styled.i`
  position: absolute;
 
  margin: 0 auto;
  width: 100%;

  ${({ direction }) =>
    direction === 'top' &&
    css`
      top: 0px;
    `}
 
  ${({ direction }) =>
    direction === 'bottom' &&
    css`
      bottom: 0px; 
      transform: rotate(180deg)
    `}

`;



interface Props {
  position: String;
}


const CloseTriangle: React.FunctionComponent<Props> = ({ position }) => {


  return (
    <Wrapper direction={position}>

      <Lottie
        config={{ animationData: closeTriangleIn, autoplay: true }}
        playingState={'playing'}
        speed={1}
        width={'100px'}
        height={'100px'}
        style={{ margin: '0 auto' }}
      />
    </Wrapper>
  );

}

export default CloseTriangle;