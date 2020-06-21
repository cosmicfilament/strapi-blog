import gql from 'graphql-tag';

const FETCH_BLOG = gql`
	{
		blog {
			id
			name
			description
			site_avatar_or_background {
				id
				width
				height
				name
				alternativeText
				caption
				url
			}
			owner {
				id
				username
				name
				email
				facebook_profile_url
				twitter_acct_url
				github_acct_url
				bio
				picture {
					id
					name
					alternativeText
					width
					height
					url
				}
			}
		}
	}
`;

export default FETCH_BLOG;
