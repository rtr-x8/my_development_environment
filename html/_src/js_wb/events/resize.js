const Cfg    = require("../config");

const Utill  = require("../utillity/utill");
const Rwd    = require("../utillity/responsive");

const Header = require("../dom/header");

const Pjx    = require("./pjx");
const Click  = require("./click");


module.exports.Bind = function() {
	
	Rwd.SetInterchange();

	// scrollify 動いていないので
	if( !$('body').hasClass('is_canvas_no_supoort') ) {
		ScrSec.SetSize();

		// console.log(Cfg.PIXIOBJ.app.stage)
	}
};