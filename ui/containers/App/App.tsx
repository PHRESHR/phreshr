import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { compose } from 'recompose';
import { Helmet } from 'react-helmet';

import withHead from 'ui/hocs/withHead';
import withFbSdk from 'ui/hocs/withFbSdk';
import withAnalytics from 'ui/hocs/withAnalytics';
import Canvas from './styles';
import Header from 'ui/components/Header';
import Routes from 'ui/components/Routes';

function App() {
  return (
    <Canvas>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="PHRESHR" />
        <meta property="og:type" content="website" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="720" />

        <meta property="twitter:site" content="PHRESHR" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:image" content="/phreshr-banner.png" />
        <meta property="twitter:creator" content="@PHRESHR" />
        <meta name="apple-mobile-web-app-title" content="PHRESHR" />
        <meta name="application-name" content="PHRESHR" />
        <meta name="theme-color" content="#2980b9" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png" />
        <link rel="icon" sizes="32x32" type="image/png" href="/favicon-icon-32x32.png" />
        <link rel="icon" sizes="16x16" type="image/png" href="/favicon-icon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" />
      </Helmet>
      <Header />
      <Routes />
    </Canvas>
  );
}

export default compose(
  withFbSdk,
  withAnalytics,
)(App);
