import React from 'react';
import styled from 'styled-components';
import Tile from '@/components/tiles/Tile';
import EmployeeTile from '@/components/tiles/EmployeeTile';
import ProjectTile from '@/components/tiles/ProjectTile';
import ServiceTile from '@/components/tiles/ServiceTile';
import Reveal, { Slide } from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';

const SlideIn = keyframes`
  from {left: -100%; opacity: 1; position: relative;}
  to {left: 0%; opacity: 1; position: relative;}
`;

const StyledTileSet = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex-wrap: wrap;
  overflow: hidden;
  line-height: 0;



  @media (max-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 20px 0
  }

`;

const renderSwitch = (tiles, type) => {

  switch (type) {
    case 'employees':
      return (
        tiles.map((tile, index) => (
          <EmployeeTile key={index} content={tile}>hello</EmployeeTile>
        ))
      );
    case 'projects':
      return (
        tiles.map((tile, index) => (
          <ProjectTile key={index} content={tile}>hello</ProjectTile>
        ))
      );
    case 'services':
      return (
        tiles.map((tile, index) => (
          <ServiceTile key={index} content={tile}>hello</ServiceTile>
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
  type: string;
}

const TileSet: React.FunctionComponent<Props> = ({ tiles, type }) => (
  <StyledTileSet>
    <Reveal keyframes={SlideIn} triggerOnce cascade duration={500} damping={0.1}>
      {renderSwitch(tiles, type)}
    </Reveal>
  </StyledTileSet>
);

export default TileSet;
