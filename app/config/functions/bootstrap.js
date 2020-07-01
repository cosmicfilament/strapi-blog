module.exports = async () => {
	const result = await strapi.query('blog').find();
	console.log(result);
};
