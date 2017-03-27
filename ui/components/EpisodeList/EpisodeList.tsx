import * as React from 'react';
import { graphql } from 'react-apollo';
import { compose, flattenProp, pure } from 'recompose';

import EpisodeContainer from 'ui/styles/Container';
import displayLoadingState from 'ui/components/Loading';
import EpisodeCard from 'ui/components/EpisodeCard';
import * as EPISODES_QUERY from 'ui/graphql/AllEpisodesQuery.graphql';

function EpisodeList({ allEpisodes }) {
  return (
    <EpisodeContainer wrap justify="space-between" className="episodes-container">
      {allEpisodes.map(episode =>
        <EpisodeCard key={episode.id} episode={episode}/>,
      )}
    </EpisodeContainer>
  );
};

export default compose(
  graphql(EPISODES_QUERY),
  displayLoadingState,
  flattenProp('data'),
  pure,
)(EpisodeList);
