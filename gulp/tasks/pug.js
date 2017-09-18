var gulp         = require('gulp');
var config   = require('../config');

var plumber      = require('gulp-plumber');
var notify       = require('gulp-notify');
var pug          = require('gulp-pug');
var prettify 	 = require('gulp-html-beautify');
var rename       = require('gulp-rename');


//pug系の処理
//-------------------------------------------------------------------------------
//pug
gulp.task('pug', function(){
	gulp.src(config.pug.src)
	.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
	.pipe(pug(config.pug.opt))		//{pretty: true}
	.pipe(prettify(config.pug.prettify_opt))
	.pipe(rename(config.pug.rename_opt))
	.pipe(gulp.dest(config.pug.dst))
});