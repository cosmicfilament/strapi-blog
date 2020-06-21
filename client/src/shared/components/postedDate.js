import React from 'react';
import styled from 'styled-components/macro';
import { setRem, setColor } from '../../styles';

const PostedDate = ({ updatedAt }) => {
	return (
		<StyledDate>
			Last Updated: {new Date(updatedAt).toLocaleString()}
		</StyledDate>
	);
};

export default PostedDate;

const StyledDate = styled.div`
	color: ${setColor.darkBlueText};
	margin-bottom: ${setRem(5)};
`;
