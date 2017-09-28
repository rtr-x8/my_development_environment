const gulp = require("gulp");
var config   = require('../config');
const webpack = require("webpack");
const webpackStream = require("webpack-stream");
var plumber      = require('gulp-plumber');
var notify       = require('gulp-notify');


// webpackの設定ファイルの読み込み
const webpackConfig = require( require('path').join(__dirname, '../../webpack.config') );


// タスクの定義。 ()=> の部分はfunction() でも可
gulp.task("ts", () => {  // ☆ webpackStreamの第2引数にwebpackを渡す☆
  	return plumber({errorHandler: notify.onError('Error: <%= error.message %>')})
  	.pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest( config.js.dst ));
});