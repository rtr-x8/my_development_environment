const Utill  = require("../utillity/utill");
const Rwd    = require("../utillity/responsive");

const Header = require("../dom/header");


const Pjx    = require("./pjx");
const Click  = require("./click");

const Loader = require('../loader');

const Calc   = require("../utillity/calculate");



module.exports.Bind = function(pjax_active) {
	// pjax_active: true or false

	if( pjax_active ) {
		Pjx.SetSignature();		// 絶対に一番初めに実行
		Pjx.SetH1();
	}else {
		Pjx.Init();
		Click.Bind();
	}
};