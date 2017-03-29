import * as React from 'react';
import { Helmet } from 'react-helmet';
import * as serialize from 'serialize-javascript';

const isProd = process.env.NODE_ENV === 'production';
const helmet = Helmet.renderStatic();

import 'ui/styles/global-styles';

interface Props {
  html;
  state;
  styles;
}

function Html({html, state, styles}) {
  return (
    <html lang="en">
      <head>
        <title>{helmet.title.toComponent()}</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        {helmet.meta.toComponent()}
        {helmet.base.toComponent()}
        {helmet.link.toComponent()}
        {helmet.script.toComponent()}
        <style type="text/css">
          {styles}
        </style>
      </head>
      <body>
        <div dangerouslySetInnerHTML={{ __html: html }} id="root" />
        { isProd && (
            <script dangerouslySetInnerHTML={{ __html: `
            if ('serviceWorker' in navigator) {
              navigator.serviceWorker.register('/service-worker.js');
            }
          ` }} />
          )
        }
        <script dangerouslySetInnerHTML={{ __html: `window.__APOLLO_STATE__ = ${serialize(state)}` }} />
        <script src={`${VENDOR_BUNDLE}`} />
        <script src={`${CLIENT_BUNDLE}`} />
      </body>
    </html>
  );
};

export default Html;
