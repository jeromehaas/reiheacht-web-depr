import React from 'react';
import styled, { css } from 'styled-components';

const getDimensions = ({ width, height }) => css`
    width: ${width || null};
    height: ${height || null};
`;

const StyledSpace = styled.div`
  ${getDimensions};
`;
interface Props {
  height?: string;
  width?: string;
}

const Space: React.FunctionComponent<Props> = ({ height, width }) => (
  <StyledSpace height={height} width={width} />
);

export default Space;
