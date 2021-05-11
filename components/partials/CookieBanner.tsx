import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { P } from '@/components/text/Text';
import Cookies from 'js-cookie';
import Link from 'next/link';

const StyledCookieBanner = styled.div`

  position: fixed;
  bottom: -100vh;
  transition: all 3s ease-in-out;
  width: 100%;
  background-color: ${(p) => p.theme.white};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;

  &.visible {
    transition-delay: 10s;
    bottom: 0;
  }

  p {
    line-height: 1.3
  }

  a {
    text-decoration: underline;
  }

  button {
    background-color: ${(p) => p.theme.darkGrey};
    color: ${(p) => p.theme.white};
    border-radius: 10px;
    padding: 10px 20px;
    margin-left: 30px;
    font-family: 'Helvetica Neue 55 Roman', serif;
  }

  @media (max-width: 580px) {
    flex-direction: column;

   button {
      margin-left: 0;
      margin-top: 10px;
      margin-bottom: 10px;
      width: 100%;
    }
  }
`;

interface Props { }

const CookieBanner: React.FunctionComponent<Props> = () => {

  const [cookieBanner, setCookieBanner] = useState('hidden');

  useEffect(() => {
    const cookieBannerConfirmed = Cookies.get('cookieBannerConfirmed');
    if (cookieBannerConfirmed !== 'true') {
      setCookieBanner('visible');
    } else {
      setCookieBanner('hidden');
    }
  }, [cookieBanner, Cookies]);

  const confirmCookie = () => {
    Cookies.set('cookieBannerConfirmed', 'true', { expires: 1 });
    setCookieBanner('hidden');
  };

  return (
    <StyledCookieBanner className={cookieBanner === 'visible' ? 'visible' : null}>
      <P color="darkGrey" size="small">Wir verwenden Cookies auf unserer Website. Indem du hier bleibst, stimmst du unseren <Link href="/legal/legal-information"><a>Datenschutzbestimmungen</a></Link> zu.</P>
      <button type="button" onClick={confirmCookie}>Ok</button>
    </StyledCookieBanner>
  );
};

export default CookieBanner;
