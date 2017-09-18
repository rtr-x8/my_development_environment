//const RESOURCE_LOADER = require('resource-loader');

const Cfg   = require('./config');
const Utill = require('./utillity/utill');
const Calc  = require('./utillity/calculate');

const Header = require("./dom/header");

const _t    = this;

/*
	npm リポジトリからリソースローダー読み込み。
	読み込み中関数・読み込み完了関数を定義
*/
/*module.exports.Init = function() {
	const Loader  = new RESOURCE_LOADER();

	for (var i = 0; i < Cfg.RESOURCES.length; i++) {
		Loader.add( Cfg.RESOURCES[i] );
	}

	Loader.onProgress.add(function(e,t){
		_t.RenderText( e.progress );
		_t.RenderBar( e.progress );
	});

	Loader.load((loader, resources) => {
		setTimeout(_t.AnimBreak, 600);
	});
};


module.exports.RenderText = function(progress) {
	let current_text = $('#loader__txt').text();
	let _p = progress;


	$('#loader__txt').text( Utill.PaddingZero(_p, 3) );

};
*/