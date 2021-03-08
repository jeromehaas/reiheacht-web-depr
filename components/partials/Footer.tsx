import React from 'react';
import styled from 'styled-components';
import Limiter from '@/components/layout/Limiter';
import SocialMediaButton from '@/components/buttons/SocialMediaButton';
import Paragraph from '../text/Paragraph';

const StyledFooter = styled.footer`
  width: 100%;
  margin-top: 120px;

  .wrapper {
    width: 100%;
    border-top: 1px solid ${(p) => p.theme.white};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .address {
    padding: 20px 0;
  }

  .addressItem {
    color: ${(p) => p.theme.white};
    display: inline-block;
    border-right: 1px solid ${(p) => p.theme.white};
    padding: 0 10px;
    font-size: 10px;
    line-height: 1;

    &:first-child {
      padding-left: 0;
    }

    &:last-child{
        border: 0;
    }
  
  }

  .socialMediaWrapper {
    display: flex;
  }

`;

const addressItems = [
  'reiheacht Marketing Gmbh',
  'Spillgässli 12',
  '6205 Eich',
  'hallo@reiheacht.ch',
  '+41 79 399 95 12',
];

interface Props { }

const Footer: React.FunctionComponent<Props> = () => (
  <StyledFooter>
    <Limiter>

      <div className="wrapper">

        <div className="address">
          {addressItems.map((item, index) => (
            <p key={index} className="addressItem">{item}</p>
          ))}
        </div>
        <div className="socialMediaWrapper">
          <SocialMediaButton margin="0 0 0 10px" type="youtube" />
          <SocialMediaButton margin="0 0 0 10px" type="vimeo" />
          <SocialMediaButton margin="0 0 0 10px" type="linkedin" />
          <SocialMediaButton margin="0 0 0 10px" type="twitter" />
        </div>
      </div>
    </Limiter>
  </StyledFooter>
);

export default Footer;
