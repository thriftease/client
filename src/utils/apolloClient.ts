import i18nClient from '@/utils/i18nClient';
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core';
import { ApolloLink } from '@apollo/client/link/core';

// HTTP connection to the API
const httpLink = createHttpLink({
    // You should use an absolute URL here
    uri: import.meta.env.API_URL,
});

// Cache implementation
const cache = new InMemoryCache();

const i18nLink = new ApolloLink((operation, forward) => {
    // Modify headers as per your requirement
    const headers = operation.getContext().headers || {};

    operation.setContext({
        ...headers,
        "Accept-Language": i18nClient.global.locale
    });
    return forward(operation);
});

// Create the apollo client
const apollo = new ApolloClient({
    link: i18nLink.concat(httpLink),
    cache,
});

export default apollo;

