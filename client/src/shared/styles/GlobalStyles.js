import { createGlobalStyle } from 'styled-components/macro';
import { API_URL, BACKGROUND_IMG } from '../../shared/utils/reactConfig';
import {
	setColor,
	setFont,
	setRem,
	screenWidth,
	maxScreenWidth,
	minScreenWidth
} from '../../styles';
const GlobalStyles = createGlobalStyle`

*,
*::after,
*::before {
	margin: 0;
	padding: 0;
	box-sizing: inherit;
}
html {
  font-size: 62.5%;
  /* bkgndBlue */
  background-image: linear-gradient(#abceeee1,#abceeee1),
		url(${API_URL + BACKGROUND_IMG});
}

body{
  box-sizing: border-box;
  color:${setColor.primaryText};
  font-family: ${setFont.merriweather};
  font-weight: 300;
  min-width: ${minScreenWidth};
  max-width: ${maxScreenWidth};
}

/* style root as a grid container*/
#root {

	max-width: ${maxScreenWidth};
	height: auto;
	display: grid;

	grid-template-rows: 110px auto auto;
	grid-template-columns: 1fr 80% 1fr;
	grid-template-areas: "left-margin head right-margin"
		"left-margin main-body right-margin" "left-margin footer right-margin";

	grid-gap: ${setRem(10)};

	@media only screen and (min-width: ${screenWidth.phablet}) {
		grid-template-columns: 1fr 70% 1fr;
		font-size: ${setRem(23)};
	}

	@media only screen and (min-width: ${screenWidth.tablet}) {
		grid-template-columns: 1fr 60% 1fr;
		font-size: ${setRem(36)};
	}

	@media only screen and (min-width: ${screenWidth.desktop}) {
		font-size: ${setRem(48)};
	}

	@media only screen and (min-width: ${screenWidth.large}) {
		grid-template-columns: 1fr 50% 1fr;
		font-size: ${setRem(48)};
	}
}

section, article, aside, p, div {
  font-size: ${setRem(15)};
}

h1 {
  font-size: ${setRem(30)};
  margin: ${setRem(7)} 0;
}

h2 {
  font-size: ${setRem(25)};
  margin: ${setRem(7)} 0;
}

h3 {
  font-size: ${setRem(20)};
  margin: ${setRem(7)} 0;
}
`;

export default GlobalStyles;
