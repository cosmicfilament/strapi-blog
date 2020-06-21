import React from 'react';

import styled from 'styled-components/macro';
import { setRem } from '../../styles';

const SocialMediaLink = ({ url, img, alt }) => {
	const _url = url.startsWith('http') ? url : 'https://' + url;
	return (
		<a href={_url} target='_blank' rel='noopener noreferrer'>
			<StyledImage src={img} alt={alt} width='30px' />
		</a>
	);
};

export default SocialMediaLink;

const StyledImage = styled.img`margin: 0 ${setRem(5)};`;
