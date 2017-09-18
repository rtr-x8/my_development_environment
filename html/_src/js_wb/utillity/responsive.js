module.exports.GetDevice = function(){
	return $('#js_media_query').css('font-family').replace(/"/g, '');
};

module.exports.IsMobile = function(){
	return this.GetDevice()==='small'||this.GetDevice()==='medium'? true: false;
};

module.exports.SetInterchange = function(){
	let resizeTimer;
	let _t = this;
	let flug = true;
    setTimeout(function(){
    	if( !flug ) return;
		flug = true;

		$('img').each(function(i, e){
			if( $(e).attr('src') === undefined ) return;

			if( !_t.IsMobile() ){
				$(e).attr('src', $(e).attr('src').replace('_small.', '_medium.') );
			}else{
				$(e).attr('src' ,$(e).attr('src').replace('_medium.', '_small.') );
			}
		});

    },200);
};

