module.exports = async (ctx, next) => {
	console.log('Is logged in');

	if (ctx.state.user) {
		return await next();
	}
	return ctx.unauthorized('You need to be logged in.');
};
