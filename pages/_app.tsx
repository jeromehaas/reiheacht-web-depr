import GlobalStyle from '@/styles/GlobalStyle';
import React from 'react';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import { createWrapper } from 'next-redux-wrapper';
import { ThemeProvider } from 'styled-components';
import Variables from '@/styles/Variables';
import Head from 'next/head';

interface Props {
  Component: any;
  pageProps: any;
}

const App: React.FunctionComponent<Props> = ({ Component, pageProps }) => (
  <Provider store={store}>
    <ThemeProvider theme={Variables}>
      <GlobalStyle />
      <Head>
        <title>reiheacht - Hier begintn die Zusammenarbeit.</title>
        <meta name="description" content="Animation | Storytelling| Design | Illustration | Web | Werbefilm" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/fonts/helvetica-neue/HelveticaNeueLTStd-Roman.woff2" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/helvetica-neue/HelveticaNeueLTStd-Roman.woff" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/helvetica-neue/HelveticaNeueLTStd-Roman.ttf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/helvetica-neue/HelveticaNeueLTStd-Md.woff2" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/helvetica-neue/HelveticaNeueLTStd-Md.woff" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/helvetica-neue/HelveticaNeueLTStd-Md.ttf" as="font" crossOrigin="" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#2775b7" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  </Provider>
);

const makestore = () => store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(App);
