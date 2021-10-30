import React from 'react';
import styled from 'styled-components';
import Image from '@/components/partials/Image';

const StyledSocialMediaButton = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  background-color: ${(p) => p.theme.blue};
  margin: ${(p) => p.margin};
  cursor: pointer;

  img {
    height: 10px;
  }

  a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

`;

const renderSwitch = (type: string) => {
  switch (type) {
    case 'youtube': return <a href="https://www.youtube.com/channel/UCOYRo7GNe7B9oe1ADcnE3TA" target="_blank" rel="noopener noreferrer"><Image src="/icon/social-media-icons/youtube.svg" alt="Youtube" /></a>;
    case 'vimeo': return <a href="https://www.vimeo.com/reiheacht" target="_blank" rel="noopener noreferrer"><img src="/icon/social-media-icons/vimeo.svg" alt="Vimeo" /></a>;
    case 'linkedin': return <a href="https://www.linkedin.com/company/reiheacht/" target="_blank" rel="noopener noreferrer"><img src="/icon/social-media-icons/linkedin.svg" alt="LinkedIn" /></a>;
    case 'twitter': return <a href="https://twitter.com/reiheacht" target="_blank" rel="noopener noreferrer"><img src="/icon/social-media-icons/twitter.svg" alt="Twitter" /></a>;
    default: return <a href="https://www.youtube.com/channel/UCOYRo7GNe7B9oe1ADcnE3TA" target="_blank" rel="noopener noreferrer"><img src="/icon/social-media-icons/youtube.svg" alt="Youtube" /></a>;
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
