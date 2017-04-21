import * as React from 'react';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import { compose, flattenProp, pure } from 'recompose';

import displayLoadingState from 'ui/components/Loading';
import { AspectRatio5x2 } from 'ui/styles/AspectRatios';
import FeaturedContainer from './styles';
import * as FEATUREDS_QUERY from 'ui/graphql/AllFeaturedsQuery.graphql';

interface Props {
  allFeatureds;
  Featured;
}

function Featured(props: Props) {
  const { Featured, allFeatureds } = props;
  const featured = allFeatureds[0];
  console.log(featured);
  const inlineStyle = {
    backgroundImage: `url(${featured.episode.featureImageUrl})`,
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
  };
  return (
    <FeaturedContainer>
      <div className="preview" style={inlineStyle} />
      <div className="featured-info">
        <h3>{featured.episode.show.title} | <span>Season.{featured.episode.season}</span></h3>
        <Link to={`/watch/${featured.episode.id}/${featured.episode.uid}`}>
          <h1>{featured.episode.title}</h1>
        </Link>
      </div>
    </FeaturedContainer>
  );
}

export default compose(
  graphql(FEATUREDS_QUERY),
  displayLoadingState,
  flattenProp('data'),
  pure,
)(Featured);
