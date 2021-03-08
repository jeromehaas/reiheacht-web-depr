import React from 'react';
import Link from 'next/link';
import { Link as Anchor } from 'react-scroll';
import styled from 'styled-components';

const Wrapper = styled.span`
    .link {
     padding: 20px 0;
     color: ${(p) => p.theme.white} !important;
     cursor: pointer !important;
    
    a {
     color: ${(p) => p.theme.white} !important;
     cursor: pointer !important;
    }
    }

`;

interface Props {
  children: React.ReactNode;
  type: string;
  target: string;
  onClickFunction?: any;
  delay?: number;
}

const Linker: React.FunctionComponent<Props> = ({
  type, children, target, onClickFunction, delay,
}) => {
  const renderLink = (LinkType) => {
    switch (LinkType) {
      case 'link':
        return <Link href={target}><a className="link">{children}</a></Link>;
      case 'anchor':
        return <Anchor className="link" to={target} spy smooth duration={1000} delay={delay} onClick={onClickFunction}>{children}</Anchor>;
      default:
        return <Anchor className="link" to={target} spy smooth duration={1000} delay={delay} onClick={onClickFunction}>{children}</Anchor>;
    }
  };

  return (
    <Wrapper>
      { renderLink(type)}
    </Wrapper>
  );
};

export default Linker;
