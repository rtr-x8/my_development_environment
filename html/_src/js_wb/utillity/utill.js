// 初回アクセス取得
module.exports.IsFirstAccess = function(){
	var currentpath = window.location.pathname.replace(/\//, '').replace(/\./, '').replace(/_/, '-');
	if ( !currentpath ) currentpath = " homepage";
	if ( window.name.indexOf( '#' + currentpath )!=-1 ) {
		// ２回目アクセス
		return false;
	} else { 
		// 初回アクセス時の処理
		window.name = window.name + '#' + currentpath;
		return true;
	}
};

// スクロールインビュー
module.exports.SetScrTrigger = function($obj){
	// param: inLoop call from in loop? each, for...
	// default : false
	//let isInLoop = inLoop === undefined? false: inLoop;
	//if( typeof isInLoop !== 'boolean') return


	const TRIGGER_POS = 3 / 4;	// from UP
	const CLASS_NAME  = 'is_aniamted';

	let offsetTop = $obj.offset().top;
	let scrollTop = $(window).scrollTop();
	let windowHgt = $(window).height();
	let progress  = offsetTop - scrollTop;
	let show      = progress < windowHgt * TRIGGER_POS;
	let done      = $obj.hasClass( CLASS_NAME );
	let start     = show && !done;


	if( start ) {
		setTimeout(function() {
			$obj.addClass( CLASS_NAME );
		}, 60);	// 即座に反応するとアニメ自体が動かないかも？
	}

	return {show:show, done:done, start:start};

};

// 名前の通り
module.exports.IsPjax = function(){
	var result = $('body').attr('data-pjax');
	var result = result===undefined? false: result;
	return result;
};

// 上記IsFirstAccessをリセット
module.exports.RefreshPage = function(){
	window.location.pathname.substr(0);
	window.location.reload();
};

// 遅延読み込み
module.exports.LazyLoad = function(){
	$('[rel="subresource"]').each(function(index, el) {
		$(el).attr('rel', 'stylesheet');
	});

	$('img').each(function(index, el) {
		if( $(el)[0].hasAttribute('data-noLazy') ) return;

		let imgPath = $(el).attr('data-src');
		$(el).attr('src', imgPath);
	});

	/*$('video source').each(function(index, el) {
		let movPath = $(el).attr('data-movPath');
		$(el).attr('src', movPath);
	});*/
};

// 属性値切り替え。a,bナシならtrue or false
module.exports.ToggleAttr = function($e, attr, a, b){
	if( $e===undefined || attr===undefined ) return;
	let p1 = a===undefined? true: a;
	let p2 = b===undefined? false: b;
	let c  = $e.attr(attr);
	let d  = c === p1? p2: p1;

	return $e.attr(attr, d);
};

// 指定要素のタグをクラス・ID・中要素を引き継いで変更
module.exports.SetTagname = function($obj, beforeTag, afterTag){
	if( beforeTag === afterTag || $obj === undefined) return;
	
	let tagClass = $obj.attr('class') || '';
	let tagId    = $obj.attr('id') || '';
	let $inner   = $obj.html();
	let contan   = '<'+afterTag
				 + ' class="'
				 + tagClass
				 + '" id="'
				 + tagId
				 +'">'
				 + $inner
				 + '</'+afterTag+'>';

	return $obj.replaceWith($(contan));

};

// canvas 対応チェック
module.exports.CanCanvas = function(){
	return !!document.createElement('canvas').getContext;
};


// scroll top
module.exports.SetScroll0 = function(){
	$(window).scrollTop(0);
	//console.log('scroll : ' + $(window).scrollTop() );
};


// どのページか判断
// クラス名 body--{param}で判断
module.exports.IsPage = function( param ){
	var param     = param===undefined? 'home': param;
	let bodyClass = 'body--' + param;
	return $('body').hasClass(bodyClass)? true: false;
};

// 桁数をそろえる
// 整数でなければ小数点以下四捨五入
// Str で返す
module.exports.PaddingZero = function( num, digits ){
	if( num===undefined || !isFinite(num) ) throw new Error('Please Check!!');		// 数値でない or 未定義
	
	let d = digits===undefined? 3: digits;	// していなければ3桁
	let n = Math.round( num );
	let l = String(n).length;
	var r = n;		// 処理内で何回か更新

	if( d < l ) throw new Error('Please Check!!');

	for (var i = 0; i < d - l; i++) {
		r = '0' + r;
	}

	return String(r);
};

// タッチデバイスか
module.exports.IsTouchDevice = function(){
	return 'ontouchstart' in window;
};

// ホイールアクション可能か
module.exports.CanWheelEve = function(){
	let onwheel      = 'onwheel' in document;
	let onmousewheel = 'onmousewheel' in document;
	return onwheel || onmousewheel;
}
