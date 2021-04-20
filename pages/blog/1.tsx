import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import Blog from '@/components/pages/Blog';
import {
  H1, H2, H3, H4, P,
} from '@/components/text/Text';
import Highlight from '@/components/text/Highlight';
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
    <H2 color="darkGrey"><Highlight>Interview mit Virginia Reis.</Highlight></H2>
    <Spacer marginBottom="30px" />
    <RichText color="darkGrey">
      <Highlight>reiheacht:</Highlight> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </RichText>

    <Spacer marginBottom="15px" />
    <RichText color="darkGrey">
      <Highlight color="orange">Virgina Reis:</Highlight> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </RichText>
    <Spacer marginBottom="60px" />
    <Quote>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    </Quote>
    <Spacer marginBottom="60px" />
    <SocialMediaWrapper>
      <SocialMediaButton margin="0 0 0 10px" type="youtube" />
      <SocialMediaButton margin="0 0 0 10px" type="vimeo" />
      <SocialMediaButton margin="0 0 0 10px" type="linkedin" />
      <SocialMediaButton margin="0 0 0 10px" type="twitter" />
    </SocialMediaWrapper>
    <Spacer marginBottom="150px" />
  </Blog>
);

export default Post;
