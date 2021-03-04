import React from 'react';
import styled from 'styled-components';

const StyledMoveDownWrapper = styled.div`
  position: relative;
  top: -60px;
  opacity: 0;
  animation: 1s ease-in-out 0.2s 1 forwards moveDown;

  @keyframes moveDown {
      from {top: -60px; opacity: 0;}
      to {top: 0px; opacity: 1;}
    }
`;

interface Props {
  children: React.ReactNode;
}

const MoveDownWrapper: React.FunctionComponent<Props> = ({ children }) => {

  return (
    <StyledMoveDownWrapper>
      {children}
    </StyledMoveDownWrapper>
  );

}

export default MoveDownWrapper;