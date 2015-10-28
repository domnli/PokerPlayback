var Resource = {
	init:function(){
		this.sounds = {};
		this.images = {};

		var loader = new iio.Loader(global.resourcepath);
		function loadSounds(){
			this.sounds = loader.load(
				[{id:'cardopen',name:'audio/card_open.ogg'},
				{id:'chipthrow',name:'audio/chip_throw.ogg'},
				],
			function(res){
				console.log('sounds has loaded')
				loadImages.call(this);
			}.bind(this));
		};

		function loadImages(){
			this.images = loader.load([{id:'2c',name:'2c.png'}],function(res){
				console.log('all res has loaded');
			});
		};
		
		loadSounds.call(this);
	}
};