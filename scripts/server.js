const fs = require ('fs-extra')
const ip = require('dev-ip')
const path = require('path')
const Promise = require('bluebird')
const webpack = require('webpack')
const WbepackDevServer = require('webpack-dev-server')
const webpackConfig = require('../config/webpack.config')

const devIp = ip()[0]

const root = path.join(__dirname, '..')
const viewPath = path.join(root, 'server/views')
const publicPath = (webpackConfig.output.publicPath = `http://${devIp}:9005/build/`)

const compiler = webpack(webpackConfig)

const server = new WbepackDevServer(compiler, {
  publicPath: publicPath,
  proxy: {
    '/build': {
      target: 'http://${devIp}:9005/',
      rewrite: req => {
        req.url = '/webpack-dev-server'
      }
    }
  }
})

server.listen(9005, function () {
  console.log('webpack-dev-server is listen 9005 now')
})

compiler.plugin('done', stats => {
  const outputPath = webpackConfig.output.path
  const assets = stats.compilation.assets

  Promise.map(Object.keys(assets), file => {
    const asset = assets[file]
    const filePath = path.relative(outputPath, asset.existsAt)

    if ('.html' === path.extname(filePath)) {
      const content = asset.source()
      const distPath = path.join(viewPath, filePath)

      return fs.outputFileSync(distPath, content)
    }
  }).then(() => {
    console.log('webpack build success.')
  })
})

/* 
compiler.plugin('done', stats => {
  
}) */
