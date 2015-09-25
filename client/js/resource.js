var Resource = {
	init:function(){
		this.sounds = {};
		this.images = {};

		var loader = new iio.Loader(config.basepath);
		function loadSounds(){
			this.sounds = loader.load([{id:'cardopen',name:'audio/card_open.ogg'},
										{id:'chipthrow',name:'audio/chip_throw.ogg'},
										{}],function(res){
				loadImages();
			});
		}.bind(this);

		function loadImages(){
			this.images = loader.load([],function(res){
				console.log('all res has loaded');
			});
		}.bind(this);
		
		loadSounds();
	}
};