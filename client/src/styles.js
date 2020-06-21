import { css } from 'styled-components/macro';

export const setColor = {
	primaryText: '#222',
	reddishText: '#d9455f',
	darkBlueText: '#0033ee',

	bkgndBlue: '#abceee',

	greyLight_1: '#faf9f9',
	greyLight_2: '#f4f2f2',
	greyLight_3: '#f0eeee',
	greyLight_4: '#ccc',
	grey: '#808080',
	greyDark_1: '#333',
	greyDark_2: '#777',
	greyDark_3: '#999'
};

export const setFont = {
	roboto: "'Roboto', sans-serif;",
	lora: "'Lora', serif;",
	merriweather: "'Merriweather', serif;"
};

export const screenWidth = {
	large: '1200px',
	desktop: '1024px',
	tablet: '768px',
	phablet: '480px',
	phone: '320px'
};

export const maxScreenWidth = '1400px';
export const minScreenWidth = '320px';

export const setRem = (number = 10) => {
	return `${number / 10}rem`;
};

export const clearFix = css`
	&::after {
		content: "";
		display: table;
		clear: both;
	}
`;

export const absCenter = css`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate()(-50%, -50%);
`;

export const centerText = css`
	margin: 0 auto;
	text-align: center;
`;
