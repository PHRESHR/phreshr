import * as React from 'react';
import { Helmet } from 'react-helmet';

import ShowList from 'ui/components/ShowList';

function Shows() {
  return (
    <div>
      <Helmet>
        <title>Shows</title>
      </Helmet>
      <ShowList />
    </div>
  );
}

export default Shows;
