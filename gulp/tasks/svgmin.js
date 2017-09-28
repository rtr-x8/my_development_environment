var gulp     = require('gulp');
var config   = require('../config');
var svgmin   = require('gulp-svgmin');
var plumber      = require('gulp-plumber');
var notify       = require('gulp-notify');

gulp.task('svgmin', function() {
	gulp.src(config.svg.src)
	.pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
	.pipe(svgmin())
	.pipe(gulp.dest(config.svg.dst));
})