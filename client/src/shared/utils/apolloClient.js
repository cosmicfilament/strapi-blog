import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-link';
import { onError } from 'apollo-link-error';

import { API_URL } from './reactConfig';

const errorLink = onError(({ graphQLErrors, networkError }) => {
	if (graphQLErrors) {
		graphQLErrors.map(({ message, locations, path }) =>
			console.log(
				`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
			)
		);
		graphQLErrors = null;
	}
	if (networkError) console.log(`[Network error]: ${networkError}`);
});

const cache = new InMemoryCache({});

const httpLink = new HttpLink({
	uri: `${API_URL}/graphql`,
	opts: { credentials: 'same-origin' }
});

const link = ApolloLink.from([ errorLink, httpLink ]);

const client = new ApolloClient({
	cache,
	link
});
console.log(client);

export default client;
