import  GlobalStyle from '@/styles/GlobalStyle';
import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import { createWrapper } from 'next-redux-wrapper';
import { ThemeProvider } from 'styled-components';
import Variables from '@/styles/Variables';

const App = ({ Component, pageProps }) => {
  
  return (
    <Provider store={store}>
      <ThemeProvider theme={Variables}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

const makestore = () => store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(App);
