const API_URL_DEVELOPMENT = 'http://192.168.1.68:1337';
const API_URL_PRODUCTION = 'http://localhost:1337';

export const API_URL =
	process.env.NODE_ENV === 'development'
		? API_URL_DEVELOPMENT
		: API_URL_PRODUCTION;

export const TWITTER = '/uploads/iconfinder_Twitter_381625_e26835b390.png';
export const GITHUB = '/uploads/iconfinder_github_1107228_ba19c069d5.png';
export const FACEBOOK =
	'/uploads/iconfinder_facebook_right_236857_784566e38a.png';

export const BACKGROUND_IMG =
	'/uploads/G4_K7cq_RH_nc_Ua_1824x0_8_QNQ_s_JC_2_53de3006a6.png';

export const ENTERPRISE_IMG = '/uploads/enterprise_sm_204bf5b7bf.png';

export const ALIEN = '/uploads/alien_sm_8a1ce2725c.png';
