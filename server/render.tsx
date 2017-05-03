import 'isomorphic-fetch';

import * as express from 'express';
import * as React from 'react';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { ApolloProvider, getDataFromTree, renderToStringWithData } from 'react-apollo';
import { styleSheet } from 'styled-components';
import * as LRUCache from 'lru-cache';
import { Helmet } from 'react-helmet';

import App from 'ui/containers/App';
import Html from 'ui/containers/Html';
import configureApolloClient from 'ui/utils/configureApolloClient';
import { Context } from 'server/interfaces';

import 'ui/styles/global-styles';

export default async (req: express.Request, res: express.Response, context: Context): Promise<string> => {
  const client = configureApolloClient({ ssrMode: true });
  let components = (
    <ApolloProvider client={client}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </ApolloProvider>
  );

  if ( process.env.DEV ) {
    const {AppContainer} = require('react-hot-loader');
    components = <AppContainer>{components}</AppContainer>;
  }

  if (context.url) {
    res.redirect(302, context.url);
  }

  await getDataFromTree(components);
  const content = await renderToString(components);
  const styles = await styleSheet.getCSS();
  const initialState = await client.getInitialState();
  const state = { apollo: initialState };
  // const head = Helmet.renderStatic();
  return `<!doctype html>\n${renderToStaticMarkup(
    <Html head={Helmet.renderStatic()} html={content} state={state} styles={styles} />,
  )}`;
};
