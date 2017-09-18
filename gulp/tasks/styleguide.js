var gulp     = require('gulp');
var config   = require('../config');

var frontNote    = require('gulp-frontnote');
var fs           = require("fs");
var path         = require('path');
var plumber      = require('gulp-plumber');
var notify       = require('gulp-notify');
var rename       = require('gulp-rename');


//スタイルガイド（重い.）
//-------------------------------------------------------------------------------

gulp.task('styleguide', ['css'], function(){
	gulp.src(config.styleguide.src)
	.pipe(plumber({
		errorHandler: notify.onError("Error: <%= error.message %>")
	}))
	.pipe(frontNote(config.styleguide.opt))
	.on('end', function() {
		var flies = fs.readdirSync(config.styleguide.opt['out']);
		for (var file in flies) {
			if(path.extname(flies[file]) !== '.php') {
				var base_name     = path.basename(flies[file], '.html'),
					del_strLen    = base_name.lastIndexOf('-_',base_name.length),	//末尾から[ -_ ]を探す
					curr_path     = config.styleguide.opt['out'];
				if(del_strLen > 0 && base_name !== 'index') {
					var new_file_name = base_name.substr(del_strLen+2) + '.php';
					fs.renameSync(curr_path + flies[file], curr_path + new_file_name)
				}else if (base_name === 'index') {
					fs.renameSync(curr_path + flies[file], curr_path + 'index.php')
				}else {
					console.log('予期せぬ動作 : ' + flies[file]);
				}
			}
		}
	})
})