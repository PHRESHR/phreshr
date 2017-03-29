import * as React from 'react';
import { graphql } from 'react-apollo';
import { compose, flattenProp, pure } from 'recompose';

import displayLoadingState from 'ui/components/Loading';
import ShowContainer from './styles';
import ShowCard from 'ui/components/ShowCard';
import * as SHOWS_QUERY from 'ui/graphql/AllShowsQuery.graphql';

interface Props {
  allShows;
}

function ShowList(props: Props) {
  const { allShows } = props;
  return (
    <ShowContainer wrap justify="space-between" className="show-container">
      <div className="header">
        <h2>Shows</h2>
      </div>
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
