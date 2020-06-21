import gql from 'graphql-tag';

const FETCH_POST_DETAIL = gql`
	query fetchPostDetail($postId: ID!) {
		post(id: $postId) {
			id
			title
			updatedAt
			content
			categories {
				id
				name
			}
			Media {
				id
				name
				alternativeText
				width
				height
				url
			}
		}
	}
`;

export default FETCH_POST_DETAIL;
