import AsyncComponent from 'ui/components/AsyncComponent';

const Show = AsyncComponent(() =>
  System.import('./Show').then(module => module.default),
);

export default Show;
