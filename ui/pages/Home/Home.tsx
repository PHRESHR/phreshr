import * as React from 'react';
import { Helmet } from 'react-helmet';

import Featured from 'ui/components/Featured';
import EpisodeList from 'ui/components/EpisodeList';
import ShowList from 'ui/components/ShowList';

function Home() {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Featured />
      <ShowList />
      <EpisodeList />
    </div>
  );
}

export default Home;
