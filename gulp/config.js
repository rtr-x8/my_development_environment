// rootディレクトリリ名
const root_directory_name = 'html';

// root設定
const project_root = require('path').join(__dirname, '../'),
	site_root    = project_root + root_directory_name + '/',
	src_root     = site_root + '_src/';

// 環境変数
const php = {
	bin: 'C:/xampp02/php/php.exe',
	ini: 'C:/xampp02/php/php.ini'
};

// 各アセットディレクトリ

// var assets_dir = 'assets/';
const assets_dir = '';

var src = {
	pug   : src_root + 'pug/',
	scss  : src_root + 'scss/',
	js    : src_root + 'js/',
	img   : src_root + 'img/',
	font  : src_root + '_fontsvg/',
	svg   : src_root + 'svg/',
	sprite: src_root + '_sprite/',
}
var dst = {
	pug       : site_root,
	scss      : site_root + assets_dir + 'css/',
	js        : site_root + assets_dir + 'js/',
	img       : site_root + assets_dir + 'img/',
	sprite    : site_root + assets_dir + 'img/modules/',
	favicon   : site_root + assets_dir + 'img/favicons/',
	font      : site_root + assets_dir + 'fonts/',
	svg       : site_root + assets_dir + 'svg/',
	styleguide: site_root + 'styleguide/',
}

// project 全般設定
var settings = {
	extension: '.php',	// php or html
	root_dir_name: root_directory_name,
	site: {
		name: 'サイトタイトル',
		url : 'http://a.com',
	},
	cmn_prefix: 'mod_',
}

// iconfont 設定
var icon_font = {
	firstGlyph: '0xEA01',
	cssClass: settings.cmn_prefix + 'glyph--',
	fontName: 'iconfont',
	path_mixin: src_root + '_template/iconfont/_iconfont_mixin.scss',
	path_class: src_root + '_template/iconfont/_iconfont_class.scss',
	targetPath_mixin: src.scss + '01_setting/_mixin_iconfont.scss',
	targetPath_class: src.scss + '04_modules/_iconfont.scss',
	fontPath: '../fonts/',
}


