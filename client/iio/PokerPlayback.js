//PokerPlayback
var PokerPlayback = function (io) {
    var playerPositions = [
        {},
        {name : {x : 330, y : 700}, icon : {x : 330, y : 750}, chips : {x : 330, y : 800}, dealer : {x : 280, y : 680}, blind : {x : 340, y : 680}, bet : {x : 340, y : 650}, holecard : [{x : 315, y : 750}, {x : 346, y : 750}], bubble : {x : 330, y : 700}},
        {name : {x : 80, y : 560}, icon : {x : 80, y : 610}, chips : {x : 80, y : 660}, dealer : {x : 130, y : 600}, blind : {x : 130, y : 630}, bet : {x : 160, y : 630}, holecard : [{x : 65, y : 610}, {x : 96, y : 610}], bubble : {x : 80, y : 560}},
        {name : {x : 80, y : 360}, icon : {x : 80, y : 410}, chips : {x : 80, y : 460}, dealer : {x : 130, y : 400}, blind : {x : 130, y : 430}, bet : {x : 160, y : 430}, holecard : [{x : 65, y : 410}, {x : 96, y : 410}], bubble : {x : 80, y : 360}},
        {name : {x : 80, y : 160}, icon : {x : 80, y : 210}, chips : {x : 80, y : 260}, dealer : {x : 130, y : 200}, blind : {x : 130, y : 230}, bet : {x : 160, y : 230}, holecard : [{x : 65, y : 210}, {x : 96, y : 210}], bubble : {x : 80, y : 160}},
        {name : {x : 240, y : 30}, icon : {x : 240, y : 80}, chips : {x : 240, y : 130}, dealer : {x : 290, y : 70}, blind : {x : 240, y : 150}, bet : {x : 240, y : 170}, holecard : [{x : 225, y : 80}, {x : 256, y : 80}], bubble : {x : 240, y : 30}},
        {name : {x : 400, y : 30}, icon : {x : 400, y : 80}, chips : {x : 400, y : 130}, dealer : {x : 450, y : 70}, blind : {x : 400, y : 150}, bet : {x : 400, y : 170}, holecard : [{x : 385, y : 80}, {x : 416, y : 80}], bubble : {x : 400, y : 30}},
        {name : {x : 560, y : 160}, icon : {x : 560, y : 210}, chips : {x : 560, y : 260}, dealer : {x : 510, y : 200}, blind : {x : 510, y : 230}, bet : {x : 480, y : 230}, holecard : [{x : 545, y : 210}, {x : 576, y : 210}], bubble : {x : 560, y : 160}},
        {name : {x : 560, y : 360}, icon : {x : 560, y : 410}, chips : {x : 560, y : 460}, dealer : {x : 510, y : 400}, blind : {x : 510, y : 430}, bet : {x : 480, y : 430}, holecard : [{x : 545, y : 410}, {x : 576, y : 410}], bubble : {x : 560, y : 360}},
        {name : {x : 560, y : 560}, icon : {x : 560, y : 610}, chips : {x : 560, y : 660}, dealer : {x : 510, y : 600}, blind : {x : 510, y : 630}, bet : {x : 480, y : 630}, holecard : [{x : 545, y : 610}, {x : 576, y : 610}], bubble : {x : 560, y : 560}}
      ],
      playerPositions5 = [
        {},
        {name : {x : 330, y : 700}, icon : {x : 330, y : 750}, chips : {x : 330, y : 800}, dealer : {x : 280, y : 680}, blind : {x : 340, y : 680}, bet : {x : 340, y : 650}, holecard : [{x : 315, y : 750}, {x : 346, y : 750}], bubble : {x : 330, y : 700}},
        {name : {x : 80, y : 360}, icon : {x : 80, y : 410}, chips : {x : 80, y : 460}, dealer : {x : 130, y : 400}, blind : {x : 130, y : 430}, bet : {x : 160, y : 430}, holecard : [{x : 65, y : 410}, {x : 96, y : 410}], bubble : {x : 80, y : 360}},
        {name : {x : 80, y : 160}, icon : {x : 80, y : 210}, chips : {x : 80, y : 260}, dealer : {x : 130, y : 200}, blind : {x : 130, y : 230}, bet : {x : 160, y : 230}, holecard : [{x : 65, y : 210}, {x : 96, y : 210}], bubble : {x : 80, y : 160}},
        {name : {x : 560, y : 160}, icon : {x : 560, y : 210}, chips : {x : 560, y : 260}, dealer : {x : 510, y : 200}, blind : {x : 510, y : 230}, bet : {x : 480, y : 230}, holecard : [{x : 545, y : 210}, {x : 576, y : 210}], bubble : {x : 560, y : 160}},
        {name : {x : 560, y : 360}, icon : {x : 560, y : 410}, chips : {x : 560, y : 460}, dealer : {x : 510, y : 400}, blind : {x : 510, y : 430}, bet : {x : 480, y : 430}, holecard : [{x : 545, y : 410}, {x : 576, y : 410}], bubble : {x : 560, y : 360}}
      ],
      potPosition = {x : 325, y : 350},
      boardPositions = [
            {x : 230, y : 450},
            {x : 276, y : 450},
            {x : 322, y : 450},
            {x : 368, y : 450},
            {x : 414, y : 450}
        ];
    var  i, record = recordHelper.data, table = record.STAGE.TABLE, seats = table.SEAT, pokercard = record.STAGE.POKERCARD;
    if (table.SEATS == 5) {
        playerPositions = playerPositions5;
    }
    io.setBGImage('res/bg.png');
    io.addGroup('table'); //头像、名称、筹码组
    io.addGroup('dinamic'); //可变物体
    /*for (i = 0; i < playerPositions.length; i++) {
        io.addToGroup('table',
            new iio.SimpleRect(playerPositions[i].icon, 120, 150)
                    .setFillStyle('white')
                    .setAlpha(.1)
            );
    };*/
    for (i = 0; i < seats.length; i++) {
        (function(pos){
            playerPositions[seats[i].NUMBER].icon.obj = new iio.Circle(playerPositions[seats[i].NUMBER].icon, 30)
                                        .setStrokeStyle('white',2)
                                        .addImage(seats[i].ICON, function(){
                                                                io.addToGroup('table',playerPositions[pos].icon.obj);
                                                            }); // 头像
        })(seats[i].NUMBER);

        playerPositions[seats[i].NUMBER].name.obj = new iio.Text(seats[i].NAME, playerPositions[seats[i].NUMBER].name)
                                    .setFont('14px Microsoft YaHei')
                                    .setTextAlign('center')
                                    .setFillStyle('white'); // 名称
        io.addToGroup('table', playerPositions[seats[i].NUMBER].name.obj);
     /*   playerPositions[i].chips.bgobj = new iio.SimpleRect(playerPositions[i].chips.x, playerPositions[i].chips.y - 5, 80, 20)
                                        .setFillStyle('black')
                                        .setAlpha(.3); // 筹码背景
        io.addToGroup('table', playerPositions[i].chips.bgobj);*/
        playerPositions[seats[i].NUMBER].chips.obj = new iio.Text(seats[i].CHIPS, playerPositions[seats[i].NUMBER].chips)
                                    .setFont('12px Microsoft YaHei')
                                    .setTextAlign('center')
                                    .setFillStyle('white'); // 筹码
        io.addToGroup('table', playerPositions[seats[i].NUMBER].chips.obj);
    };

    for ()

    function testPosition() {
        for (var i = 1; i < playerPositions.length; i++) { // 位置测试
            (function(pos){
                playerPositions[i].holecard[0].obj = new iio.SimpleRect(playerPositions[i].holecard[0], 30, 45)
                                            .addImage('res/2d.png', function(){
                                                                    io.addToGroup('table',playerPositions[pos].holecard[0].obj);
                                                                }); // 底牌1
                playerPositions[i].holecard[1].obj = new iio.SimpleRect(playerPositions[i].holecard[1], 30, 45)
                                            .addImage('res/2d.png', function(){
                                                                    io.addToGroup('table',playerPositions[pos].holecard[1].obj);
                                                                }); // 底牌2
                playerPositions[i].icon.obj = new iio.Circle(playerPositions[i].icon, 30)
                                            .setStrokeStyle('white',2)
                                            .addImage('res/icon.png', function(){
                                                                    io.addToGroup('table',playerPositions[pos].icon.obj);
                                                                }); // 头像
                playerPositions[i].bubble.objBG = new iio.SimpleRect(playerPositions[i].bubble, 140, 30)
                                                    .setFillStyle('#457502')
                                                    .setAlpha(1); // 气泡背景
                io.addToGroup('table', playerPositions[i].bubble.objBG);
                playerPositions[i].bubble.obj = new iio.Text('bubblebubble', playerPositions[i].bubble.x, playerPositions[i].bubble.y + 5)
                                                    .setFillStyle('white')
                                                    .setTextAlign('center'); // 气泡文字
                io.addToGroup('table', playerPositions[i].bubble.obj);
            })(i);
        };
    }

    playerPositions[table.DEALER].dealer.obj = new iio.Text('D', playerPositions[table.DEALER].dealer)
                                            .setFont('20px Microsoft YaHei')
                                            .setTextAlign('center')
                                            .setFillStyle('white'); // 庄家标识
    io.addToGroup('table', playerPositions[table.DEALER].dealer.obj);

    potPosition.obj = new iio.Text('0', potPosition)
                            .setFont('30px Microsoft YaHei')
                            .setTextAlign('center')
                            .setFillStyle('white'); // 奖池
    io.addToGroup('table', potPosition.obj);

    
    //payChipsAnim(playerPositions[table.BBLIND.NUMBER].blind.obj, playerPositions[table.BBLIND.NUMBER].icon, playerPositions[table.BBLIND.NUMBER].blind);
    /*
    for (i = 0; i < boardPositions.length; i++) { //牌面
        (function(pos){
            boardPositions[i].obj = new iio.SimpleRect(boardPositions[i], 45, 65)
                                    .addImage('res/Ad.png', function(){
                                                io.addToGroup('table',boardPositions[pos].obj);
                                            });
        })(i);
    };*/

    function holecardShow() { //底牌展示
        var holecard = pokercard.HOLECARD;
        if (typeof holecard.length == 'undefined') {
            holecard = [holecard];
        }
        for (var i = 0; i < holecard.length; i++) {
            (function(pos){
                var cards = holecard[i].CARD.split(' ');
                playerPositions[holecard[i].NUMBER].holecard[0].obj = new iio.SimpleRect(playerPositions[holecard[i].NUMBER].holecard[0], 30, 45)
                                            .setAlpha(0)
                                            .fadeIn(.02)
                                            .addImage('res/'+cards[0]+'.png', function(){
                                                                    io.addToGroup('table',playerPositions[pos].holecard[0].obj);
                                                                }); // 底牌1
                playerPositions[holecard[i].NUMBER].holecard[1].obj = new iio.SimpleRect(playerPositions[holecard[i].NUMBER].holecard[1], 30, 45)
                                            .setAlpha(0)
                                            .fadeIn(.02)
                                            .addImage('res/'+cards[1]+'.png', function(){
                                                                    io.addToGroup('table',playerPositions[pos].holecard[1].obj);
                                                                }); // 底牌2
            })(holecard[i].NUMBER);
        };
    }

    function blindShow() { //盲注展示
        playerPositions[table.SBLIND.NUMBER].blind.obj = new iio.Text(table.SBLIND.CHIPS, playerPositions[table.SBLIND.NUMBER].blind)
                                                .setFont('13px Microsoft YaHei')
                                                .setTextAlign('center')
                                                .setFillStyle('white')
                                                .setAlpha(0)
                                                .fadeIn(.02); // 小盲注
        io.addToGroup('table', playerPositions[table.SBLIND.NUMBER].blind.obj);
        // minus chips
        if (typeof playerPositions[table.SBLIND.NUMBER].chips.obj != 'undefined') {
            playerPositions[table.SBLIND.NUMBER].chips.obj.setText(parseFloat(playerPositions[table.SBLIND.NUMBER].chips.obj.text) - parseFloat(table.SBLIND.CHIPS));
        }
        playerPositions[table.BBLIND.NUMBER].blind.obj = new iio.Text(table.BBLIND.CHIPS, playerPositions[table.BBLIND.NUMBER].blind)
                                                .setFont('13px Microsoft YaHei')
                                                .setTextAlign('center')
                                                .setFillStyle('white')
                                                .setAlpha(0)
                                                .fadeIn(.02); // 大盲注
        io.addToGroup('table', playerPositions[table.BBLIND.NUMBER].blind.obj);
        // minus chips
        if (typeof playerPositions[table.SBLIND.NUMBER].chips.obj != 'undefined') {
            playerPositions[table.BBLIND.NUMBER].chips.obj.setText(parseFloat(playerPositions[table.BBLIND.NUMBER].chips.obj.text) - parseFloat(table.BBLIND.CHIPS));
        }
    }

    function preFlopShow() { //preflop阶段下注
        var players = pokercard.PREFLOP.PLAYER;
        bet2pot();
        bet(players);
    }
    
    function flopShow() { //flop阶段下注
        var players = pokercard.FLOP.PLAYER, cards = pokercard.FLOP.CARD.split(' '), pot = pokercard.FLOP.POT;
        bubbleClear();
        // 展示三张牌
        for (var i = 0; i < cards.length; i++) {
        	(function(pos){
                boardPositions[i].obj = new iio.SimpleRect(boardPositions[i], 45, 65)
                                        .addImage('res/'+cards[i]+'.png', function(){
                                                    io.addToGroup('table',boardPositions[pos].obj);
                                                });
            })(i);
        };
        // 下注
        bet2pot(pot);
        bet(players);
    }

    function turnShow() {
        var players = pokercard.TURN.PLAYER, card = pokercard.TURN.CARD, pot = pokercard.TURN.POT;
        bubbleClear();
        // 展示第四张牌
        boardPositions[3].obj = new iio.SimpleRect(boardPositions[3], 45, 65)
                                        .addImage('res/'+card+'.png', function(){
                                                    io.addToGroup('table',boardPositions[3].obj);
                                                });
        // 下注
        bet2pot(pot);
        bet(players);
    }

    function riverShow() {
    	var players = pokercard.RIVER.PLAYER, card = pokercard.RIVER.CARD, pot = pokercard.RIVER.POT;
    	bubbleClear();
    	// 展示第五张牌
    	boardPositions[4].obj = new iio.SimpleRect(boardPositions[4], 45, 65)
                                        .addImage('res/'+card+'.png', function(){
                                                    io.addToGroup('table',boardPositions[4].obj);
                                                });
    	// 下注
    	bet2pot(pot);
    	bet(players);
    }

    function showdown() {
    	bubbleClear();
    }

    function actionStatus(action) { // call 2 to 4 raise 2 to 4 folds
    	var parseStr = action.toLowerCase().split(' '), ret = {};
        ret.status = parseStr[0];
        if (parseStr[1]) {
        	ret.money = parseStr[1];
        }
        //console.log(ret);
        return ret; //{status: 'raise',money:10}
    }

    function bet(players) { //玩家下注
        var pos = 0;
        function execute(player) {
            if (typeof player == 'undefined') {
                pos = 1;
                return;
            }
            var playerPosition = playerPositions[player.NUMBER];
            pos++;
            var action = actionStatus(player.ACTION);
            switch(action.status) {
                case 'raise':
                case 'call':
                case 'allin':
                        playerPosition.bubble.objBG = new iio.SimpleRect(playerPosition.bubble, 140, 30)
                                                                .setFillStyle('#457502')
                                                                .setAlpha(0)
                                                                .fadeIn(.02); // 气泡背景
                        playerPosition.bubble.obj = new iio.Text(action.status, playerPosition.bubble.x, playerPosition.bubble.y + 5)
                                                                .setFillStyle('white')
                                                                .setTextAlign('center')
                                                                .setAlpha(0)
                                                                .fadeIn(.02); // 文字
                        io.addToGroup('table',playerPosition.bubble.objBG);
                        io.addToGroup('table',playerPosition.bubble.obj);
                        // plus bet
                        if (typeof playerPosition.bet.obj == 'undefined') {
                            playerPosition.bet.obj = new iio.Text(action.money, playerPosition.bet)
                                                        .setFont('12px Microsoft Yahei')
                                                        .setTextAlign('center')
                                                        .setFillStyle('white')
                                                        .setAlpha(.01)
                                                        .enableUpdates(function(obj,dt,player){
                                                            if (obj.styles.alpha > 1) {
                                                                obj.styles.alpha = 1;
                                                                execute(player);
                                                            } else if (obj.styles.alpha < 1){
                                                                obj.styles.alpha += .02;
                                                            }
                                                            return true;
                                                        },players[pos]);
                            io.addToGroup('table', playerPosition.bet.obj);
                        } else {
                            playerPosition.bet.obj.setText(parseFloat(playerPosition.bet.obj.text) + parseFloat(action.money)).setAlpha(.01);
                        }
                        // minus chips
                        if (typeof playerPosition.chips.obj != 'undefined') {
                            playerPosition.chips.obj.setText(parseFloat(playerPosition.chips.obj.text) - parseFloat(action.money));
                        }
                    break;
                case 'check':
                case 'folds':
		    		playerPosition.bubble.objBG = new iio.SimpleRect(playerPosition.bubble, 140, 30)
		                                                    .setFillStyle('#457502')
		                                                    .setAlpha(0)
		                                                    .fadeIn(.02); // 气泡背景
		            playerPosition.bubble.obj = new iio.Text(action.status, playerPosition.bubble.x, playerPosition.bubble.y + 5)
		                                                    .setFillStyle('white')
		                                                    .setTextAlign('center')
		                                                    .setAlpha(.01)
		                                                    .enableUpdates(function(obj,dt,player){
			                                                    if (obj.styles.alpha > 1) {
	                                                                obj.styles.alpha = 1;
	                                                                execute(player);
	                                                            } else if (obj.styles.alpha < 1){
	                                                                obj.styles.alpha += .02;
	                                                            }
	                                                            return true;
		                                                    },players[pos]); // 气泡文字
		            io.addToGroup('table', playerPosition.bubble.objBG);
		            io.addToGroup('table', playerPosition.bubble.obj);
                    break;
            }
            
        }
        execute(players[0]);
    }
    function bubbleClear() { //清空气泡
    	for (var i = 0; i < seats.length; i++) {
    		if (typeof playerPositions[seats[i].NUMBER].bubble.obj != 'undefined') {
    			io.rmvObj(playerPositions[seats[i].NUMBER].bubble.obj);
    			playerPositions[seats[i].NUMBER].bubble.obj = undefined;
    		}
    	};
    }
    function bet2pot(given) { //收集玩家下注到奖池
        var pot = parseFloat(potPosition.obj.text);
        for (var i = 0; i < seats.length; i++) {
            if (typeof playerPositions[seats[i].NUMBER].blind.obj != 'undefined') { //盲注
                pot += parseFloat(playerPositions[seats[i].NUMBER].blind.obj.text);
                io.rmvObj(playerPositions[seats[i].NUMBER].blind.obj);
                playerPositions[seats[i].NUMBER].blind.obj = undefined;
            }
            if (typeof playerPositions[seats[i].NUMBER].bet.obj != 'undefined') { //下注
                pot += parseFloat(playerPositions[seats[i].NUMBER].bet.obj.text);
                io.rmvObj(playerPositions[seats[i].NUMBER].bet.obj);
                playerPositions[seats[i].NUMBER].bet.obj = undefined;
            }
        };
        potPosition.obj.setText(typeof given == 'undefined' ? pot : given);
    }

    io.setFramerate(60);
    recordHelper.io = io;
    recordHelper.testPosition = testPosition;
    recordHelper.pre = preFlopShow;
    recordHelper.act = actionStatus;
    recordHelper.flop = flopShow;
    recordHelper.turn = turnShow;
    recordHelper.river = riverShow;
  };
var recordHelper = {
    data : {},

};