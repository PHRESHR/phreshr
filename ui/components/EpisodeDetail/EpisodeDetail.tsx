import * as React from 'react';
import { graphql } from 'react-apollo';
import { compose, flattenProp, pure } from 'recompose';
import * as Helmet from 'react-helmet';

import displayLoadingState from 'ui/components/Loading';
import EpisodeCard from 'ui/components/EpisodeCard';
import WatchArea from 'ui/components/WatchArea';
import Container from 'ui/styles/Container';
import PlayerHub from 'ui/styles/PlayerHub';
import * as EPISODE_QUERY from 'ui/graphql/EpisodeQuery.graphql';

function EpisodeDetail({ Episode }) {
  const episode = Episode;
  return (
    <div className="episode-detail">
      <Helmet
        title={`${episode.show.title}: ${episode.title}`}
        meta={[
          // Facebook OG Tags
          { name: 'description', content: `${episode.description}` },
          { property: 'og:title', content: `${episode.show.title}: ${episode.title}` },
          { property: 'og:description', content: `${episode.description}` },
          { property: 'og:url', content: `https://phreshr.com/watch/${episode.id}/${episode.uid}` },
          { property: 'og:type', content: 'article' },
          { property: 'og:image', content: `${episode.thumbImageUrl}` },
          // Twitter Tags
          { property: 'twitter:title', content: `${episode.show.title}: ${episode.title}` },
          { property: 'twitter:description', content: `${episode.description}` },
          { property: 'twitter:url', content: `https://phreshr.com/watch/${episode.id}/${episode.uid}` },
          { property: 'twitter:card', content: 'summary_large_image' },
          { property: 'twitter:image', content: `${episode.thumbImageUrl}` },
        ]}/>
      <PlayerHub className="player-hub">
        <WatchArea episode={episode} />
        <EpisodeCard key={episode.id} episode={episode} detail={true}/>
        <Container className="more-episodes" column padding="0 5rem">
          <h2>More {episode.show.title} Episodes:</h2>
          {episode.show.episodes.length < 3
            ? (
              <Container wrap itemMargin="0.5rem">
                {episode.show.episodes.map(ep => (
                  <EpisodeCard key={ep.id} episode={ep}/>
                  ),
                )}
              </Container>
            )
            : (
                <Container wrap justify="space-between">
                  {episode.show.episodes.map(ep => (
                    <EpisodeCard key={ep.id} episode={ep}/>
                    ),
                  )}
                </Container>
              )
          }   
        </Container>
      </PlayerHub>
    </div>
  );
};

export default compose(
  graphql(EPISODE_QUERY, {
    options: params => ({
      variables: {
        id: params.id,
      },
    }),
  }),
  displayLoadingState,
  flattenProp('data'),
  pure,
)(EpisodeDetail);
