import React from 'react';
import styled from 'styled-components';
import { H3 } from '@/components/text/Titles';
import Link from 'next/link';

const StyledProjectTile = styled.div`
  width: calc(100% / 3);
  height: 100%;
  overflow: hidden;
  position: relative;

  @media (max-width: 850px) {
    width: calc(100% / 2);
  }

  @media (max-width: 550px) {
    width: calc(100% / 1);
  }

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
    transition: ${(p) => p.theme.standardTransition};
  }

  h3 { margin-bottom: 15px; }

  h3, li, p  {
    line-height: 1;
    opacity: 0;
    transition: all 0.6s ease;
  }

  &:hover {
    .overlay {
      top: 0px;

      h3, li, p {
      opacity: 1 !important;
      }
    }
  }

`;

interface Props {
  content: any
}

const ProjectTile: React.FunctionComponent<Props> = ({ content }) => (
  <StyledProjectTile>
    <div className="initial">
      <img src={content.image} alt={content.alt} />
    </div>
    <Link href={content.link}>
      <a>
        <div className="overlay" style={{ backgroundColor: content.overlayColor }}>
          {content.title}
          {content.description}
        </div>
      </a>
    </Link>

  </StyledProjectTile>
);

export default ProjectTile;
