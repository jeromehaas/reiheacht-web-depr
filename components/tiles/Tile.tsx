import React from 'react';
import styled from 'styled-components';
import H3 from '@/components/text/H3';
import Link from 'next/link';

const StyledTile = styled.div`
  width: calc(100% / 3);
  height: 100%;
  /* background-color: ${p => p.theme.orange};  */
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
    transition: ${p => p.theme.standardTransition};
  }

  h3 {
    margin-bottom: 15px;
    line-height: 1.3;
  }

  li {
    line-height: 1;
  }

  &:hover {
    .overlay {
      top: 0px;
    }
  }
`;


interface Props {
  content: any
}

const Tile: React.FunctionComponent<Props> = ({ content }) => {


  return (
    <StyledTile>
      <div className="initial">
        <img src={content.image} alt={content.alt} />
      </div>

      {content.link ? (
        <Link href={content.link}>
          <a>
            <div className="overlay" style={{ backgroundColor: content.overlayColor }} >
            {content.title}
            {content.description}
          </div>
          </a>
        </Link>
      ) : (
        <div className="overlay" style={{ backgroundColor: content.overlayColor }} >
          {content.title}
          {content.description}
        </div>
      )}


    </StyledTile>
  );
  
}

export default Tile;