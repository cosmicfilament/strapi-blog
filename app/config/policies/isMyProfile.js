module.exports = async (ctx, next) => {
	if (ctx.state.user) {
		if (!ctx.params.id) {
			return ctx.unauthorized(
				'isMyProfile - Please use this policy only in findOne api endpoint'
			);
		}

		const targetUser = ctx.params.id.toString();
		const loggedInUser = ctx.state.user.id.toString();

		if (targetUser === loggedInUser) {
			return await next();
		}
		else {
			return ctx.unauthorized(
				'isMyProfile - Target user is different than logged in user'
			);
		}
	}
	return ctx.unauthorized('isMyProfile - You need to be logged in.');
};
