const koa = require('koa')
const logger = require('koa-logger')
const static = require('koa-static')
const path = require('path')
const router = require('./routes/route.js')()

const app = new koa()

app.on('error', function(err, ctx){
	console.log(err)
})

app.use(logger())
app.use(static(path.join(__dirname, '../build')))

app.use(async (ctx, next) => {
  console.log(ctx.url)
  await next()
})

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000, () => {
	console.log('listen localhost:3000')
})