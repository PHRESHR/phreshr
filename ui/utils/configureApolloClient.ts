import { ApolloClient, createNetworkInterface } from 'react-apollo';

const networkInterface = createNetworkInterface({
  uri: process.env.GRAPHQL_ENDPOINT,
});

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};
    }

    // get the authentication token from local storage if it exists
    if (localStorage.getItem('auth0IdToken')) {
      req.options.headers.authorization = `Bearer ${localStorage.getItem('auth0IdToken')}`;
    }
    next();
  },
}]);

export default function configureApolloClient(options) {
  return new ApolloClient(Object.assign({}, {
    networkInterface,
    dataIdFromObject: ({ id }) => id || null,
  }, options));
};
