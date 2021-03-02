import  GlobalStyle from '@/styles/GlobalStyle';
import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import { createWrapper } from 'next-redux-wrapper';

const App = ({ Component, pageProps }) => {
  
  return (
    <Provider store={store}>
    <>
    <GlobalStyle />
      <Component {...pageProps} />
      </>
    </Provider>
  )
}

const makestore = () => store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(App);
