import React from 'react';
import Link from 'next/link';
import { Link as Anchor } from 'react-scroll';
import styled from 'styled-components';
import cx from 'classnames';

const Wrapper = styled.span`
    .link {
     color: ${(p) => p.theme.white};
     transition: all 0.25s ease 0.5s;
     text-decoration: none !important;
     font-family: 'Helvetica Neue 55 Roman', serif;
    
    a {
     color: ${(p) => p.theme.white};
     font-family: 'Helvetica Neue 55 Roman', serif;
    }

    &.active,
    &.active span {
      color: ${(p) => p.theme.orange} !important;
    }
    }

`;

interface Props {
  children: React.ReactNode;
  type: string;
  target: string;
  onClickFunction?: any;
  delay?: number;
  className?: string;
}

const Linker: React.FunctionComponent<Props> = ({
  type, children, target, onClickFunction, delay, className,
}) => {
  const renderLink = (LinkType) => {
    switch (LinkType) {
      case 'link':
        return <Link href={target}><a className={cx('link', className)}>{children}</a></Link>;
      case 'anchor':
        return <Anchor className={cx('link', className)} to={target} spy smooth duration={1000} delay={delay} onClick={onClickFunction}>{children}</Anchor>;
      default:
        return <Anchor className={cx('link', className)} to={target} spy smooth duration={1000} delay={delay} onClick={onClickFunction}>{children}</Anchor>;
    }
  };

  return (
    <Wrapper>
      { renderLink(type)}
    </Wrapper>
  );
};

export default Linker;
