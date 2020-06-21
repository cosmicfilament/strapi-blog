'use strict';
const _ = require('lodash');
const { sanitizeEntity } = require('strapi-utils');
const { join } = require('lodash');

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
	async findAnd (ctx) {
		console.log('Context object', ctx);

		console.log('*** Current User ***\n', ctx.state.user);
		const allPosts = await Promise.all(
			ctx.query['categories.name'].map(async category => {
				const posts = await strapi.services.post.find({
					'categories.name': category
				});
				return posts;
			})
		);

		const intersection = allPosts.reduce(
			(acc, list) =>
				_.intersectionWith(
					acc,
					list,
					(first, second) => first.id === second.id
				),
			allPosts[0]
		);

		console.log('Intersection: ', intersection);
		return intersection.map(entity =>
			sanitizeEntity(entity, { model: strapi.models.post })
		);
	}
};
