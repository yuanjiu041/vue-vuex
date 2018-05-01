const path = require('path')
const srcPath = path.join(__dirname, '../app')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

const serverConfig = {
  name: 'server render',
  target: 'node',
  devtool: 'source-map',
  context: srcPath,
  entry: './server-entry.js',
  output: {
    path: path.join(__dirname, '../build'),
    filename: 'server.js',
    libraryTarget: 'commonjs2'
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
        loader: 'babel-loader'
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
            use: [
              {
                loader: 'css-loader'
              },
              {
                loader: 'less-loader'
              }
            ]
      }
    ]
  },
  plugins: [
    new VueSSRServerPlugin()
  ]
}

module.exports = serverConfig
