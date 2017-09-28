var gulp     = require('gulp');
var config   = require('../config');
var connect      = require('gulp-connect-php');
var browserSync  = require('browser-sync');

//phpの動作
gulp.task('connectSync', function() {
	connect.server(config.connect_sync.opt, function (){
		browserSync(config.connect_sync.browser_opt);
	});
});