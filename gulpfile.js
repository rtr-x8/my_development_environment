var gulp       = require('gulp'),
	requireDir = require('require-dir');
requireDir('./gulp/tasks', {recurse: true});

/*
参考サイト
https://www.imamura.biz/blog/27170
http://akabeko.me/blog/2015/02/gulp-task-separate-files/
http://sitest.jp/blog/?p=2911
https://blog.daisukekonishi.com/archives/1901
https://github.com/d-kusk/gulpfile/tree/master/gulp/tasks
http://qiita.com/kacchan6@github/items/9a97f02ef0c6cdb22373
https://www.npmjs.com/package/gulp-changed
*/