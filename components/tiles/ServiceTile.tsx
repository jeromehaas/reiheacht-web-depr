import React from 'react';
import styled from 'styled-components';
import { H3, P } from '@/components/text/Text';
import Link from 'next/link';
import Image from '@/components/partials/Image';
import Space from '@/components/layout/Space';

const StyledServiceTile = styled.div`
  height: 100%;
  width: calc(100% / 3);
  overflow: hidden;
  position: relative;

  .initial {
    width: 100%;
    height: 100%;
    display: block;
  }

  img {
    width: 100%;
    height: 100%;
    display: inline-block;
    object-fit: cover;
  }

  .arrow {
    display: none;
    width: 20px;
    height: 20px;
    position: absolute;
    bottom: 20px;
    right: 30px;
    object-fit: contain;
    transition: all 0.7s ease-in-out;
  }

  .overlay {
    position: absolute;
    top: 100%;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    transition: all 0.7s ease-in-out;
  }

  .textWrapper  {
    line-height: 1;
    opacity: 0;
    transition: all 0.99s ease-in-out;
  }

  ${H3} {
    top: 30px;
    font-size: 30px;
    opacity: 0;
    position: relative;
    transition: all 0.7s ease-in;
    font-family: 'Helvetica Neue 75 Bold'
  }

  ${P} {
    top: 30px;
    opacity: 0;
    font-size: 25px;
    position: relative;
    transition: all 0.7s ease 0.2s;
    color: ${(p) => p.theme.blue}
  }

  .moreInfoLink {
    position: absolute;
    bottom: 30px;
    font-size: 25px;
    right: 30px;
    opacity: 0;
    font-family: 'Helvetica Neue 55 Roman';
    color: ${(p) => p.theme.white};
    text-decoration: underline;
    transition: all 0.7s ease 0.2s;
  }

  &:hover {

    .overlay {
      top: 0px;
      height: 100%;
    }

    .textWrapper {
      margin-top: -30%;
      opacity: 1;
    }

    ${H3} {
      top: 5px;
      opacity: 1;
    }

    ${P} {
      top: 5px;
      opacity: 1;
  }

  .moreInfoLink {
    opacity: 1;
  }

}

@media (max-width: 1000px) {
    ${H3} { font-size: 25px; };
    ${P} { font-size: 20px;}
    .moreInfoLink { font-size: 20px; }
  }

  @media (max-width: 850px) {
    width: calc(100% / 2);
    ${H3} { font-size: 30px; };
    ${P} { font-size: 25px;
    .moreInfoLink { font-size: 25px; }
  }

  @media (max-width: 700px) {
    ${H3} { font-size: 25px; };
    ${P} { font-size: 20px;}
    .moreInfoLink { font-size: 20px; }
  }

  @media (max-width: 550px) {
    width: calc(100% / 1);
    margin-top: 30px;
    .overlay { height: 60px; }
    .textWrapper { height: 60px;}
    .title { height: 60px; }
  }

  @media (max-width: 450px) {
    ${H3} { font-size: 25px; };
    ${P} { font-size: 20px;}
    .moreInfoLink { font-size: 20px; }
  }

  @media (max-width: 370px) {
    ${H3} { font-size: 22px; };
    ${P} { font-size: 17px;}
    .moreInfoLink { font-size: 17px; }
  }

  }
`;

interface Props {
  content: any
}

const ServiceTile: React.FunctionComponent<Props> = ({ content }) => (
  <StyledServiceTile>
    <div className="initial">
      <Image src={content.image} alt={content.alt} />
    </div>
    <Link href={content.link}>
      <a>
        <div className="overlay" style={{ backgroundColor: content.overlayColor === 'orange' ? '#C23E27' : '#FFFFFF' }}>
          <div className="textWrapper">
            <H3 color={content.overlayColor === 'orange' ? 'white' : 'darkGrey'}>{content.title}</H3>
            <Space height="6px" />
            <p className="moreInfoLink" style={{ color: `${content.overlayColor === 'orange' ? 'white' : '#1C1C1C'}` }}>Mehr Infos</p>
          </div>
        </div>
      </a>
    </Link>

  </StyledServiceTile>
);

export default ServiceTile;
