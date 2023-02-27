const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.jsx',
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: '/',
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.(sass|less|css)$/,
				use: ['style-loader', 'css-loader', 'less-loader']
			}
		],
	},
	devServer: {
		port: 3000,
		hot: true,
		historyApiFallback: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
	],
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			'@mui/styled-engine': '@mui/styled-engine-sc'
		},
	},
	devtool: 'source-map'
};
