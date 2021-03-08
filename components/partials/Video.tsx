import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

const PlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

interface Props {
  link: string;
}

const Video: React.FunctionComponent<Props> = ({ link }) => (
  <PlayerWrapper>
    <ReactPlayer
      url={link}
      className="react-player"
      controls
      width="100%"
      height="100%"
    />
  </PlayerWrapper>
);

export default Video;
