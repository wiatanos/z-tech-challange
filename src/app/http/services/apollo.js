import ApolloClient from 'apollo-boost';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

// const httpLink = new HttpLink({
//     uri: 'https://api.code-challenge.ze.delivery/public/graphql'
// });

// const client = new ApolloClient({
//     link: httpLink,
//     cache: new InMemoryCache()
// })

const client = new ApolloClient({
    uri: "https://api.code-challenge.ze.delivery/public/graphql",
  });

export default client;