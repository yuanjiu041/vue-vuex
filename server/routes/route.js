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

  router.get('/yx/api/index', async ctx => {
    ctx.body = `Hello everyone, my name is yexun.`
  })

  router.get('*', async (ctx) => {
    ctx.body = await new Promise((resolve, reject) => {
      render.renderToString(ctx, (err, html) => {
        if (err) return reject(err)
        resolve(html)
      })
    })
  })

  return router
}
