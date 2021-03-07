import GlobalStyle from '@/styles/GlobalStyle';
import React from 'react';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import { createWrapper } from 'next-redux-wrapper';
import { ThemeProvider } from 'styled-components';
import Variables from '@/styles/Variables';

interface Props {
  Component: any;
  pageProps: any;
}

const App: React.FunctionComponent<Props> = ({ Component, pageProps }) => (
  <Provider store={store}>
    <ThemeProvider theme={Variables}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  </Provider>
);

const makestore = () => store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(App);
