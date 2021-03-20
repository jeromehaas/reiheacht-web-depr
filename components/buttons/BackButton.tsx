import React from 'react';
import styled from 'styled-components';
import Linker from '@/components/buttons/Link';
import { Router, useRouter } from 'next/router';

const StyledBackButton = styled.button`
  width: 50px;
  height: 50px;  
`;

interface Props {
  content: string;
  link: string;
}

const BackButton: React.FunctionComponent<Props> = ({ content, link }) => (

  <StyledBackButton>
    <Linker type="link" target={link}>
      {content}
    </Linker>
  </StyledBackButton>
);

export default BackButton;
