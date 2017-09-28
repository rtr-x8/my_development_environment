// event
const MOUSEWHEEL_EVENT = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';

// animation time
const BEFORE_PJAX_TIME = 600;
const AFTER_PJAX_TIME  = 540;
const HOME_SCR_TIME    = 600;
const HOME_MV_FADE     = 6000;

// component style
var DEGREE = 60;
const COLOR = '0x009ec5';
const ALPHA = 0.7;


let SITELOADER = {
	maxWidth: 300,
	width: 0,
	height: 10,
	slope: -180,
};

const RESOURCES = [
	'assets/img/home/txt_intro01_medium.png',
];

export {BEFORE_PJAX_TIME, AFTER_PJAX_TIME, MOUSEWHEEL_EVENT, HOME_SCR_TIME, DEGREE, COLOR, ALPHA, RESOURCES, SITELOADER, HOME_MV_FADE};

