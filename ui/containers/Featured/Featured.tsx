import * as React from 'react';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import { compose, flattenProp, pure } from 'recompose';
import { Image, Transformation } from 'cloudinary-react';

import displayLoadingState from 'ui/components/Loading';
import EpisodeList from 'ui/containers/EpisodeList';
import Collapse from 'ui/components/Collapse';
import { AspectRatio5x2 } from 'ui/styles/AspectRatios';
import FeaturedContainer from './styles';
import * as FEATUREDS_QUERY from 'ui/graphql/AllFeaturedsQuery.graphql';

interface Props {
  allFeatureds;
  Featured;
}

interface State {
  images: string[];
}

function Featured(props: Props) {
  const { Featured, allFeatureds } = props;
  const imagesList = allFeatureds.map(featured => featured.episode.featureImageUrl);
  const featured = allFeatureds[0];

  return (
    <FeaturedContainer>
      <Image cloudName="phreshr-media" style={{
        backgroundSize: 'contain',
        backgroundPosition: 'center center' }}
        publicId={featured.episode.imagePublicId}
        aspect_ratio="16:9"
        height="1080"
        dpr="auto"
        quality="auto"
        crop="scale"
        format="webp">
        <Transformation height="1080" dpr="auto" quality="auto" width="auto" />
      </Image>
      <div className="featured-info">
        <h3>{featured.episode.show.title} | <span>Season.{featured.episode.season}</span></h3>
        <Link to={`/watch/${featured.episode.id}/${featured.episode.uid}`}>
          <h1>{featured.episode.title}</h1>
        </Link>
      </div>
      <Collapse>
        <EpisodeList />
      </Collapse>
    </FeaturedContainer>
  );
}

export default compose(
  graphql(FEATUREDS_QUERY),
  displayLoadingState,
  flattenProp('data'),
  pure,
)(Featured);
