import * as React from 'react';
import { Helmet } from 'react-helmet';

import Featured from 'ui/containers/Featured';
import EpisodeList from 'ui/containers/EpisodeList';
import ShowList from 'ui/containers/ShowList';
import Collapse from 'ui/components/Collapse';
import ScrollToTop from 'ui/components/ScrollToTop';
import { HomeContainer } from './styles';

function Home() {
  return (
    <HomeContainer>
      <Helmet>
        <title>PHRESHR</title>
        <meta
        name="description"
        content="PHRESHR is a hub of original shows that explores, discusses and delves into topics relevant to hip-hop culture, music, lifestyle, and art" />
        <meta property="og:title" content="PHRESHR" />
        <meta
          property="og:description"
          content="PHRESHR is a hub of original shows that explores, discusses and delves into topics relevant to hip-hop culture, music, lifestyle, and art" />
        <meta property="og:url" content="https://phreshr.com" />
        <meta property="twitter:title" content="PHRESHR" />
        <meta
          property="twitter:description"
          content="PHRESHR is a hub of original shows that explores, discusses and delves into topics relevant to hip-hop culture, music, lifestyle, and art" />
        <meta property="twitter:url" content="https://phreshr.com" />
      </Helmet>
      <ScrollToTop />
      <Featured />
      <ShowList />
    </HomeContainer>
  );
}

export default Home;
