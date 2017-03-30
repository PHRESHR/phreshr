import * as React from 'react';
import { Link } from 'react-router-dom';
import { CardInfo, ShowEntry } from './styles';
import { AspectRatio16x9 } from 'ui/styles/AspectRatios';

interface Props {
  show: {
    id: string,
    uid: string,
    title: string,
    description: string,
    posterImageUrl: string,
    featureImageUrl: string,

  };
  detail?: boolean;
}

const ShowCard: React.SFC<Props> = ({ show, detail }) => {
  if (detail) {
    return (
      <CardInfo className="show-view">
        <section className="show-marquee">
          <div className="media">
            <AspectRatio16x9>
              <div className="show-image">
                <img src={show.featureImageUrl} alt={show.title}/>
              </div>
            </AspectRatio16x9>
          </div>
          <div className="show-info">
            <h1>{show.title}</h1>
            <p>{show.description}</p>
          </div>
        </section>
      </CardInfo>
    );
  } else {
    return (
      <ShowEntry className="item show-item">
        <Link to={`/show/${show.id}/${show.uid}`}>
          <img src={show.posterImageUrl} alt={show.title}/>
          <h1>{show.title}</h1>
          <p>{show.description}</p>
        </Link>
      </ShowEntry>
    );
  }
};

export default ShowCard;
