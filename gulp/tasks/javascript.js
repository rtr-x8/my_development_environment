var gulp     = require('gulp');
var config   = require('../config');
var getFolders   = require('../utill/getFolders');

var uglify       = require('gulp-uglify');
var concat       = require('gulp-concat');
var plumber      = require('gulp-plumber');
var notify       = require('gulp-notify');
var rename       = require('gulp-rename');

//javascript系の処理
gulp.task('js', function() {
	var folders = getFolders(config.js.src);
	folders.forEach(function(folder){
		return gulp.src([config.js.src+folder+'/*.js', '!' + config.js.src+folder+'/_*.js'])
		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
		.pipe(concat(folder + '.js'))
		.pipe(gulp.dest(config.js.dst))
		.pipe(uglify(config.js.uglify_opt))
		.pipe(rename(config.js.rename_opt))
		.pipe(gulp.dest(config.js.dst))
	});
})