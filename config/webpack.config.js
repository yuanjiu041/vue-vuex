const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HappyPack = require('happypack')
const os = require('os')
const happypackThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })


const srcPath = path.join(__dirname, '../app')

const config = {
	context: srcPath,
	entry: './app',
	devtool: 'cheap-module-eval-source-map',
	output: {
		path: path.join(__dirname, '../build')
		filename: '[name].js',
		chunkFilename: '[name].js'
	},
	resolve: {
		alias: {
			component: path.join(srcPath, 'component')
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
				test: /\.(less|css)$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'happypack/loader',
							options: {
								id: 'less'
							}
						}
					]
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
					loader: 'postcss-loader'
				}
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
		new webpack.optimize.CommonsChunkPlugin({
			name: 'app',
			filename: 'app.js',
			minChunks: 3
		}),
		new ExtractTextPlugin({
			filename: '[name.css]',
			allChunks: true
		}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			chunks: ['app']
		})
	]
}

module.exports = config