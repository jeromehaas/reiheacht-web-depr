import React from 'react';
import styled from 'styled-components';
import Video from '@/components/partials/Video';
import ReactPlayer from 'react-player';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import CloseTriangle from '@/components/buttons/CloseTriangle';
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
  /* transition: all 1.5s ease, width 0s ease 2s, height 0s ease 2s; */
  transition: all 0s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &.active {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.75);
    transition: all 0s ease;
  }

}
`;

interface Props { }

const ShowReel: React.FunctionComponent<Props> = () => {

  const dispatch = useDispatch();
  const showreelStatus = useSelector((state: RootStateOrAny) => state.showreel.visible);

  return (
    <StyledShowreel>
      <div className={`background ${showreelStatus === true ? 'active' : null}`}>
        <ReactPlayer
          url="https://player.vimeo.com/video/520902562"
          className="react-player"
          controls
          responsive="1"
          width="75%"
          height="75%"
        />
        <CloseTriangle position="bottom" onClickAction={() => dispatch(toggleShowreel())} />
      </div>
    </StyledShowreel>
  );

};
export default ShowReel;
