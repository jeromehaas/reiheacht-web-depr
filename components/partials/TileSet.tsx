import React from 'react';
import styled from 'styled-components';
import Tile from '@/components/tiles/Tile';
import EmployeeTile from '@/components/tiles/EmployeeTile';
import ProjectTile from '@/components/tiles/ProjectTile';
import ServiceTile from '@/components/tiles/ServiceTile';

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
    case 'employees':
      return (
        tiles.map((tile, index) => (
          <EmployeeTile key={index} content={tile} />
        ))
      );
    case 'projects':
      return (
        tiles.map((tile, index) => (
          <ProjectTile key={index} content={tile} />
        ))
      );
    case 'services':
      return (
        tiles.map((tile, index) => (
          <ServiceTile key={index} content={tile} />
        ))
      );
    default:
      return (
        tiles.map((tile, index) => (
          <Tile key={index} content={tile} />
        ))
      );
  }

};

interface Props {
  tiles: any[];
  type: string;
}

const TileSet: React.FunctionComponent<Props> = ({ tiles, type }) => (
  <StyledTileSet>
    {renderSwitch(tiles, type)}
  </StyledTileSet>
);

export default TileSet;
