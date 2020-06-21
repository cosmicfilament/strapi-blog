import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import FETCH_BLOG from '../shared/graphql/queries/fetchBlog';

// styled components
import styled from 'styled-components/macro';
import { setFont, setRem, setColor, screenWidth } from '../styles';
import { API_URL, ENTERPRISE_IMG } from '../shared/utils/reactConfig';
import IconRuler from '../shared/components/iconRuler';

const Header = () => {
	const result = useQuery(FETCH_BLOG);
	if (result.loading) {
		return <p>loading...</p>;
	}

	console.log('RESULT: ', result);
	const data = result.data;
	console.log('data: ', data);
	const blog = data.blog;

	return (
		<StyledWrapper>
			<StyledLink to={'/'}>{blog.name}</StyledLink>
			<IconRuler url={API_URL + ENTERPRISE_IMG} />
		</StyledWrapper>
	);
};

export default Header;

const StyledWrapper = styled.div`
	grid-area: head;

	/* media less than phablet size */
	margin: ${setRem(10)} auto;
	font-size: ${setRem(15)};

	@media only screen and (min-width: ${screenWidth.phablet}) {
		font-size: ${setRem(23)};
	}

	@media only screen and (min-width: ${screenWidth.tablet}) {
		font-size: ${setRem(36)};
	}

	@media only screen and (min-width: ${screenWidth.desktop}) {
		font-size: ${setRem(48)};
	}
`;

const StyledLink = styled(Link)`
	color: ${setColor.darkBlueText};
	font-family: ${setFont.lora};
	font-weight: 700;
	text-decoration: none;
	text-shadow: 2px 2px 4px ${setColor.grey};

	grid-column: 2/-1;
	
	:hover {
		color: ${setColor.darkBlueText};
		text-shadow: 2px 2px 16px ${setColor.greyDark_2};
	}
	:active {
		color: ${setColor.darkBlueText};
		text-shadow: 2px 2px 16px ${setColor.greyDark_1};
	}	
	:visited {
		color: ${setColor.darkBlueText};
	}
`;
