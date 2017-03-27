import * as React from 'react';
import { Link } from 'react-router-dom';
import ShowEntry from 'ui/styles/ShowEntry';

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
      <div className="show-view">
        <section className="show-marquee">
          <div className="show-image">
            <img src={show.featureImageUrl} alt={show.title}/>
          </div>
          <div className="show-info">
            <h1>{show.title}</h1>
            <p>{show.description}</p>
          </div>
        </section>
      </div>
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
