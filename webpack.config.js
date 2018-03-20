const HtmlWebpackPlugin = require('html-webpack-plugin') //installed via npm
const path = require('path')

const config = {
	mode:'development',
	entry: './src/js/app.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [{
			test: /\.txt$/,
			use: 'raw-loader'
		}]
	},
	optimization: {
		minimize: true,
		runtimeChunk: true,
		splitChunks: {
			chunks: 'async',
			minSize: 1000,
			minChunks: 2,
			maxAsyncRequests: 5,
			maxInitialRequests: 3,
			name: true,
			cacheGroups: {
				default: {
					minChunks: 1,
					priority: -20,
					reuseExistingChunk: true,
				},
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					priority: -10
				}
			}
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	]
}

module.exports = config