import { setColor, setFont, setRem } from '../../styles';

export const setTitleStyle = (color = setColor.reddishText) => {
	return `
		color: ${color};
		font-family: ${setFont.lora};
		font-size: ${setRem(25)};
		font-weight: 400;
	`;
};
