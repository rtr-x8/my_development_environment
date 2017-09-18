const Cfg    = require("../config");

const Utill  = require("../utillity/utill");
const Rwd    = require("../utillity/responsive");

const _t     = require("./mousewheel");

module.exports.Bind = function(e) {
	_t.GetDirection(e);
};


module.exports.GetDirection = function(e) {
	if( !Utill.IsPage('home') ) return;
	e.preventDefault();
	var delta = e.originalEvent.deltaY ? -(e.originalEvent.deltaY) : e.originalEvent.wheelDelta ? e.originalEvent.wheelDelta : -(e.originalEvent.detail);
	if (delta < 0){
		console.log(1);
	} else {
		console.log(-1);
	}
};