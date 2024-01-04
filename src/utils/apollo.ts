import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core';

// HTTP connection to the API
const httpLink = createHttpLink({
    // You should use an absolute URL here
    uri: import.meta.env.API_URL,
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apollo = new ApolloClient({
    link: httpLink,
    cache,
});

export default apollo;

