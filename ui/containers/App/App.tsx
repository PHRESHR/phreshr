import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { compose, lifecycle } from 'recompose';
import { Helmet } from 'react-helmet';

import Auth from 'ui/Auth';
import { configureAnalytics, pageView } from 'ui/utils/configureAnalytics';
import Canvas from './styles';
import Header from 'ui/components/Header';
import Home from 'ui/pages/Home';
import About from 'ui/pages/About';
import Shows from 'ui/pages/Shows';
import Show from 'ui/pages/Show';
import Watch from 'ui/pages/Watch';
import NotFound from 'ui/pages/NotFound';
import Login from 'ui/components/Login';

configureAnalytics();

const IS_BROWSER = typeof window !== 'undefined';

let auth;
let requireAuth;
if (IS_BROWSER) {
  auth = new Auth();
  requireAuth = (nextState, replace) => {
    if (!auth.isAuthenticated()) {
      replace({ pathname: '/' });
    }
  };
}

function App() {
  console.log(auth);
  return (
    <Canvas>
      <Helmet
        titleTemplate="%s - React Starter Typescript"
        defaultTitle="React Starter Typescript">
        <meta charSet="utf-8" />
        <meta name="description" content="React starter for building universal apps with Typescript, Webpack 2, Apollo" />
        <meta property="og:title" content="React Starter Typescript" />
        <meta property="og:description" content="React starter for building universal apps with Typescript, Webpack 2, Apollo" />
        <meta property="og:url" content="https://example.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="React Starter Typescript" />
        <meta property="og:image" content="" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="720" />
        <meta property="og:locale" content="en_US" />
        <meta property="twitter:title" content="React Starter Typescript" />
        <meta property="twitter:description" content="React starter for building universal apps with Typescript, Webpack 2, Apollo" />
        <meta property="twitter:url" content="https://example.com" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:site" content="React Starter Typescript" />
        <meta property="twitter:image" content="" />
        <meta property="twitter:creator" content="@ReactStarterTypescript" />
        <meta name="apple-mobile-web-app-title" content="React Starter Typescript" />
        <meta name="application-name" content="React Starter Typescript" />
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
        <link rel="stylesheet" href="http://vjs.zencdn.net/5.18.4/video-js.css" />
        <script src="http://vjs.zencdn.net/5.18.4/video.min.js" />
      </Helmet>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/shows" component={Shows} />
        <Route path="/watch/:id/:uid" component={Watch} />
        <Route path="/show/:id/:uid" component={Show} />
        <Route component={NotFound} />
      </Switch>
    </Canvas>
  );
};

const componentLifecycle = lifecycle({
  componentWillMount() {
    pageView();
  },
});

export default compose(
  componentLifecycle,
)(App);
