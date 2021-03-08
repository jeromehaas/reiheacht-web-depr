import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
  width: 100%;
  height: auto;
`;

interface Props {
  src: string;
  alt: string;
}

const Image: React.FunctionComponent<Props> = ({ src, alt }) => (
  <StyledImage src={src} alt={alt} />
);

export default Image;
