import React from 'react';
import styled from 'styled-components';
import { P } from '@/components/text/Text';

const StyledCookieBanner = styled.div`
  position: fixed;
  bottom: -0vh;
  transition: all 3s ease-in-out;
  width: 100%;
  background-color: ${(p) => p.theme.white};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px ;

  &.visible {
    bottom: 0;
  }

  p {
    line-height: 1.3
  }

  button {
    background-color: ${(p) => p.theme.darkGrey};
    color: ${(p) => p.theme.white};
    border-radius: 10px;
    padding: 10px 20px;
    margin-left: 30px;
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

const CookieBanner: React.FunctionComponent<Props> = () => (
  <StyledCookieBanner>
    <P color="darkGrey" size="small">Wir verwenden Cookies auf unserer Website. Indem du hier bleibst, stimmst du unseren Datenschutzbestimmungen zu.</P>
    <button>Ok</button>
  </StyledCookieBanner>
);

export default CookieBanner;
