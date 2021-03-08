import React from 'react';
import styled from 'styled-components';

const StyledSocialMediaButton = styled.a`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  background-color: ${(p) => p.theme.blue};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${(p) => p.margin};
  

  img {
    height: 10px;
  }
`;

const renderSwitch = (type) => {
  switch (type) {
    case 'youtube': return <img src="/icons/social-media-icons/youtube.svg" alt="Youtube" />;
    case 'vimeo': return <img src="/icons/social-media-icons/vimeo.svg" alt="Vimeo" />;
    case 'linkedin': return <img src="/icons/social-media-icons/linkedin.svg" alt="LinkedIn" />;
    case 'twitter': return <img src="/icons/social-media-icons/twitter.svg" alt="Twitter" />;
    default: return <img src="/icons/social-media-icons/youtube.svg" alt="Youtube" />;
  }
};

interface Props {
  type: string;
  margin: string;
}

const SocialMediaButton: React.FunctionComponent<Props> = ({ type, margin }) => (
  <StyledSocialMediaButton margin={margin}>
    {renderSwitch(type)}
  </StyledSocialMediaButton>
);

export default SocialMediaButton;
