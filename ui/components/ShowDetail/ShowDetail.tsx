import * as React from 'react';
import { graphql } from 'react-apollo';
import { compose, flattenProp, pure } from 'recompose';

import displayLoadingState from 'ui/components/Loading';
import ShowCard from 'ui/components/ShowCard';
import * as SHOW_QUERY from 'ui/graphql/ShowQuery.graphql';

function ShowDetail({ Show }) {
  const show = Show;
  return (
    <div>
      {show &&
        <ShowCard key={show.id} show={show} detail={true}/>
      }
    </div>
  );
};

export default compose(
  graphql(SHOW_QUERY, {
    options: params => ({
      variables: {
        id: params.id,
      },
    }),
  }),
  displayLoadingState,
  flattenProp('data'),
  pure,
)(ShowDetail);
