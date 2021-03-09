import React from 'react';
import styled from 'styled-components';
import Tile from '@/components/tiles/Tile';
import EmployeeTile from '@/components/tiles/EmployeeTile';

const StyledTileSet = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow: hidden;
    line-height: 0;
  `;

const renderSwitch = (tiles, type) => {
  switch (type) {
    case 'employee':
      return (
        tiles.map((tile, index) => (
          <EmployeeTile key={index} content={tile}>hello</EmployeeTile>
        ))
      );
    default:
      return (
        tiles.map((tile, index) => (
          <Tile key={index} content={tile}>hello</Tile>
        ))
      );
  }
};

interface Props {
  tiles: any[];
  type?: string;
}

const TileSet: React.FunctionComponent<Props> = ({ tiles, type }) => (
  <StyledTileSet>
    {renderSwitch(tiles, type)}
  </StyledTileSet>
);

export default TileSet;
