import * as React from 'react';
import { compose, lifecycle, pure, setPropTypes } from 'recompose';
import { Helmet } from 'react-helmet';

interface Props {
  route;
}

function NotFound(props: Props) {
  console.log(props);
  const {} = props;
  return (
    <div>
      <Helmet>
        <title>Page Not Found</title>
      </Helmet>
      <h1>Page not found</h1>
    </div>
  );
};

const propTypes = {
  staticContext: React.PropTypes.shape({}),
};

const componentLifecycle = lifecycle({
  componentWillMount() {
    console.log(this.props.staticContext);
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
