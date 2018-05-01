const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HappyPack = require('happypack')
const os = require('os')
const happypackThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })

const srcPath = path.join(__dirname, '../app')

const clientConfig = {
  context: srcPath,
  entry: {
    client: './client-entry.js'
  },
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: path.join(__dirname, '../build'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.json', '.vue', '.less', '.css'],
    alias: {
      components: path.join(srcPath, 'components'),
      pages: path.join(srcPath, 'pages'),
      common: path.join(srcPath, 'common'),
      vue$: "vue/dist/vue.min.js",
      vuex$: "vuex/dist/vuex.min.js"
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'happypack/loader',
        options: {
          id: 'js'
        }
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader'
      },
      {
        test: /\.jpe?g|png|svg|gif/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.(less|css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'happypack/loader',
            options: {
              id: 'less'
            }
          }]
        })
      }
    ]
  },
  plugins: [
    new HappyPack({
      id: 'js',
      threadPool: happypackThreadPool,
      loaders: ['babel-loader'],
      verbose: true,
      verboseWhenProfiling: true
    }),
    new HappyPack({
      id: 'less',
      threadPool: happypackThreadPool,
      loaders: [
        {
          loader: 'css-loader',
          options: {
            sourceMap: true
          }
        },
        {
          loader: 'less-loader',
          options: {
            sourceMap: true
          }
        }
      ],
      verbose: true,
      verboseWhenProfiling: true,
      cache: false
    }),
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true
    }),
    // 自动创建模板
    new HtmlWebpackPlugin({
      filename: 'mytemplate.html',
      template: 'mytemplate.html',
      chunks: ['client']
    })
  ]
}

module.exports = clientConfig
