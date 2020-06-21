import React from 'react';

import styled from 'styled-components/macro';
import { setRem } from '../../styles';

const IconRuler = ({ url }) => {
	return (
		<StyledDiv>
			<img src={url} alt='ruler' />
		</StyledDiv>
	);
};

export default IconRuler;

const StyledDiv = styled.div`
	margin: ${setRem(10)} auto;
	text-align: center;
`;
