import ApolloClient from 'apollo-boost';

const apolloClient = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URI,
  request: (operation) => {
    const token = localStorage.getItem('token');
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    });
  },
});

export default apolloClient;