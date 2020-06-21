module.exports = async (ctx, next) => {
	console.log('Is Target User logged in');

	if (ctx.state.user) {
		if (!ctx.request.query.user) {
			return ctx.unauthorized(
				'isTargetUserLoggedIn - Please specify a logged in user with params: user=${user.id}'
			);
		}

		console.log(
			'isTargetUserLoggedIn - query parameter supplied: ',
			ctx.request.query.user
		);

		const targetUser = ctx.request.query.user.toString();
		const loggedInUser = ctx.state.user.id.toString();

		if (targetUser === loggedInUser) {
			return await next();
		}
		else {
			return ctx.unauthorized(
				'isTargetUserLoggedIn - Target user is different than logged in user'
			);
		}
	}
	return ctx.unauthorized('isTargetUserLoggedIn - You need to be logged in.');
};
