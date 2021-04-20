import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { toggleShowreel } from '@/redux/actions/index';

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
  margin: 0 0 30px 0;
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

  @media (max-width: 750px) {
    height: 42px;
    width: 42px;
  }

  @media (max-width: 430px) {
    height: 38px;
    width: 38px;

    .icon {
      width: 15px;
      height: auto;
      animation: heartBeat 4s infinite ease-in-out 5s;
    }
  }

  @media (max-width: 370px) {
    margin: 0 0 15px 0;
    display: block;
    width: 100%;
  }

`;

interface Props { }

const PlayButton: React.FunctionComponent<Props> = () => {

  const dispatch = useDispatch();

  return (

    <StyledPlayButton>
      <img className="icon" src="/icons/other/play.svg" onClick={() => dispatch(toggleShowreel())} />
    </StyledPlayButton>
  );
};

export default PlayButton;
