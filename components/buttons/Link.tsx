import React from 'react';
import Link from 'next/link';
import { Link as Anchor } from 'react-scroll';
import styled from 'styled-components';

const Wrapper = styled.span`
    .link {
     padding: 20px 0;
     color: ${p => p.theme.white} !important;
    
    a {
     color: ${p => p.theme.white} !important;
    }
    }

`;



interface Props {
  children: React.ReactNode;
  type: String;
  target: String;
}

const Linker: React.FunctionComponent<Props> = ({ type, children, target, onClickFunction, delay }) => {


  const renderLink = (type) => {
    switch (type) {
      case 'link':
        return <Link href={target}><a className={'link'} delay={delay} onClick={onClickFunction}>{children}</a></Link>
      case 'anchor':
        return <Anchor className={'link'} to={target} spy={true} smooth={true} duration={1000} delay={delay} onClick={onClickFunction}>{children}</Anchor>
      default:
        return <Anchor className={'link'} to={target} spy={true} smooth={true} duration={1000} delay={delay} onClick={onClickFunction}>{children}</Anchor>
    }
  }

  return (
    <>
      { renderLink(type)}
    </>
  );

}

export default Linker;