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
    top: calc(100% - 60px);
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    padding: 0 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    transition: all 0.7s ease-in-out;
  }

  .textWrapper  {
    line-height: 1;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
    transition: all 0.99s ease-in-out;
  }

  ${H3} {
    font-size: 25px;
    font-family: 'Helvetica Neue 75 Bold'
  }


  .serviceArrow {
		width: auto;
		height: 20px;
		margin-left: 15px;
  }




@media (max-width: 1000px) {
    ${H3} { font-size: 25px; };
  }

  @media (max-width: 850px) {
    width: calc(100% / 2);

  }

  @media (max-width: 700px) {
  }

  @media (max-width: 580px) {
		.serviceArrow {
			width: auto;
			height: 15px;
			margin-left: 10px;
  	}
  }

	@media (max-width: 550px) {
    width: calc(100% / 1);
    margin-top: 30px;
		.serviceArrow {
			width: auto;
			height: 20px;
			margin-left: 15px;
  	}
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
    <Link href={content.link}>
      <a>
        <div className="initial">
          <Image src={content.image} alt={content.alt} />
        </div>
        <div className="overlay" style={{ backgroundColor: content.overlayColor === 'orange' ? '#C23E27' : '#FFFFFF' }}>
          <div className="textWrapper">
            <H3 color={content.overlayColor === 'orange' ? 'white' : 'darkGrey'}>{content.title}</H3>
            <img className="serviceArrow" src={`${content.overlayColor === 'orange' ? '/icons/arrows/double-arrow-right-white.svg' : '/icons/arrows/double-arrow-right-black.svg'}`} alt="E-Mail Icon" />
          </div>
        </div>
      </a>
    </Link>

  </StyledServiceTile>
);

export default ServiceTile;
