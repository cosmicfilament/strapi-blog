import gql from 'graphql-tag';

const FETCH_ALL_POST_EXCERPTS = gql`
	{
		posts {
			id
			title
			updatedAt
			excerpt
			author {
				id
				username
			}
			categories {
				id
				name
			}
		}
	}
`;

export default FETCH_ALL_POST_EXCERPTS;
