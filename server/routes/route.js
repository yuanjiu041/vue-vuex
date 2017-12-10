const Router = require('koa-router')

module.exports = () => {
	const router = new Router()

	router.all('/checkout_heart', async ctx => {
		ctx.body = 'ok'
	})

	router.get('/index', async ctx => {
		await ctx.render('index', {name: 'yexun'})
	})

	router.get('/as', async ctx => {
		ctx.body = 'sb'
	})

	return router
}