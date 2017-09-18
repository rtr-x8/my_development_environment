const Config = require("../config");

// 乱数
module.exports.GetRand = function(min, max){
	return Math.floor( Math.random() * (max - min + 1) ) + min;
};

// 指定秒を分割
module.exports.GetTimetable = function(time, ratioArr) {
	// ratioArr : aaray [1, 2, 1]

	let sum = ratioArr.reduce((a,x) => a+=x,0);
	let resut = [];

	for (var i = 0; i < ratioArr.length; i++) {
		var val = time / sum * ratioArr[i];
		resut.push( val );
	}

	return resut;

};

// ms -> s
module.exports.ToSecond = function(milliseconds){
	return milliseconds / 1000;
};

// degree -> radian
module.exports.ToRadian = function(degrees) {
	return degrees * Math.PI / 180;
};

// 幅・角度から高さ
module.exports.GetWidthByHeight = function(height, degrees) {
	let d = degrees === undefined? Config.DEGREE: degrees;
	return height / Math.tan( this.ToRadian(d) );
};

// 高さ・角度から幅
module.exports.GetHieghtByWidth = function(width, degrees) {
	let d = degrees === undefined? Config.DEGREE: degrees;
	return width * Math.tan( this.ToRadian(d) );
};

// 幅or高さと角度から斜辺
module.exports.GetGypotenuse = function(base, baseVal, degrees) {
	let d = degrees === undefined? Config.DEGREE: degrees;
	if (base === 'width') {
		return baseVal / Math.cos( this.ToRadian(d) );
	}else if(base === 'height') {
		return baseVal / Math.sin( this.ToRadian(d) );		
	}
};