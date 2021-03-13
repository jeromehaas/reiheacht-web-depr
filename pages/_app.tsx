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
        <link rel="preload" href="/fonts/5664093/08b57253-2e0d-4c12-9c57-107f6c67bc49.woff2" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/5664093/08edde9d-c27b-4731-a27f-d6cd9b01cd06.woff" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/5664103/240c57a0-fdce-440d-9ce3-85e0cb56f470.woff2" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/5664103/7802e576-2ffa-4f22-a409-534355fbea79.woff" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/5664111/13ab58b4-b5ba-4c95-afde-ab2608fbbbd9.woff2" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/5664111/5018b5b5-c821-4653-bc74-d0b11d735f1a.woff" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/5664111/5018b5b5-c821-4653-bc74-d0b11d735f1a.woff" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/5664115/7e42a406-9133-48c0-a705-4264ac520b43.woff2" as=" font" crossOrigin="" />
        <link rel="preload" href="/fonts/5664115/837750e9-3227-455d-a04e-dc76764aefcf.woff" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/5664121/fc4fb6ca-f981-4115-b882-c78e9f08be52.woff2" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/5664121/6ed03453-f512-45ba-84bf-fe4ea45d5e6a.woff" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/5664150/800da3b0-675f-465f-892d-d76cecbdd5b1.woff2" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/5664150/7b415a05-784a-4a4c-8c94-67e9288312f5.woff" as="font" crossOrigin="" />
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
        <script src="https://cdn.vhx.tv/assets/player.js" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  </Provider>
);

const makestore = () => store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(App);
