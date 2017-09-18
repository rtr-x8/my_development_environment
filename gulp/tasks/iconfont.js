var gulp     = require('gulp');
var config   = require('../config');

var iconfont     = require('gulp-iconfont');
var iconfontCss  = require('gulp-iconfont-css');
var svgmin       = require('gulp-svgmin');
var fs           = require("fs");
var path         = require('path');
var plumber      = require('gulp-plumber');
var notify       = require('gulp-notify');

//iconfont
//-------------------------------------------------------------------------------
gulp.task('iconfont', function(){
	// mixin用のscss作成
	gulp.src(config.iconfont.src)
	.pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
	.pipe(svgmin())
	.pipe(iconfontCss(config.iconfont.opt.mixin))
    .pipe(gulp.dest(config.iconfont.dst));

    // モジュールクラス用のscss作成
    gulp.src(config.iconfont.src)
    .pipe(svgmin())
	.pipe(iconfontCss(config.iconfont.opt.class))
    .pipe(iconfont(config.iconfont.opt.font))
    .pipe(gulp.dest(config.iconfont.dst));

	//謎に吐き出されるsvg群を削除。node的に超ダメな書き方。
    setTimeout(function(){
	    var flies = fs.readdirSync(config.iconfont.dst);
		for (var file in flies) {
			if (
				path.extname(flies[file]) === '.svg'
				&& path.basename(flies[file], '.svg') !== config.iconfont.fontname
				&& path.basename(flies[file], '.svg') !== 'slick') {
				// console.log(flies[file])
				fs.unlinkSync(config.iconfont.dst + flies[file]);
			}
		}    	
    }, 3000)

});
