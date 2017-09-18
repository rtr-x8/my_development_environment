var gulp     = require('gulp');
var config   = require('../config');

gulp.task('default', config.watch.before_tasks, function(){
	gulp.watch(config.scss.src,           ['css']);		// stream
	gulp.watch(config.favicon.src,        ['favicon' , 'bs-reload']);
	gulp.watch(config.iconfont.src,       ['iconfont', 'bs-reload']);
	gulp.watch([config.imagemin.src],     ['imagemin', 'bs-reload']);
	gulp.watch(config.js.src+'**/*.js',   ['js'      , 'bs-reload']);
	gulp.watch(config.pug.src,            ['pug'     , 'bs-reload']);
	gulp.watch(config.sprite.src+'**/*',  ['sprite'  , 'bs-reload']);
	gulp.watch(config.svg.src,             ['svgmin' , 'bs-reload']);
	gulp.watch(config.src_root+'js_wb/**/*.js',['ts'     , 'bs-reload']);
});