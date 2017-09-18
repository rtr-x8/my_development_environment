const path = require('path');
const webpack = require('webpack');
const Config  = require('./gulp/config');

const root_dir      = Config.root_dir;
const src_dir       = root_dir + '/_src/js_wb/';
const src_dir_path  = './' + src_dir;


module.exports = {
	entry: src_dir_path + "/main.js",
	module: {
		rules: [
			{
				test: /\.js?$/,
				include: [
					path.resolve(__dirname, src_dir)
				],
				exclude: '/node_modules/',
				loader: 'babel-loader',
				options: {
					"presets": [
						//["es2015", { "modules": 'systemjs' }],
						"es2015"
					]
				}				
			},
			{// ソースマップファイルの処理
				enforce: 'pre',
				test: /\.js$/,
				loader: 'source-map-loader'
			},
			{
		        test: /\.svg$/,
		        loader: 'svg-inline-loader'
		    }
		]
	},
	resolve: {
		extensions: [
			'.js'
		],
	},
	devtool: 'source-map',
	output: {
		filename: "bundle.js"
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({sourceMap: true})
	]
}
//npm i global webpack webpack-stream awesome-typescript-loader source-map-loader tyoescript