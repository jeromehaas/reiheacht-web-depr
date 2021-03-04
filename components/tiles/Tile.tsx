import React from 'react';
import styled from 'styled-components';
import H3 from '@/components/text/H3';

interface Props {
  content: any
}

const StyledTile = styled.div`
  width: 33.333%;
  height: 100%;
  /* background-color: ${p => p.theme.orange};  */
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

const Tile: React.FunctionComponent<Props> = ({ content }) => {

  return (
    <StyledTile>
      <div className="initial">
        <img src={content.image} alt={content.alt} />
      </div>
      <div className="overlay" style={{ backgroundColor: content.overlayColor }}>
        {content.title}
        {content.description}
      </div>
    </StyledTile>
  );

}

export default Tile;