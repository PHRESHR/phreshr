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
        <title>Home</title>
         <meta
          name="description"
          content="PHRESHR is Music + Culture + Art + Lifestyle" />
      </Helmet>
      <ScrollToTop />
      <Featured />
      <ShowList />
    </HomeContainer>
  );
}

export default Home;
