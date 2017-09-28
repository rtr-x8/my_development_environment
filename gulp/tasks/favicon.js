var gulp     = require('gulp');
var config   = require('../config');
var favicon      = require('gulp-favicons');
var plumber      = require('gulp-plumber');
var notify       = require('gulp-notify');

//favicon
//-------------------------------------------------------------------------------
gulp.task('favicon01', function(){
	return gulp.src(config.favicon.src)
	.pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
	.pipe(favicon(config.favicon.opt))
	.pipe(gulp.dest(config.favicon.dst));
})

gulp.task('favicon', ['favicon01'], function(){
	gulp.src(config.favicon.dst + 'favicons.html').pipe(gulp.dest(config.src_root + '/_template/'));
	gulp.src(config.favicon.dst + 'browserconfig.xml').pipe(gulp.dest(config.site_root));
})