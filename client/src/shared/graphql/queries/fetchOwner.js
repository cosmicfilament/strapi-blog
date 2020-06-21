import gql from 'graphql-tag';

const FETCH_BLOG_OWNER = gql`
	{
		users(where: { role: { type_eq: "blogowner" } }) {
			id
			name
			username
			bio
			email
			twitter_acct_url
			facebook_profile_url
			github_acct_url
		}
	}
`;

export default FETCH_BLOG_OWNER;
