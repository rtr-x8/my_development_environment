var gulp     = require('gulp');
var config   = require('../config');
var getFolders   = require('../utill/getFolders');

var plumber      = require('gulp-plumber');
var notify       = require('gulp-notify');
var spritesmith  = require('gulp.spritesmith');
var consolidate  = require('gulp-consolidate');
var fs           = require("fs");
var path         = require('path');
var rename       = require('gulp-rename');


gulp.task('sprite', function() {
	var folders = getFolders(config.sprite.src);
	//
	//console.log(config.sprite.temp.import)
	//mixin, sampleのインポートを作成
	gulp.src(config.sprite.temp.import)
	.pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
	.pipe(consolidate('lodash', {data: folders}))
	.pipe(rename({basename: '_sprite'}))
	.pipe(gulp.dest(config.sprite.dst.mixin))
	.on('end', function() {	// こぴーしてるだけ
		var importer = config.sprite.dst.mixin + config.sprite.rename['basename'] + '.scss'
		gulp.src(importer)
		.pipe(gulp.dest(config.sprite.dst.module));
	})


	folders.forEach(function(folder){
		var spriteData = gulp.src(config.sprite.src + folder + '/*.{png,jpg,gif,jpeg}')
			.pipe(spritesmith({
				imgName: config.sprite.smith_opt.img_prefix + folder + '.png',
				imgPath: config.sprite.smith_opt.img_prefix + folder + '.png',
				cssName: folder + '.scss',
				cssFormat: 'scss',
				padding: 10,


				//ratina対応はひとまず置き。対応で両方作成する必要があるため。PCだけの時とか困る.
				// その代わりlodash内にてSPディレクトリ内の時の動作をスタイルを作成する

				
				cssTemplate: function(data) {

					// Sprite CSS Sample Create
					gulp.src(config.sprite.temp.module)
					.pipe(consolidate('lodash', {
						spriteName: folder,
						data: data,
						classNamePre: 'sprite--' + folder + '__',
						imgName: config.sprite.smith_opt.img_prefix + folder + '.png',
						imgPath : config.sprite.smith_opt.path_from_css,
						for_sp: folder === 'sp'? true: false,
					}))
					.pipe(rename({
						basename: config.sprite.smith_opt.scss_prefix + folder
					}))
					.pipe(gulp.dest(config.sprite.smith_opt.dst_class));
					
					//mixin作成
					gulp.src(config.sprite.temp.mixin)
					.pipe(consolidate('lodash', {
						spriteName: folder,
						data: data,
						classNamePre: 'sprite--' + folder + '__',
						imgName: config.sprite.smith_opt.img_prefix + folder + '.png',
						imgPath : config.sprite.smith_opt.path_from_css,
						for_sp: folder === 'sp'? true: false,
					}))
					.pipe(rename({
						basename: config.sprite.smith_opt.scss_prefix + folder
					}))
					.pipe(gulp.dest(config.sprite.smith_opt.dst_mixin));
					return '';
				}
			}));
		spriteData.img.pipe(gulp.dest(config.sprite.img_dst));
		//spriteData.css.pipe(gulp.dest(config.scssSprDst02));
	})
	
});