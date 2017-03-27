import * as React from 'react';
import ShowDetail from 'ui/components/ShowDetail';

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
      <h1>Show</h1>
      <ShowDetail id={match.params.id} />
    </div>
  );
}

export default Show;