module.exports = {
	root_dir: root_directory_name,
	// 環境
	php: {
		bin: php.bin,
		ini: php.ini
	},
	// localhosts
	server: {
		port: 3030,
		proxy: '127.0.0.1',
	},
	site_root: site_root,
	src_root: src_root,
	// [task] browserSync 		// たぶんconnectと設定を同一にできる
	browser_sync_opt: {
		server: {
			baseDir: project_root + root_directory_name,
			index  : 'index' + settings.extension,
		},
	},
	// [task] connectSync
	connect_sync: {
		opt: {
			port: 3030,
			base: project_root + root_directory_name,
			bin: php.bin,
			ini: php.ini,
			stdio: 'ignore'
		},
		browser_opt: {
			proxy: '127.0.0.1:3030',
			ghostMode: false,
			logConnections: true,
			logFileChanges: false
		}
	},
	// [task] Scss -> css
	scss: {
		src: src.scss + '**/*.scss',
		src_opt: {
			base: src.scss,			
		},
		dst: dst.scss,
		opt: {
			outputStyle: 'expanded'
		},
		prefix_opt: {
			browsers: 'last 5 version, > 5%',
			cascade: false
		},
		clean_opt: {
			advanced:false,
			keepBreaks:true,
			sourceMap:true,
		},
		sourcemap_opt: {
			sourceRoot: '../../../scss',	// いつかnodeで取得したい
		}
	},
	watch: {
		before_tasks: ['connectSync', 'imagemin','bs-reload','pug','js', 'styleguide', 'ts'],
		
	},
	favicon: {
		src: src_root + '**/favicon.{jpg,jpeg,png,gif}',
		dst: dst.img + 'favicons/',
		opt: {
			appName: settings.site.name,
			appDescription: settings.site.name,
			developerName: settings.site.name,
			developerURL: settings.site.url,
			background: "#fff",
			url: settings.site.url,
			path: '/img/favicons/',
			display: "browser",
			orientation: "portrait",
			version: 1.0,
			logging: false,
			online: false,
			html: "favicons.html",
			pipeHTML: true,
			replace: true,
			icons: {
				android: false,
				appleIcon: true,
				appleStartup: false,
				favicons: true,
				firefox: false,
				windows: true,
				yandex: false
			}
		}
	},
	iconfont: {
		src: src.font + '*.svg',
		dst: dst.font,
		fontname: icon_font.fontName,
		opt: {
			mixin: {
				firstGlyph: icon_font.firstGlyph,
				cssClass  : icon_font.cssClass,
				fontName  : icon_font.fontName,
				path      : icon_font.path_mixin,
				targetPath: icon_font.targetPath_mixin,
				fontPath  : icon_font.fontPath,
			},
			class: {
				firstGlyph: icon_font.firstGlyph,
				cssClass  : icon_font.cssClass,
				fontName  : icon_font.fontName,
				path      : icon_font.path_class,
				targetPath: icon_font.targetPath_class,
				fontPath  : icon_font.fontPath,
			},
			font: {
				fontName  : icon_font.fontName,
				formats: ['ttf', 'eot', 'woff', 'svg'],
				normalize: true,
				startUnicode: icon_font.firstGlyph,
				timestamp: Math.round(Date.now()/1000),
			}
		}
	},
	imagemin: {
		src: [
			src.img + '**/*.{jpg,jpeg,png,gif}',
			'!' + src.img + '**/_*.{jpg,jpeg,png,gif}',
			'!' + src.sprite + '**/*.{jpg,jpeg,png,gif}',
		],
		dst: dst.img,
		opt: {
			pngquant: {
				quality: '65-80',
				speed: 1,
				floyd:0
			},
			mozjpeg: {
				quality:85,
				progressive: true
			}
		}
	},
	js: {
		src: src.js,
		dst: dst.js,
		uglify_opt: {preserveComments: 'all'},
		rename_opt: {extname: '.min.js'}
	},
	pug: {
		src: [src.pug + '**/*.pug', '!' + src.pug + '**/_*.pug'],
		dst: dst.pug,
		opt: {
			basedir: src_root,
			doctype: 'html',
		},
		prettify_opt: {
			indent_size: 1,
			indent_char: '\t',
			indent_inner_html: false,
			indent_scripts: 'normal',	//sepatate, mnormal keep
			extra_liners: '',
			brace_style: 'none',	// collapse|expand|end-expand 
			wrap_line_length: 0,
			wrap_attributes: 'force-aligned',
		},
		rename_opt: {
			extname: settings.extension
		}
	},
	php2html: {
		src: [site_root + '/**/*.php', '!' + site_root + 'inc/**/*.php']
	},
	sprite: {
		src: src.sprite,
		dst: {
			mixin : src.scss + '01_setting/',
			module: src.scss + '04_modules/',
		},
		temp: {
			mixin  : src_root + '_template/sprite/sprite-mixin.scss',
			module : src_root + '_template/sprite/sprite-sample.scss',
			import : src_root + '_template/sprite/sprite-import01.scss',
		},
		rename: {
			basename: '_sprite',
		},
		smith_opt: {
			img_prefix: 'sprites_',
			img_dst: dst.sprite,
			class_prefix: settings.cmn_prefix + 'icon--',
			class_between: '_',
			path_from_css: '../img/module/',
			dst_mixin: src.scss + '01_setting/',
			dst_class: src.scss + '04_modules/',
			scss_prefix: '_sprite-',
		},
		img_dst: dst.img + 'module'
	},
	styleguide: {
		src: src.scss + '04_modules/*.scss',
		opt: {
			out     : dst.styleguide,
			overview: src_root + 'ov.md',
			title   : settings.site.name=='サイト名'? 'スタイルガイド': settings.site.name+'(スタイルガイド)',
			template: src_root + '_template/styleguide/index.ejs',
			includeAssetPath: '',
			params: {
				file_info: '<?php $page_id = "home"; ?>',	//変数とかあれば
				nav_position: 'bottom',						//top or bottom
				before_content_tags: '<div class="test">',	//header読みこんだ後に記述
				after_content_tags: '</div></main>',		//fo0ter読みこむ前の記述
				jquery: '1.12.4.min',						//jQueryをCDNから読むfalseなら読まない
				calss_prefix: 'styleguide__',				//styleguideページのクラス名接頭詞
			}
		},
	},
	svg: {
		src: src.svg + '*.svg',
		dst: dst.svg,
	}
}