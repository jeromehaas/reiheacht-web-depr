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
    width: 100px;
    height: 100px;
    opacity: 0;
    animation: ${'0.5s ease-in-out 1.5s 1 forwards fadeIn}'};

    @keyframes fadeIn {
        0% {opacity: 0; }
        100% {opacity: 1; }
    }
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
      responsive="1"
      width="100%"
      height="100%"
    />
  </PlayerWrapper>
);

export default Video;
