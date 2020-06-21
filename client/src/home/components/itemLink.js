import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components/macro';
import { setTitleStyle } from '../../shared/styles/PostStyles';
import { setColor } from '../../styles';

const ItemLink = ({ id, title }) => {
	return <StyledLink to={`/${id}`}>{title}</StyledLink>;
};

export default ItemLink;

const StyledLink = styled(Link)`
	${setTitleStyle(setColor.reddishText)};
	text-decoration: none;
	:hover {
		color: ${setColor.reddishText};
		text-shadow: 2px 2px 16px ${setColor.greyDark_2};
	}
	:active {
		color: ${setColor.reddishText};
		text-shadow: 2px 2px 16px ${setColor.greyDark_1};
	}
	:visited {
		color: ${setColor.reddishText};
	}
`;
