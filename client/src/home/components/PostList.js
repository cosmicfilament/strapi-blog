import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import FETCH_ALL_POST_EXCERPTS from '../../shared/graphql/queries/fetchAllPostExcerpts';

// styled components
import styled from 'styled-components/macro';
import { setRem } from '../../styles';

import ListItem from './listItem';

const PostList = () => {
	const { data, loading } = useQuery(FETCH_ALL_POST_EXCERPTS);

	if (loading) {
		return <p>loading ...</p>;
	}

	const posts = data.posts;

	return (
		<StyledPostList>
			{posts.map(post => <ListItem key={post.id} post={post} />)}
		</StyledPostList>
	);
};

export default PostList;

const StyledPostList = styled.ul`
	list-style-type: none;
	text-align: left;
	margin: ${setRem(40)} ${setRem(20)};
`;
