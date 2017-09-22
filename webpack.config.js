/* eslint-env node */
var path = require('path');


const ROOT = __dirname;
module.exports = {
	devtool: '#source-map',
	entry: {
		'app': path.join(ROOT, 'src/app/client/index')
	},
	output: {
		path: path.join(ROOT, 'dist'),
		filename: '[name].bundle.js',
		chunkFilename: '[name].bundle.js'
	},
	externals: {
		'jquery': 'jQuery',
		'bluebird': 'Promise',
		'inferno': 'Inferno'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			include: [
				path.resolve(ROOT, './src')
			],
			loader: 'babel-loader'
		}]
	},
	plugins: []
};
