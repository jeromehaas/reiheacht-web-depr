import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { toggleShowreel } from '@/redux/actions/index';

const StyledShowreel = styled.div`

.background {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0vw;
  height: 0vh;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.0);
  transition: all 0s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &.active {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.75);
    transition: all 0s ease;
  }

}

.react-player-wrapper {
  position: relative;
  width: 75%;
  padding-top: 41%;
}

.close-button {
  position: absolute;
  top: -40px;
  right: 0px;
  z-index: 10;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
}

.close-button-image {
  width: 30px;
  height: 30px;
}

.react-player {
  position: absolute;
  top: 0;
  left: 0;
}

`;

interface Props { }

const Showreel: React.FunctionComponent<Props> = () => {

  const dispatch = useDispatch();
  const showreelStatus = useSelector((state: RootStateOrAny) => state.showreel.visible);

  return (
    <StyledShowreel>
      <div className={`background ${showreelStatus === true ? 'active' : null}`}>
        <div className="react-player-wrapper">
          <button className="close-button" type="button" onClick={() => dispatch(toggleShowreel())}>
            <img className="close-button-image" src="/icons/other/close-button.svg" alt="X" />
          </button>
          <ReactPlayer
            url="https://player.vimeo.com/video/546612359"
            playing={showreelStatus}
            className="react-player"
            width="100%"
            height="100%"
            controls
          />
        </div>

      </div>
    </StyledShowreel>
  );

};
export default Showreel;
