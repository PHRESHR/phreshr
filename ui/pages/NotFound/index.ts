import AsyncComponent from 'ui/components/AsyncComponent';

const NotFound = AsyncComponent(() =>
  System.import('./NotFound').then(module => module.default),
);

export default NotFound;
