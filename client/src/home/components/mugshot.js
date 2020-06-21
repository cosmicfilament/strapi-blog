import React from 'react';

import styled from 'styled-components/macro';
import { setRem } from '../../styles';

const Mugshot = ({ url, alt, title }) => {
	return <StyledImage src={url} alt={alt} title={title} height='50px' />;
};

export default Mugshot;

const StyledImage = styled.img`
	border-radius: 50%;
	display: inline-block;
	vertical-align: middle;
	margin-right: ${setRem(20)};
`;
