import React from 'react';
import styled from 'styled-components';
import Tile from '@/components/tiles/Tile';

interface Props {
  tiles: any[];
}

const StyledTileSet = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow: hidden;
  line-height: 0;
`;

const TileSet: React.FunctionComponent<Props> = ({ tiles }) => {

  return (
    <StyledTileSet>
      {tiles.map((tile, index) => (
        <Tile key={index} content={tile}>hello</Tile>
        ))}
    </StyledTileSet>
  );

}

export default TileSet;