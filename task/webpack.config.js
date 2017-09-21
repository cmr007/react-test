const _ = require('lodash')
const webpack = require('webpack')
const path = require('path')
const APP_PATH = path.resolve(__dirname, '../src/static')
const pkg = require('../package.json')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const PUBLIC_PATH ="http://127.0.0.1:8080"
module.exports = function(options) {
	options = _.defaults(options || {}, {
		ENV: 'development'
	})
	const isProduction = options.ENV === 'production'
	const publicPath = isProduction ? "" : PUBLIC_PATH

	return {
		context: APP_PATH,
		entry: {
			main: './webapps/js/main.js'
		},
		output: {
			filename: 'entry/[name].js',
			chunkFilename: 'chunk/[name]-[chunkhash].js',
      publicPath: publicPath
		},
		module: {
      loaders: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }, {
        test: /\.css$/,
        loader: "style!css",
      }, {
        test: /\.pcss$/,
        loader: `style!css?module&importLoaders=1!postcss`,
      }, {
        test: /\.html$/,
        loader: "html-loader",
      }, {
        test: /\.(png|jpg|gif|jpeg|otf|eot|svg|ttf|woff|woff2)(\?\S+)?$/,
        loader: 'file?name=asset/[hash:8].[ext]'
      }, ]
    },
    resolve: {
      extensions: ['.webpack.js', '.js', '.jsx'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        chunks: ['main'],
        template: '../page/index.html',
        filename: '../page/index.html'
      }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(options.ENV),
        },
        __ENV__: {
          ENV: JSON.stringify(options.ENV),
          BUILT_AT: JSON.stringify(+new Date()),
          PKG_NAME: JSON.stringify(pkg.name),
        },
      })
    ]
	}
}
