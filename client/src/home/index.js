import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import FETCH_BLOG from '../shared/graphql/queries/fetchBlog';

// styled components
import styled from 'styled-components/macro';
import { setRem, setColor } from '../styles';
import Mugshot from './components/mugshot';
import PostList from './components/PostList';
import IconRuler from '../shared/components/iconRuler';
import { API_URL, ALIEN } from '../shared/utils/reactConfig';

const Home = props => {
	const { data, loading } = useQuery(FETCH_BLOG);
	if (loading) {
		return <p>loading...</p>;
	}

	const blog = data.blog;
	const owner = blog.owner;

	return (
		<React.Fragment>
			<StyledSection>
				<StyledOwnerWrapper>
					<Mugshot
						url={API_URL + owner.picture.url}
						alt={owner.name}
						title={owner.name}
					/>
					<StyledBio>{owner.bio}</StyledBio>
				</StyledOwnerWrapper>
				<PostList />
				<IconRuler url={API_URL + ALIEN} />
			</StyledSection>
		</React.Fragment>
	);
};

export default Home;

const StyledSection = styled.section`grid-area: main-body;`;

const StyledOwnerWrapper = styled.div`display: table;`;
const StyledBio = styled.div`
	font-size: ${setRem(15)};
	font-weight: 700;
	color: ${setColor.primaryText};
	display: table-cell;
	vertical-align: middle;
	margin-left: auto;
	margin-right: auto;
`;
