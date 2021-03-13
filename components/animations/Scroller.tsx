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

  img {
    width: 45px;
    padding: 15px;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
  0% { transform: translate(0, 0) }
  50% { transform: translate(0, 10px) }
  100% { transform: translate(0, 0)} }
`;

interface Props { }

const Scroller: React.FunctionComponent<Props> = () => (
  <StyledScroller>
    <P size="small">Popcorn nicht vergessen.</P>
    <Linker type="anchor" target="services">
      <Image src="/icons/arrows/arrow-down.svg" alt="arrow" />
    </Linker>
  </StyledScroller>
);

export default Scroller;
