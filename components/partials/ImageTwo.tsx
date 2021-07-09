import React from 'react';
import styled from 'styled-components';

const StyledImageTwoWrapper = styled.div`
	width: 100;
	display: grid;
	grid-template: auto / repeat(2, 1fr);
	grid-gap: 30px;
`;

const StyledImageTwo = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

interface Props {
  src1: string;
  alt1: string;
  src2: string;
  alt2: string;
}

const ImageTwo: React.FunctionComponent<Props> = ({
  src1, alt1, src2, alt2,
}) => (
  <StyledImageTwoWrapper>
    <StyledImageTwo src={src1} alt={alt1} />
    <StyledImageTwo src={src2} alt={alt2} />
  </StyledImageTwoWrapper>
);

export default ImageTwo;
