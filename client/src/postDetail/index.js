import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import FETCH_POST_DETAIL from '../shared/graphql/queries/fetchPostDetail';

import ReactMarkdown from 'react-markdown';

import styled from 'styled-components/macro';
import { setTitleStyle } from '../shared/styles/PostStyles';
import { setColor } from '../styles';
import PostedDate from '../shared/components/postedDate';

import { API_URL } from '../shared/utils/reactConfig';

const PostDetail = props => {
	// title at the top
	// date
	// content
	// load images in correct location

	const { data, loading } = useQuery(FETCH_POST_DETAIL, {
		variables: { postId: props.match.params.id }
	});

	if (loading) {
		return <p>loading...</p>;
	}

	const post = data.post;
	const categories = post.categories;

	return (
		<StyledSection>
			<StyledTitle>{post.title}</StyledTitle>
			<PostedDate updatedAt={post.updatedAt} />
			<StyledReactMarkdown
				source={post.content}
				transformImageUri={uri => API_URL + uri}
			/>
			<ul>
				{categories.map(category => <li key={category.id}>{category.name}</li>)}
			</ul>
		</StyledSection>
	);
};

export default PostDetail;

const StyledSection = styled.section`grid-area: main-body;`;
const StyledTitle = styled.div`${setTitleStyle(setColor.reddishText)};`;
const StyledReactMarkdown = styled(ReactMarkdown)`font-weight: 400;`;
