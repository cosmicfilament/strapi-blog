module.exports = ({ env }) => ({
	host: env('HOST', '0.0.0.0'),
	port: env.int('PORT', 1337),
	cron: {
		enabled: true
	},
	admin: {
		watchIgnoreFiles: [ '**/rest/*.rest' ]
	}
});
