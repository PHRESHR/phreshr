import * as React from 'react';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import { compose, flattenProp, pure } from 'recompose';
import { Image, Transformation } from 'cloudinary-react';

import displayLoadingState from 'ui/components/Loading';
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

  const inlineStyle = {
    backgroundImage: `url(${featured.episode.featureImageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    width: '100%',
    height: '100%',
  };
  // const state: State = {
  //   images: [...imagesList],
  // };
  // state.images.forEach(image => {
  //   const preload = new Image();
  //   preload.src = image;
  // });
  // const {images} = state;
  // console.log(images);
  // const featuredImage = images.map(image => {
  //   return {
  //     content: <img src={image}/>,
  //     preview: <img src={image}/>,
  //   };
  // });
  // console.log(featuredImage);
  return (
    <FeaturedContainer>
      <div className="preview" style={inlineStyle} />
      {/*<Image cloudName="phreshr-media" style={{ height: '100vh' }}
        publicId={featured.episode.imagePublicId}
        aspect_ratio="16:9"
        height="1440"
        dpr="auto"
        quality="auto"
        width="2560"
        crop="scale"
        gravity="center"
        format="webp">
        <Transformation height="1440" dpr="2560" quality="auto" width="auto" sizes="100vw" responsive />
      </Image>*/}
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
