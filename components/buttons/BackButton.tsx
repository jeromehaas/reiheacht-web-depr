import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

interface Props {
  content: string;
  link: string;
}

const StyledBackButton = styled.button`
  width: 50px;
  height: 50px;  
`;

const BackButton: React.FunctionComponent<Props> = ({ content, link }) => (
  <StyledBackButton>
    <Link href={link}>
      <a>{content}</a>
    </Link>
  </StyledBackButton>
);

export default BackButton;
