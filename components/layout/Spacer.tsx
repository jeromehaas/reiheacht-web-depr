import React from 'react';
import styled from 'styled-components';

const StyledSpacer = styled.div`
  height: ${(p) => p.marginBottom};
`;
interface Props {
  marginBottom: String;
}

const Spacer: React.FunctionComponent<Props> = ({ marginBottom }) => (
  <StyledSpacer marginBottom={marginBottom} />
);

export default Spacer;
