import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

interface Props {
  content: String;
  link: String;
}

const StyledBackButton = styled.button`
  width: 50px;
  height: 50px;  
`;


const BackButton: React.FunctionComponent<Props> = ({ content, link }) => {

  return (
    <StyledBackButton>
      <Link>
        <a href={link}>{content}</a>
      </Link>
    </StyledBackButton>
  );

}

export default BackButton;