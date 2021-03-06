import * as React from 'react';
import { graphql } from 'react-apollo';
import { compose, flattenProp, pure } from 'recompose';

import EpisodeContainer from 'ui/styles/Container';
import displayLoadingState from 'ui/components/Loading';
import EpisodeCard from 'ui/components/EpisodeCard';
import * as EPISODES_QUERY from 'ui/graphql/AllEpisodesQuery.graphql';

interface Props {
  allEpisodes;
}

function EpisodeList(props: Props) {
  const { allEpisodes } = props;
  return (
    <EpisodeContainer wrap justify="space-between" className="episodes-container">
      <div className="header">
        <h2>Episodes</h2>
      </div>
      {allEpisodes.map(episode => <EpisodeCard key={episode.id} episode={episode}/>,
      )}
    </EpisodeContainer>
  );
}

export default compose(
  graphql(EPISODES_QUERY),
  displayLoadingState,
  flattenProp('data'),
  pure,
)(EpisodeList);
