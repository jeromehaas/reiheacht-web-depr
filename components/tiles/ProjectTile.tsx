import React from 'react';
import styled from 'styled-components';
import { H3 } from '@/components/text/Titles';
import Link from 'next/link';
import Image from '@/components/partials/Image';
import Paragraph from '@/components/text/Paragraph';
import { keyframes } from '@emotion/react';
import Reveal, { Slide } from 'react-awesome-reveal';
import Spacer from '@/components/layout/Spacer';

const moveUp = keyframes`
  from {top: 40px; position: relative;}
  to {top: 5px; position: relative;}
`;

const StyledProjectTile = styled.div`
  width: calc(100% / 3);
  height: 100%;
  overflow: hidden;
  position: relative;


  .initial {
    width: 100%;
    height: 100%;
    display: block;

    img {
      width: 100%;
      height: 100%;
      display: inline-block;
      object-fit: cover;
    }

  }

  &:hover {

    .overlay {
      top: 0px;
      height: 100%;

      .textWrapper {
        opacity: 1;
      }
    }
  }

  @media (max-width: 850px) {
    width: calc(100% / 2);
  }

  @media (max-width: 550px) {
    width: calc(100% / 1);
    margin-top: 30px;
  }

  .overlay {
    position: absolute;
    top: 100%;
    right: 0;
    bottom: 0;
    left: 0; 
    width: 100%;
    height: 100%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    transition: all 0.7s ease;
  }

  .textWrapper  {
    line-height: 1;
    opacity: 0;
    transition: all 0.7s ease
  }



`;

interface Props {
  content: any
}

const ProjectTile: React.FunctionComponent<Props> = ({ content }) => (
  <StyledProjectTile>
    <div className="initial">
      <Image src={content.image} alt={content.alt} />
    </div>
    <Link href={content.link}>
      <a>
        <div className="overlay" style={{ backgroundColor: content.overlayColor }}>
          <div className="textWrapper">
            <Reveal keyframes={moveUp} duration={700} damping={2} fraction={0}>
              <H3>{content.title}</H3>
              <Spacer marginBottom="15px" />
              <Paragraph>{content.description}</Paragraph>
            </Reveal>
          </div>
        </div>
      </a>
    </Link>

  </StyledProjectTile>
);

export default ProjectTile;
