import * as React from 'react';
import { graphql } from 'react-apollo';
import { compose, flattenProp, pure } from 'recompose';
import { Helmet } from 'react-helmet';

import displayLoadingState from 'ui/components/Loading';
import EpisodeCard from 'ui/components/EpisodeCard';
import WatchArea from 'ui/components/WatchArea';
import {DetailContainer, PlayerHub} from './styles';
import * as EPISODE_QUERY from 'ui/graphql/EpisodeQuery.graphql';

interface Props {
  Episode;
}

function EpisodeDetail(props: Props) {
  const { Episode } = props;
  const episode = Episode;
  return (
    <div className="episode-detail">
      <Helmet>
        <title>{`${episode.show.title}: ${episode.title}`}</title>
        <meta name="description" content={episode.description} />
        <meta property="og:title" content={`${episode.show.title}: ${episode.title}`} />
        <meta property="og:description" content={episode.description} />
        <meta property="og:url" content={`https://phreshr.com/watch/${episode.id}/${episode.uid}`} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={episode.thumbImageUrl} />

        <meta property="twitter:title" content={`${episode.show.title}: ${episode.title}`} />
        <meta property="twitter:description" content={episode.description} />
        <meta property="twitter:url" content={`https://phreshr.com/watch/${episode.id}/${episode.uid}`} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content={episode.thumbImageUrl} />
        <link rel="stylesheet" href="https://vjs.zencdn.net/6.0.0/video-js.css" />
        <script src="https://vjs.zencdn.net/6.0.0/video.min.js" />
      </Helmet>
      <PlayerHub className="player-hub">
        <WatchArea episode={episode} />
        <EpisodeCard key={episode.id} episode={episode} detail={true}/>
        <DetailContainer className="more-episodes" column>
          <h2>More {episode.show.title} Episodes:</h2>
          {episode.show.episodes.length < 3
            ? (
              <DetailContainer wrap padding="0" itemMargin="0.5rem">
                {episode.show.episodes.map(ep => (
                  <EpisodeCard key={ep.id} episode={ep}/>
                  ),
                )}
              </DetailContainer>
            )
            : (
                <DetailContainer wrap justify="space-between" padding="0">
                  {episode.show.episodes.map(ep => (
                    <EpisodeCard key={ep.id} episode={ep}/>
                    ),
                  )}
                </DetailContainer>
              )
          }
        </DetailContainer>
      </PlayerHub>
    </div>
  );
}

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
