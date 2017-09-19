const Config = require("../config");

const Utill  = require("../utillity/utill");
const Calc   = require("../utillity/calculate");

const Header = require("../dom/header");

const Load   = require("./load");
const Ready = require("./ready");

const _t     = this;
const BODY_CLASS_PREFIX = 'body--';



module.exports.Init = function(){
	$.pjax({
		area : '[data-pjax_container]',
		link : "a:not(.js_no-pjax):not([href^='#']):not([target='_blank'])",
		load: { head: 'base, meta, link', script: false, css: false },
		ajax: { timeout: 3000},
		wait: Config.BEFORE_PJAX_TIME,
	});

	$(document).on('pjax:fetch', function(){});

	$(window).on('pjax:unload', function(){})

	$(document).on('pjax:DOMContentLoaded', function(){});

	$(document).on('pjax:ready', function(){
		Ready.Bind(true);
	});

	$(document).on('pjax:render', function(){});

	$(window).on('pjax:load', function(){
		Load.Bind(true);
	});

};


module.exports.SetSignature = function(){
	//set signature
	let body_id  = $('[data-body_id]').attr('data-body_id');
	let body_cls = BODY_CLASS_PREFIX + body_id;
	
	$('body').attr({
		'id': body_id,
		'class': body_cls,
		'data-pjax': true,
	});
};

module.exports.SetH1 = function(){
	// set heading
	let $t = $('.gHeader-logo');
	let beforeTag = $t.prop("tagName");
	let afterTag  = $('body').hasClass('body--home')? 'h1': 'p';

	Utill.SetTagname( $t, beforeTag, afterTag );
};


/*module.exports.Fetch = function(){};
module.exports.Unload = function(){};
module.exports.DOMContentLoaded = function(){};
module.exports.Ready = function(){};
module.exports.Render = function(){};
module.exports.Load = function(){};*/

