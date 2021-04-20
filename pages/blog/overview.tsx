import React from 'react';
import Blog from '@/components/pages/Blog';
import {
  H2, H3, H4, P, HL,
} from '@/components/text/Text';
import Space from '@/components/layout/Space';
import styled from 'styled-components';
import Paragraph from '@/components/text/Paragraph';
import HorizontalLine from '@/components/shapes/HorizontalLine';
import Linker from '@/components/buttons/Link';
import Reveal, { Fade } from 'react-awesome-reveal';

const TopPost = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    border-bottom: 4px solid ${(p) => p.theme.blue};
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15), 0px -2px 2px rgba(0, 0, 0, 0.15);
    margin-bottom: 30px;

    @media (max-width: 800px) {
        flex-direction: column;
    }

    .image {
      width: 50%;
      height: 100%;

      @media (max-width: 800px) {
        width: 100%;
      }

    }
      
    img { 
      width: 100%;
      height: 100%;
      display: block;

    }

    .text {
      width: 50%;
      padding: 30px;

      @media (max-width: 800px) {
        width: 100%;
      }
    }

;


`;

const PostContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
  }
 `;

const Post = styled.div`
     border-bottom: 4px solid ${(p) => p.theme.blue};
     box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15), 0px -2px 2px rgba(0, 0, 0, 0.15);
  .image {

  }

  img {

    width: 100%;
    height: auto;
      display: block;
  }

  .text {
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

 `;

const blogPosts = [
  {
    image: '/images/blog/block-mock-image.jpg',
    imageAlt: 'Interview',
    caption: 'Interview',
    title: 'Warum profesionelle Sprecher einsetzen?',
    text: 'Das kann man doch selbst machen.',
    date: '26.01.2021',
    link: '/blog/1',
  },
  {
    image: '/images/blog/block-mock-image.jpg',
    imageAlt: 'Interview',
    caption: 'Interview',
    title: 'Warum profesionelle Sprecher einsetzen?',
    text: 'Das kann man doch selbst machen.',
    date: '26.01.2021',
    link: '/blog/1',
  },
  {
    image: '/images/blog/block-mock-image.jpg',
    imageAlt: 'Interview',
    caption: 'Interview',
    title: 'Warum profesionelle Sprecher einsetzen?',
    text: 'Das kann man doch selbst machen.',
    date: '26.01.2021',
    link: '/blog/1',
  },
  {
    image: '/images/blog/block-mock-image.jpg',
    imageAlt: 'Interview',
    caption: 'Interview',
    title: 'Warum profesionelle Sprecher einsetzen?',
    text: 'Das kann man doch selbst machen.',
    date: '26.01.2021',
    link: '/blog/1',
  },
  {
    image: '/images/blog/block-mock-image.jpg',
    imageAlt: 'Interview',
    caption: 'Interview',
    title: 'Warum profesionelle Sprecher einsetzen?',
    text: 'Das kann man doch selbst machen.',
    date: '26.01.2021',
    link: '/blog/1',
  },
];

const latestPost = blogPosts[0];
const allPosts = blogPosts.slice(1);

interface Props { }

const Imprint: React.FunctionComponent<Props> = () => (
  <>

    <Blog closeTriangleTarget="/">
      <Fade>
        <H2 color="darkGrey">Trends & News aus der reihe<Highlight>acht</Highlight>.</H2>
        <HorizontalLine className="active" />
        <Linker target={latestPost.link} type="link">
          <TopPost>
            <div className="image">
              <img src={latestPost.image} alt={latestPost.imageAlt} />
            </div>
            <div className="text">
              <P><HL color="blue">{latestPost.caption}</HL></P>
              <Space height="10px" />
              <H3 color="darkGrey">{latestPost.title}</H3>
              <Space height="10px" />
              <P color="darkGrey">{latestPost.text}</P>
            </div>
          </TopPost>
        </Linker>
      </Fade>
      <PostContainer>

        <Fade cascade damping={0.2}>
          {allPosts.map((post, index) => (

            <Post key={index}>
              <Linker target={post.link} type="link">
                <div className={post.image}>
                  <img src={post.image} alt={post.imageAlt} />
                </div>
                <div className="text">
                  <P><HL>{post.caption}</HL></P>
                  <H4 color="darkGrey">{post.title}</H4>
                  <P color="darkGrey">{post.text}</P>
                  <p style={{ alignSelf: 'flex-end', fontSize: '12px', color: '#1c1c1c' }}>{post.date}</p>
                </div>
              </Linker>
            </Post>
          ))}
        </Fade>
      </PostContainer>

      <Space height="150px" />
    </Blog>
  </>
);

export default Imprint;
