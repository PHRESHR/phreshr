import * as React from 'react';
import Player from 'ui/components/Player';

interface Props {
  episode?;
  match?: {
    params: {
      id: string,
    },
  };
}

function PlayerHub(props: Props) {
  const {episode, match} = props;

  const vjsOptions = {
    autoplay: false,
    controls: true,
    aspectRatio: '16:9',
    sources: [{
      src: `${episode.videoUrl}`,
      type: 'video/mp4',
    }],
    plugins: {
      // dock: {
      //   thumb: `${episode.thumbImageUrl}`,
      //   meta: `${episode.show.title}`,
      //   title: `${episode.title}`,
      // },
    },
  };

  return (
    <section className="watch-area">
      <Player {...vjsOptions} />
    </section>
  );
};

export default PlayerHub;
