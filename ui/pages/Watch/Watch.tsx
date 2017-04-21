import * as React from 'react';
import EpisodeDetail from 'ui/components/EpisodeDetail';

interface Props {
  match: {
    params: {
      id: string,
    },
  };
}

function Watch(props: Props) {
  const { match } = props;
  return (
    <EpisodeDetail id={match.params.id} />
  );
}

export default Watch;
