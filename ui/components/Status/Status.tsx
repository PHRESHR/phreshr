import * as React from 'react';
import { Route } from 'react-router-dom';

interface Props {
  code: number;
  children?: any;
}

function Status(props: Props) {
  const { code, children } = props;
  const status = ({ staticContext }) => {
    if (staticContext) {
      staticContext.status = code;
    }
    return children || null;
  };

  return (
    <Route render={status} />
  );
}

export default Status;
