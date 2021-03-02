import  GlobalStyle from '@/styles/GlobalStyle';
import React, { Fragment } from 'react';

const App = ({ Component, pageProps }) => {
  
  return (
    <Fragment>
    <GlobalStyle />
      <Component {...pageProps} />
    </Fragment>
  )
}

export default App
