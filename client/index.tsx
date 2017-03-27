import 'isomorphic-fetch';
import * as WebFont from 'webfontloader';
import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Redbox from 'redbox-react';

import App from 'ui/containers/App';
import configureApolloClient from 'ui/utils/configureApolloClient';

const isProd = process.env.NODE_ENV === 'production';

WebFont.load({google: {families: ['Lato:300,400,700,900']}});

const client = configureApolloClient({
  initialState: window.__APOLLO_STATE__,
  ssrForceFetchDelay: 100,
  connectToDevTools: typeof window !== 'undefined' && !isProd,
});

render(
  <AppContainer errorReporter={Redbox}>
    <ApolloProvider client={client}>
      <Router> 
        <App /> 
      </Router>
    </ApolloProvider>
  </AppContainer>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept();
}
