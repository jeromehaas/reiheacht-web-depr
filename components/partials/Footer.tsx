import React from 'react';
import styled from 'styled-components';
import Limiter from '@/components/layout/Limiter';
import SocialMediaButton from '@/components/buttons/SocialMediaButton';
import Linker from '@/components/buttons/Link';
import Paragraph from '../text/Paragraph';

const StyledFooter = styled.footer`
  width: 100%;
  margin-top: 200px;

  .wrapper {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .whiteLine {
    width: 100%;
    height: 1px;
    background-color: ${(p) => p.theme.white};
    margin: 15px 0;
  }

  .address {
    padding: 20px 0;
  }

  .addressItem {
    color: ${(p) => p.theme.white};
    display: inline-block;
    border-right: 1px solid ${(p) => p.theme.white};
    padding: 0 10px;
    font-size: 12px;
    line-height: 1;

    &:first-child {
      padding-left: 0;
    }

    &:last-child{
        border: 0;
    }
  
  }

  .legalItem {
    color: ${(p) => p.theme.white};
    display: inline-block;
    padding: 0 10px;
    font-size: 12px;
    line-height: 1
  }

  .socialMediaWrapper {
    display: flex;
    justify-content: flex-end;
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
      <div className="socialMediaWrapper">
        <SocialMediaButton margin="0 0 0 10px" type="youtube" />
        <SocialMediaButton margin="0 0 0 10px" type="vimeo" />
        <SocialMediaButton margin="0 0 0 10px" type="linkedin" />
        <SocialMediaButton margin="0 0 0 10px" type="twitter" />
      </div>
      <div className="whiteLine" />

      <div className="wrapper">
        <div className="address">
          {addressItems.map((item, index) => (
            <p key={index} className="addressItem">{item}</p>
          ))}
        </div>
        <div className="legal">
          <div className="legalLinks" />
          <Linker type="link" className="legalItem" target="/legal/imprint">Impressum</Linker>
          <Linker type="link" className="legalItem" target="/legal/legal-information">Datenschutz</Linker>
          <Linker type="link" className="legalItem" target="/legal/terms-and-conditions">AGB</Linker>
        </div>
      </div>
    </Limiter>
  </StyledFooter>
);

export default Footer;
