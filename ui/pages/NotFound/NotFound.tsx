import * as React from 'react';
import { compose, lifecycle, pure, setPropTypes } from 'recompose';
import * as Helmet from 'react-helmet';

function NotFound() {
  return (
    <div>
      <Helmet title="Page Not Found"/>
      <h1>Page not found</h1>
    </div>
  );
};

const propTypes = {
  staticContext: React.PropTypes.shape({}),
};

const componentLifecycle = lifecycle({
  componentWillMount() {
    if (this.props.staticContext) {
      this.props.staticContext.status = 404;
    }
  },
});

export default compose(
  setPropTypes(propTypes),
  componentLifecycle,
  pure,
)(NotFound);
