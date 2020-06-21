import React from 'react';
import styled from 'styled-components/macro';
import ReactMarkdown from 'react-markdown';
import { setRem } from '../../styles';
import ItemLink from './itemLink';
import PostedDate from '../../shared/components/postedDate';

const ListItem = ({ post }) => {
	return (
		<StyledListItem>
			<ItemLink id={post.id} title={post.title} />
			<PostedDate updatedAt={post.updatedAt} />
			<StyledReactMarkdown source={post.excerpt} />
		</StyledListItem>
	);
};

export default ListItem;

const StyledListItem = styled.li`margin-bottom: ${setRem(20)};`;

const StyledReactMarkdown = styled(ReactMarkdown)`font-weight: 400;`;
