import * as React from 'react';
import { Helmet } from 'react-helmet';

import ShowList from 'ui/containers/ShowList';

function Shows() {
  return (
    <div>
      <Helmet>
        <title>PHRESHR Shows</title>
        <meta
        name="description"
        content="Browse and watch shows that explores, discusses and delves into topics relevant to hip-hop culture, music, lifestyle, and ar" />
        <meta property="og:title" content="PHRESHR Shows" />
        <meta
          property="og:description"
          content="Browse and watch shows that explores, discusses and delves into topics relevant to hip-hop culture, music, lifestyle, and ar" />
        <meta property="og:url" content="https://phreshr.com/shows" />
        <meta property="twitter:title" content="PHRESHR Shows" />
        <meta
          property="twitter:description"
          content="Browse and watch shows that explores, discusses and delves into topics relevant to hip-hop culture, music, lifestyle, and art" />
        <meta property="twitter:url" content="https://phreshr.com/shows" />
      </Helmet>
      <ShowList />
    </div>
  );
}

export default Shows;
