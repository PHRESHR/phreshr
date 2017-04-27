import * as React from 'react';
import EpisodeDetail from 'ui/containers/EpisodeDetail';
import ScrollToTop from 'ui/components/ScrollToTop';
import { WatchContainer } from './styles';

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
    <WatchContainer>
      <ScrollToTop />
      <EpisodeDetail id={match.params.id} />
    </WatchContainer>
  );
}

export default Watch;
