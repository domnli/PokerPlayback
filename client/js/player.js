function Player(conf) {
	this.config = conf;
	this.position = Table.config.playerPositions[conf.NUMBER];

	this.name = new iio.Text({
		pos: this.position.name,
		color: 'white',
		text: conf.NAME,
		font: 'Microsoft YaHei',
		size: 16
	});
	this.chips = new iio.Text({
		pos: this.position.chips,
		color: 'white',
		text: conf.CHIPS,
		font: 'Microsoft YaHei',
		size: 16
	});
	this.chipsBg = new iio.Rectangle({
		pos: {
			x: this.position.chips.x,
			y: this.position.chips.y - 2
		},
		color: 'black',
		alpha: .3,
		width: 80,
		height: 20,
	});
	this.icon = new iio.Ellipse({
		pos: this.position.icon,
		radius: 40,
		img: conf.ICON,
		clip: true
	});
}

Player.prototype.renderTo = function(app) {
	app.add(this.name);
	app.add(this.chipsBg);
	app.add(this.chips);
	app.add(this.icon);
}