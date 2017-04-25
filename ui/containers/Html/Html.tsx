import * as React from 'react';
import { Helmet } from 'react-helmet';
import * as serialize from 'serialize-javascript';

const isPROD = process.env.NODE_ENV === 'production';

import 'ui/styles/global-styles';

interface Props {
  html: string;
  state: object;
  styles: string;
}

function Html(props: Props) {
  const { html, state, styles } = props;
  const helmet = Helmet.renderStatic();
  return (
    <html lang="en">
      <head>
        {helmet.title.toComponent()}
        {helmet.meta.toComponent()}
        {helmet.link.toComponent()}
        {helmet.script.toComponent()}
        <style type="text/css">
          {styles}
        </style>
      </head>
      <body>
        <svg className="hidden">
          <symbol id="icon-menu" viewBox="0 0 24 24">
            <title>menu</title>
            <path d="M24,5.8H0v-2h24V5.8z M19.8,11H4.2v2h15.6V11z M24,18.2H0v2h24V18.2z"/>
          </symbol>
          <symbol id="icon-cross" viewBox="0 0 24 24">
            <title>cross</title>
            <path d="M13.4,12l7.8,7.8l-1.4,1.4l-7.8-7.8l-7.8,7.8l-1.4-1.4l7.8-7.8L2.7,4.2l1.4-1.4l7.8,7.8l7.8-7.8l1.4,1.4L13.4,12z"/>
          </symbol>
        </svg>
        <div dangerouslySetInnerHTML={{ __html: html }} id="root" />
        { isPROD && (
            <script dangerouslySetInnerHTML={{ __html: `
            if ('serviceWorker' in navigator) {
              navigator.serviceWorker.register('/assets/service-worker.js');
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
}

export default Html;
