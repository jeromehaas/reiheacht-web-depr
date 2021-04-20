import React from 'react';
import styled from 'styled-components';

const StyledPlayButton = styled.button`
  height: 50px;
  width: 50px;
  border: 1px solid ${(p) => p.theme.white};
  position: relative;
  width: auto;
  display: inline-block;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  outline: none;
  margin: 0 30px 30px 0;
  float: left;
  cursor: pointer;
  background-color: transparent;
  border: 2px solid ${(p) => p.theme.white};
  display: flex;
  align-items: center;
  justify-content: center;
  animation: 0.5s ease-out 8s 1 forwards moveUp;
  opacity: 0;
  
  .icon {
    width: 20px;
    height: auto;  
    animation: heartBeat 4s infinite ease-in-out 5s;
  }

  @keyframes moveUp {
     from {top: 60px; opacity: 0;}
     to {top: 0px; opacity: 1;}
  }

  @keyframes heartBeat {
  0% { transform: scale(1) }
  10% { transform: scale(1.15) }
  20% { transform: scale(1)} 
  100% { transform: scale(1)} 
  }

`;

interface Props { }

const PlayButton: React.FunctionComponent<Props> = () => (
  <StyledPlayButton>
    <img className="icon" src="/icons/other/play.svg" />
  </StyledPlayButton>
);

export default PlayButton;
