import * as React from 'react';
import { graphql } from 'react-apollo';
import { compose, flattenProp, pure } from 'recompose';

import displayLoadingState from 'ui/components/Loading';
import ShowContainer from 'ui/styles/Container';
import ShowCard from 'ui/components/ShowCard';
import * as SHOWS_QUERY from 'ui/graphql/AllShowsQuery.graphql';

function ShowList({ allShows }) {
  return (
    <ShowContainer wrap justify="space-between">
      {allShows.map(show =>
        <ShowCard key={show.id} show={show}/>,
      )}
    </ShowContainer>
  );
};

export default compose(
  graphql(SHOWS_QUERY),
  displayLoadingState,
  flattenProp('data'),
  pure,
)(ShowList);
