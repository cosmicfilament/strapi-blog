import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider, useQuery } from '@apollo/react-hooks';
import App from './App';
import client from './shared/utils/apolloClient';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

import FETCH_BLOG from './shared/graphql/queries/fetchBlog';

function IsThereAnybodyOutThere () {
	//const { data, error, loading } = useQuery(FETCH_BLOG);
	const { data, error, loading } = useQuery(FETCH_BLOG);
	try {
		if (loading) {
			return <p>loading ...</p>;
		}
		if (error) {
			console.log(error);
			return <p>Error loading from Server. Try again later.</p>;
		}
		console.log(data);
		//client.writeQuery({ Blog: data.blog });
		return <App />;
	} catch (error) {
		console.log(error);
		return <p>Error loading from Server. Try again later.</p>;
	}
}

ReactDOM.render(
	<Router>
		<ApolloProvider client={client}>
			<IsThereAnybodyOutThere />
		</ApolloProvider>
	</Router>,
	document.getElementById('root')
);
