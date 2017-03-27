import * as React from 'react';
import * as Helmet from 'react-helmet';

import EpisodeList from 'ui/components/EpisodeList';

function Home() {
  return (
    <div>
      <Helmet title="Home"/>
      <h1>Home</h1>
      <EpisodeList />
    </div>
  );
};

export default Home;
