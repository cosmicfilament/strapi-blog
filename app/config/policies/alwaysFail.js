module.exports = async (ctx, next) => {
	console.log('Always fail bitch');

	return ctx.unauthorized('This endpoint is verboten');
};
