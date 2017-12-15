const koa = require('koa')
const logger = require('koa-logger')
const static = require('koa-static')
const render = require('koa-ejs')
const path = require('path')
const router = require('./routes/route.js')()

const app = new koa()

app.on('error', function(err, ctx){
	console.log(err)
})
app.use(logger())
app.use(static(path.join(__dirname, '../app/public')))
render(app, {
	root: path.join(__dirname, './views'),
	layout: false,
	view: 'html'
})

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000, () => {
	console.log('listen localhost:3000')
})