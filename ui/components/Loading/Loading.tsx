import * as React from 'react';
import { branch, renderComponent } from 'recompose';

function Loading() {
  return (
    <div>Loading</div>
  );
};

const displayLoadingState = branch(
  props => props.data.loading,
  renderComponent(Loading),
);

export default displayLoadingState;
