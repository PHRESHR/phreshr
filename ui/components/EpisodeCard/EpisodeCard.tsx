import * as React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'cloudinary-react';
import { ShareButtons, ShareCounts, generateShareIcon } from 'react-share';
import { CardInfo, CardEntry } from './styles';
import { AspectRatio16x9 } from 'ui/styles/AspectRatios';

interface Props {
  episode: {
    id: string,
    uid: string,
    show: {
      title: string;
    },
    title: string,
    description: string,
    thumbImageUrl: string,
    topics: [{id, name}],
  };
  detail?: boolean;
}

function Episode(props: Props) {
  const { episode, detail } = props;
  const { FacebookShareButton, TwitterShareButton } = ShareButtons;
  const { FacebookShareCount } = ShareCounts;
  const FacebookIcon = generateShareIcon('facebook');
  const TwitterIcon = generateShareIcon('twitter');
  if (detail) {
    return (
      <CardInfo className="episode-info">
        <header>
          <h3>{episode.show.title}</h3>
          <h1>{episode.title}</h1>
        </header>
        <div className="episode-details">
          <div className="inner">
            <div className="episode-description">
              <h4>Description</h4>
              <p>{episode.description}</p>
            </div>
            <div className="episode-topics">
              <h4>Tags</h4>
              {episode.topics.map(topic =>
                <div key={topic.id}>{topic.name}</div>,
              )}
            </div>
          </div>
        </div>
      </CardInfo>
    );
  } else {
    return (
      <CardEntry className="item episode-item">
        <Link to={`/watch/${episode.id}/${episode.uid}`}>
          <AspectRatio16x9>
            <div>
              {/*<Image cloudName="phreshr-media" publicId={episode.thumbImageUrl} width="600" crop="scale" type="fetch" />*/}
              <img src={episode.thumbImageUrl} alt={episode.title}/>
            </div>
          </AspectRatio16x9>
          {episode.show && <h3>{episode.show.title}</h3>}
          <h1>{episode.title}</h1>
          <p>{episode.description}</p>
          {episode.topics && episode.topics.map(topic =>
            <div key={topic.id}>{topic.name}</div>,
          )}
        </Link>
      </CardEntry>
  );
  }
}

export default Episode;
