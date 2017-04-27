import * as React from 'react';
import ShowDetail from 'ui/containers/ShowDetail';

interface Props {
  match: {
    params: {
      id: string,
    },
  };
}

function Show(props: Props) {
  const { match } = props;
  return (
    <div>
      <ShowDetail id={match.params.id} />
    </div>
  );
}

export default Show;
