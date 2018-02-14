const fs = require('fs')
const Router = require('koa-router')
const createBundleRenderer = require('vue-server-renderer').createBundleRenderer
const createApp = require('../../build/vue-ssr-server-bundle.json')

const render = createBundleRenderer(createApp, {
	template: fs.readFileSync('build/mytemplate.html', 'utf-8')
})

module.exports = () => {
	const router = new Router()

	router.all('/checkout_heart', async ctx => {
		ctx.body = 'ok'
	})

	router.get('/', ctx => {
		render.renderToString(ctx, (err, html) => {
			ctx.body = html
		})
	})

  router.get('/api/index', async ctx => {
    ctx.body = `Hello everyone, my name is yexun.`
  })

	return router
}