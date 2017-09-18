var gulp     = require('gulp');
var config   = require('../config');

var imagemin     = require('gulp-imagemin');
var pngquant     = require("imagemin-pngquant");
var mozjpeg      = require('imagemin-mozjpeg');
var plumber      = require('gulp-plumber');
var notify       = require('gulp-notify');
var changed      = require('gulp-changed');

//画像圧縮系の処理
gulp.task('imagemin', function() {
	return gulp.src(config.imagemin.src)
	.pipe(plumber({
		errorHandler: notify.onError("Error: <%= error.message %>")
	}))
	.pipe(changed(config.imagemin.dst))
	.pipe(imagemin(
		[
			pngquant(config.imagemin.opt.pngquant),
			mozjpeg(config.imagemin.opt.mozjpeg),
		]
	))
	.pipe(imagemin())	// ガンマ補正削除
	.pipe(gulp.dest(config.imagemin.dst))
});