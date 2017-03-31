import * as React from 'react';
import { compose, lifecycle, pure, setPropTypes } from 'recompose';
import * as Helmet from 'react-helmet';

interface Props {}

function Login(props: Props) {
  const {} = props;
  return null;
}

const propTypes = {
  auth: React.PropTypes.shape({}),
};

const componentLifecycle = lifecycle({
  componentDidMount() {
    console.log(this.props);
    this.props.auth.login();
  },
});

export default compose(
  setPropTypes(propTypes),
  componentLifecycle,
  pure,
)(Login);
