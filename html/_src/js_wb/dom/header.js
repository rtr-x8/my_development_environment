const Rwd    = require("../utillity/responsive");
const Utill  = require("../utillity/utill");
const Calc   = require('../utillity/calculate');

module.exports.ToggleHamburger = function() {
	let $w = $('#wrapper')
	let condition = $w.attr('data-gNav_condition');

	if ( Rwd.IsMobile ) {
		Utill.ToggleAttr($w, 'data-gNav_condition', 'open', 'close');
	}else {
		$w.attr('data-gNav_condition', 'open');
	}
};

module.exports.Close = function() {
	if( !Rwd.IsMobile() ) return;

	$('#wrapper').attr('data-gNav_condition', 'close');
};