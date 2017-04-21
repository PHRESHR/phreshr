import * as React from 'react';
import { Helmet } from 'react-helmet';

import Status from 'ui/components/Status';

function NotFound() {
  return (
    <Status code={404}>
      <div>
        <h1>Sorry, can’t find that.</h1>
      </div>
    </Status>
  );
}

export default NotFound;
