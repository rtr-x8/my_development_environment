var gulp     = require('gulp');
var config   = require('../config');

var plumber      = require('gulp-plumber');
var notify       = require('gulp-notify');
var sourcemaps   = require('gulp-sourcemaps');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var CleanCSS     = require('gulp-clean-css');
var browserSync  = require('browser-sync');
var csscomb      = require('gulp-csscomb');

var pxtorem      = require('gulp-pxtorem');

//CSS系の処理
//-------------------------------------------------------------------------------
//sassコンパイル(圧縮するファイル以外)
gulp.task('css', function(){
	return gulp.src(config.scss.src, config.scss.src_opt)
	.pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
	.pipe(sourcemaps.init())
	.pipe(sass(config.scss.opt))
	.pipe(autoprefixer(config.scss.prefix_opt))
	.pipe(pxtorem(config.scss.px2rem_opt, config.scss.postcss_opt))
	.pipe(CleanCSS(config.scss.clean_opt))
	.pipe(sourcemaps.write('maps', config.scss.sourcemap_opt))
//	.pipe(csscomb())
	.pipe(gulp.dest(config.scss.dst))
	.pipe(browserSync.stream({match: '**/*.css'}));
});