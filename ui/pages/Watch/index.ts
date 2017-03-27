import AsyncComponent from 'ui/components/AsyncComponent';

const Watch = AsyncComponent(() =>
  System.import('./Watch').then(module => module.default),
);

export default Watch;
