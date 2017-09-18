var gulp     = require('gulp');
var config   = require('../config');
var browserSync  = require('browser-sync');


gulp.task('browserSync', function() {
	browserSync(config.browser_sync_opt);
});
//リロード処理
gulp.task('bs-reload', function () {
	return browserSync.reload();
});