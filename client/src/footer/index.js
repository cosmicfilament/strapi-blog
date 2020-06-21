import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import FETCH_BLOG from '../shared/graphql/queries/fetchBlog';

// styled components
import styled from 'styled-components/macro';
import { setRem } from '../styles';
// local
import { TWITTER, GITHUB, FACEBOOK } from '../shared/utils/reactConfig';
import { API_URL } from '../shared/utils/reactConfig';
import SocialMediaLink from './components/socialmedialink';

const Footer = props => {
	const { data, loading } = useQuery(FETCH_BLOG);

	if (loading) {
		return <p>loading...</p>;
	}

	const blog = data.blog;
	const owner = blog.owner;

	return (
		<StyledFooter>
			<StyledDivTop>
				<span>
					<SocialMediaLink
						url={owner.facebook_profile_url}
						img={API_URL + FACEBOOK}
						alt='Facebook'
					/>

					<SocialMediaLink
						url={owner.twitter_acct_url}
						img={API_URL + TWITTER}
						alt='twitter'
					/>

					<SocialMediaLink
						url={owner.github_acct_url}
						img={API_URL + GITHUB}
						alt='github'
					/>
				</span>
			</StyledDivTop>
			<StyledDivMid>
				<p>{blog.description}</p>
			</StyledDivMid>
			<StyledDivBtm>
				<StyledP>© Copyright 2020 The Cosmic Filament</StyledP>
			</StyledDivBtm>
		</StyledFooter>
	);
};

export default Footer;

const StyledFooter = styled.footer`
	grid-area: footer;

	display: grid;
	grid-template-rows: repeat(3, auto);
	grid-template-columns: auto;

	grid-template-areas: "left social right" "left description right"
		"left copyright right";

	font-size: ${setRem(15)};
`;

const StyledDivTop = styled.div`
	margin: ${setRem(10)} auto 0;
	grid-area: social;
`;
const StyledDivMid = styled.div`
	margin-top: ${setRem(10)};
	grid-area: description;
`;
const StyledDivBtm = styled.div`
	margin: ${setRem(10)} auto 0;
	grid-area: copyright;
`;

const StyledP = styled.p`
	color: rgba(0, 0, 0, .7);
	text-shadow: 0 1px rgba(255, 255, 255, 0.2);
`;
