import GlobalStyle from '@/styles/GlobalStyle';
import React from 'react';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import { createWrapper } from 'next-redux-wrapper';
import { ThemeProvider } from 'styled-components';
import Variables from '@/styles/Variables';
import Head from 'next/head';
import { CookiesProvider } from 'react-cookie';
import ReactGA from 'react-ga';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TRACKING_ID = 'G-5V62GPPNLD';
ReactGA.initialize(TRACKING_ID);

interface Props {
  Component: any;
  pageProps: any;
}

const App: React.FunctionComponent<Props> = ({ Component, pageProps }) => (
  <Provider store={store}>
    <CookiesProvider>
      <ThemeProvider theme={Variables}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </CookiesProvider>
  </Provider>
);

const makestore = () => store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(App);
