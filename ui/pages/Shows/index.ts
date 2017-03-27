import AsyncComponent from 'ui/components/AsyncComponent';

const Shows = AsyncComponent(() =>
  System.import('./Shows').then(module => module.default),
);

export default Shows;
