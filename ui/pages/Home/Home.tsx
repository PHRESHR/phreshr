import * as React from 'react';
import { Helmet } from 'react-helmet';

import Featured from 'ui/components/Featured';
import EpisodeList from 'ui/components/EpisodeList';
import ShowList from 'ui/components/ShowList';
import Collapse from 'ui/components/Collapse';
import { CollapsedContainer } from './styles';

function Home() {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Featured />
      <Collapse>
        <EpisodeList />
      </Collapse>
      <ShowList />
    </div>
  );
}

export default Home;
