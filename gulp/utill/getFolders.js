var fs           = require("fs");
var path         = require('path');
//ディレクトリ階層を取得する
//-------------------------------------------------------------------------------
module.exports = function(dir_path) {
	return fs.readdirSync(dir_path).filter(function(file) {
		return file.substr(0,1)==='_'?false: fs.statSync(path.join(dir_path, file)).isDirectory();
	});
};