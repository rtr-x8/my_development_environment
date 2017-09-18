const Config = require("./config");

const Load   = require("./events/load");
const Ready  = require("./events/ready");
const Wheel  = require("./events/mousewheel");
const Resize = require("./events/resize");


// ready
$(document).on('ready', function() {
	Ready.Bind(false);	// param: pjaxing?
});

// load
$(window).on('load', function() {
	Load.Bind(false);	// param: pjaxing?
});

// mousewheel event
$(window).on(Config.MOUSEWHEEL_EVENT, function(e) {
	Wheel.Bind(e);
});

// resize
$(window).on('resize', function() {
	Resize.Bind();
});