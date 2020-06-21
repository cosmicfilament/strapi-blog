module.exports = async (ctx, next) => {
	console.log('DemoPolicy');

	return await next();
};
