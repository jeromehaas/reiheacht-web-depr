import React from 'react';
import { P } from '@/components/text/Text';
import styled from 'styled-components';
import Image from '@/components/partials/Image';
import Linker from '@/components/buttons/Link';

const StyledScroller = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  position: absolute;
  bottom: 0;
  margin: 0 auto;
  width: 100%;
  opacity: 0;
  animation: appear 1s forwards 5.5s;

  img {
    width: 45px;
    padding: 15px;
    animation: pulse 2s infinite 5s;
  }

  @keyframes pulse {
  0% { transform: translate(0, 0) }
  50% { transform: translate(0, 10px) }
  100% { transform: translate(0, 0)} }

  @keyframes appear {
  0% { opacity: 0 }
  100% { opacity: 1 }
  }
`;

const Scroller: React.FunctionComponent = () => (
  <StyledScroller>
    <P size="small">Popcorn nicht vergessen.</P>
    <Linker type="anchor" target="services">
      <Image src="/icons/arrows/arrow-down.svg" alt="Pfeil" />
    </Linker>
  </StyledScroller>
);

export default Scroller;
