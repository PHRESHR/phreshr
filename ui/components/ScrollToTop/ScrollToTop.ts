import * as React from 'react';
import { compose, lifecycle } from 'recompose';

interface Props {
  children;
}
const enhance = compose(
  lifecycle({
    componentDidMount(prevProps) {
      window.scrollTo(0, 0);
    },
  }),
);

export default enhance((props: Props) => {
  const { children } = props;
  return null;
});
