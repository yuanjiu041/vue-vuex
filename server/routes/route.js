const Router = require('koa-router')

module.exports = () => {
	const router = new Router()

	router.all('/checkout_heart', async ctx => {
		ctx.body = 'ok'
	})

	router.get('/', async ctx => {
		await ctx.render('index')
	})

	return router
}