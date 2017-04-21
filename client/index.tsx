import 'isomorphic-fetch';
import * as WebFont from 'webfontloader';
import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { render } from 'react-dom';

import App from 'ui/containers/App';
import configureApolloClient from 'ui/utils/configureApolloClient';

const isPROD = process.env.NODE_ENV === 'production';

WebFont.load({google: {families: ['Lato:300,400,700,900', 'Poppins:300,400,500,600,700']}});

const client = configureApolloClient({
  initialState: window.__APOLLO_STATE__,
  ssrForceFetchDelay: 100,
  connectToDevTools: typeof window !== 'undefined' && !isPROD,
});

let app = (
  <ApolloProvider client={client}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>
);

if ( !isPROD ) {
  const {AppContainer} = require ( 'react-hot-loader' );
  app = <AppContainer>{app}</AppContainer>;
}

render(app, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
