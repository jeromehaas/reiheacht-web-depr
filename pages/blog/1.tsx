import React from 'react';
import Blog from '@/components/pages/Blog';
import {
  H2, H3, P, HL,
} from '@/components/text/Text';
import Image from '@/components/partials/Image';
import styled from 'styled-components';
import Space from '@/components/layout/Space';
import SocialMediaButton from '@/components/buttons/SocialMediaButton';

const RichText = styled(P)`
  
`;

const Quote = styled(H3)`
  text-align: center;
  font-size: 30px;
  color: ${(p) => p.theme.darkGrey};
  max-width: 500px;
  margin: 0 auto;

  &::before {
    content: '"';
  }

  &::after {
    content: '"';
  }
`;

const SocialMediaWrapper = styled.div`
      display: flex;
    justify-content: flex-end;
`;

interface Props { }

const Post: React.FunctionComponent<Props> = () => (
  <Blog closeTriangleTarget="/blog/overview">
    <Image src="/images/blog/block-mock-image.jpg" alt="Mock Blog" />
    <Space height="30px" />
    <H2 color="darkGrey"><HL color="blue">Interview mit Virginia Reis.</HL></H2>
    <Space height="30px" />
    <RichText color="darkGrey">
      <HL color="blue">reiheacht:</HL> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </RichText>

    <Space height="15px" />
    <RichText color="darkGrey">
      <HL color="orange">Virgina Reis:</HL> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </RichText>
    <Space height="60px" />
    <Quote>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    </Quote>
    <Space height="60px" />
    <SocialMediaWrapper>
      <SocialMediaButton margin="0 0 0 10px" type="youtube" />
      <SocialMediaButton margin="0 0 0 10px" type="vimeo" />
      <SocialMediaButton margin="0 0 0 10px" type="linkedin" />
      <SocialMediaButton margin="0 0 0 10px" type="twitter" />
    </SocialMediaWrapper>
    <Space height="150px" />
  </Blog>
);

export default Post;
