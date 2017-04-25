import * as React from 'react';
import { Helmet } from 'react-helmet';

import Featured from 'ui/components/Featured';
import EpisodeList from 'ui/components/EpisodeList';
import ShowList from 'ui/components/ShowList';
import Collapse from 'ui/components/Collapse';
import { HomeContainer } from './styles';

function Home() {
  return (
    <HomeContainer>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Featured />
      <Collapse>
        <EpisodeList />
      </Collapse>
      <ShowList />
    </HomeContainer>
  );
}

export default Home;
