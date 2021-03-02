import  GlobalStyle from '@/styles/GlobalStyle';
import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import store from '@/redux/store';

const App = ({ Component, pageProps }) => {
  
  return (
    <Provider store={store}>
    <GlobalStyle />
      <Component {...pageProps} />
    </Provider>
  )
}

export default App
