var Table = {
	init: function(config) {
		this.config = config;
		this.dealer = config.DEALER;
		// this.currency = table.currency||table.CURRENCY;
		// this.seats = table.seats||table.SEATS;
		this.config.playerPositions = this.config.SEATS == 5 ? global.playerPositions5 : global.playerPositions;
		this.players = [];
		// bg
		this.bg = new iio.Rectangle({
			pos: {
				x: global.width/2,
				y: global.height/2
			},
			img: 'res/bg.jpg'
		});
		// players
		utils.each(config.SEAT, function(i, seat) {
			Table.players.push(new Player(seat));
		});

		// dealer symbol
		this.dealerSymbol = new iio.Rectangle({
			pos:this.config.playerPositions[this.dealer].dealer,
			img:'res/dealer.png'
		});

		// pot
		this.potBg = new iio.Rectangle({
			pos:global.potPosition,
			img:'res/pot.png'
		});
		this.pot = new iio.Text({
			pos:{x:global.potPosition.x+15,y:global.potPosition.y},
			text:'99999999',
			size:20
		});

	},
	renderTo: function(app) {
		app.add(this.bg);
		app.add(this.dealerSymbol);
		app.add(this.potBg);
		app.add(this.pot);
		utils.each(this.players, function(i, player) {
			player.renderTo(app);
		})
	}
};