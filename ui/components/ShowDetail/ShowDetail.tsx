import * as React from 'react';
import { graphql } from 'react-apollo';
import { compose, flattenProp, pure } from 'recompose';
import { Helmet } from 'react-helmet';

import displayLoadingState from 'ui/components/Loading';
import ShowCard from 'ui/components/ShowCard';
import EpisodeCard from 'ui/components/EpisodeCard';
import {DetailContainer, ShowLede} from './styles';
import { AspectRatio16x9 } from 'ui/styles/AspectRatios';
import * as SHOW_QUERY from 'ui/graphql/ShowQuery.graphql';

interface Props {
  Show;
}

function ShowDetail(props: Props) {
  const { Show } = props;
  const show = Show;
  return (
    <div className="show-detail">
      <Helmet>
        <title>{show.title}</title>
        <meta name="description" content={show.description} />
        <meta property="og:title" content={`${show.title}: ${show.title}`} />
        <meta property="og:description" content={show.description} />
        <meta property="og:url" content={`https://phreshr.com/watch/${show.id}/${show.uid}`} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={show.featureImageUrl} />

        <meta property="twitter:title" content={show.title} />
        <meta property="twitter:description" content={show.description} />
        <meta property="twitter:url" content={`https://phreshr.com/watch/${show.id}/${show.uid}`} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content={show.featureImageUrl} />
      </Helmet>
      <ShowLede padding="0">
        {show &&
          <ShowCard key={show.id} show={show} detail={true}/>
        }
      </ShowLede>
      <DetailContainer className="more-episodes" column>
        <h2>More Episodes:</h2>
        {show.episodes.length < 3
            ? (
              <DetailContainer wrap padding="0" itemMargin="0.5rem">
                {show.episodes.map(ep => (
                  <EpisodeCard key={ep.id} episode={ep}/>
                  ),
                )}
              </DetailContainer>
            )
            : (
                <DetailContainer wrap justify="space-between" padding="0">
                  {show.episodes.map(ep => (
                    <EpisodeCard key={ep.id} episode={ep}/>
                    ),
                  )}
                </DetailContainer>
              )
          }
      </DetailContainer>
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
