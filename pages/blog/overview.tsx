import React from 'react';
import Blog from '@/components/pages/Legal';
import { H2, H3, H4 } from '@/components/text/Titles';
import Spacer from '@/components/layout/Spacer';
import Highlight from '@/components/text/Highlight';
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

    .image {
      width: 50%;
      height: 100%;


    }
      
    img { 
      width: 100%;
      height: 100%;
      display: block;

    }

    .text {
      width: 50%;
      padding: 30px;
    }
    
`;

const PostContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
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
    link: '/blog/2021-01-26',
  },
  {
    image: '/images/blog/block-mock-image.jpg',
    imageAlt: 'Interview',
    caption: 'Interview',
    title: 'Warum profesionelle Sprecher einsetzen?',
    text: 'Das kann man doch selbst machen.',
    date: '26.01.2021',
    link: '/blog/2021-01-26',
  },
  {
    image: '/images/blog/block-mock-image.jpg',
    imageAlt: 'Interview',
    caption: 'Interview',
    title: 'Warum profesionelle Sprecher einsetzen?',
    text: 'Das kann man doch selbst machen.',
    date: '26.01.2021',
    link: '/blog/2021-01-26',
  },
  {
    image: '/images/blog/block-mock-image.jpg',
    imageAlt: 'Interview',
    caption: 'Interview',
    title: 'Warum profesionelle Sprecher einsetzen?',
    text: 'Das kann man doch selbst machen.',
    date: '26.01.2021',
    link: '/blog/2021-01-26',
  },
  {
    image: '/images/blog/block-mock-image.jpg',
    imageAlt: 'Interview',
    caption: 'Interview',
    title: 'Warum profesionelle Sprecher einsetzen?',
    text: 'Das kann man doch selbst machen.',
    date: '26.01.2021',
    link: '/blog/2021-01-26',
  },
];

const latestPost = blogPosts[0];
const allPosts = blogPosts.slice(1);

interface Props { }

const Imprint: React.FunctionComponent<Props> = () => (
  <>

    <Blog>
      <Fade>
        <H2 color="darkGrey">Trends & News aus der reihe<Highlight>acht</Highlight>.</H2>
        <HorizontalLine className="active" />
        <Linker target="/" type="link">
          <TopPost>
            <div className="image">
              <img src={latestPost.image} alt={latestPost.imageAlt} />
            </div>
            <div className="text">
              <Paragraph><Highlight>{latestPost.caption}</Highlight></Paragraph>
              <Spacer marginBottom="10px" />
              <H3 color="darkGrey">{latestPost.title}</H3>
              <Spacer marginBottom="10px" />
              <Paragraph color="darkGrey">{latestPost.text}</Paragraph>
            </div>
          </TopPost>
        </Linker>
      </Fade>
      <PostContainer>

        <Fade cascade damping={0.2}>
          {allPosts.map((post, index) => (

            <Post key={index}>
              <Linker target="/" type="link">
                <div className="image">
                  <img src="/images/blog/block-mock-image.jpg" alt="" />
                </div>
                <div className="text">
                  <Paragraph><Highlight>Interview</Highlight></Paragraph>
                  <H4 color="darkGrey">Warum professionelle Sprecher einsetzen?</H4>
                  <Paragraph color="darkGrey">Interview</Paragraph>
                  <p style={{ alignSelf: 'flex-end', fontSize: '12px', color: '#1c1c1c' }}>26.01.2021</p>
                </div>
              </Linker>
            </Post>
          ))}
        </Fade>
      </PostContainer>

      <Spacer marginBottom="150px" />
    </Blog>
  </>
);

export default Imprint;
