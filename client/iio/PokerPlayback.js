//PokerPlayback
var PokerPlayback = function (io) {
    var playerPositions = [
        {},
        {name : {x : 320, y : 800}, icon : {x : 320, y : 870}, chips : {x : 320, y : 940}, dealer : {x : 380, y : 840}, blind : {x : 340, y : 680}, bet : {x : 320, y : 760}, holecard : [{x : 295, y : 870}, {x : 336, y : 870}], bubble : {x : 320, y : 800}},
        {name : {x : 60, y : 620}, icon : {x : 60, y : 690}, chips : {x : 60, y : 760}, dealer : {x : 120, y : 660}, blind : {x : 130, y : 630}, bet : {x : 140, y : 720}, holecard : [{x : 38, y : 700}, {x : 80, y : 700}], bubble : {x : 60, y : 620}},
        {name : {x : 60, y : 410}, icon : {x : 60, y : 480}, chips : {x : 60, y : 550}, dealer : {x : 120, y : 450}, blind : {x : 130, y : 430}, bet : {x : 140, y : 510}, holecard : [{x : 38, y : 480}, {x : 80, y : 480}], bubble : {x : 60, y : 410}},
        {name : {x : 60, y : 200}, icon : {x : 60, y : 270}, chips : {x : 60, y : 340}, dealer : {x : 120, y : 240}, blind : {x : 130, y : 230}, bet : {x : 140, y : 300}, holecard : [{x : 38, y : 270}, {x : 80, y : 270}], bubble : {x : 60, y : 200}},
        {name : {x : 220, y : 20}, icon : {x : 220, y : 90}, chips : {x : 220, y : 160}, dealer : {x : 280, y : 55}, blind : {x : 240, y : 150}, bet : {x : 220, y : 220}, holecard : [{x : 193, y : 90}, {x : 236, y : 90}], bubble : {x : 220, y : 20}},
        {name : {x : 420, y : 20}, icon : {x : 420, y : 90}, chips : {x : 420, y : 160}, dealer : {x : 480, y : 55}, blind : {x : 400, y : 150}, bet : {x : 420, y : 220}, holecard : [{x : 394, y : 90}, {x : 436, y : 90}], bubble : {x : 420, y : 20}},
        {name : {x : 580, y : 200}, icon : {x : 580, y : 270}, chips : {x : 580, y : 340}, dealer : {x : 520, y : 240}, blind : {x : 510, y : 230}, bet : {x : 500, y : 300}, holecard : [{x : 560, y : 270}, {x : 605, y : 270}], bubble : {x : 580, y : 200}},
        {name : {x : 580, y : 410}, icon : {x : 580, y : 480}, chips : {x : 580, y : 550}, dealer : {x : 520, y : 450}, blind : {x : 510, y : 430}, bet : {x : 500, y : 510}, holecard : [{x : 560, y : 480}, {x : 605, y : 480}], bubble : {x : 580, y : 410}},
        {name : {x : 580, y : 620}, icon : {x : 580, y : 690}, chips : {x : 580, y : 760}, dealer : {x : 520, y : 660}, blind : {x : 510, y : 630}, bet : {x : 500, y : 720}, holecard : [{x : 560, y : 700}, {x : 605, y : 700}], bubble : {x : 580, y : 620}}
      ],
      playerPositions5 = [
        {},
        {name : {x : 320, y : 800}, icon : {x : 320, y : 870}, chips : {x : 320, y : 940}, dealer : {x : 380, y : 840}, blind : {x : 340, y : 680}, bet : {x : 320, y : 760}, holecard : [{x : 295, y : 870}, {x : 336, y : 870}], bubble : {x : 320, y : 800}},
        {name : {x : 60, y : 620}, icon : {x : 60, y : 690}, chips : {x : 60, y : 760}, dealer : {x : 120, y : 660}, blind : {x : 130, y : 630}, bet : {x : 140, y : 720}, holecard : [{x : 38, y : 700}, {x : 80, y : 700}], bubble : {x : 60, y : 620}},
        {name : {x : 60, y : 200}, icon : {x : 60, y : 270}, chips : {x : 60, y : 340}, dealer : {x : 120, y : 240}, blind : {x : 130, y : 230}, bet : {x : 140, y : 300}, holecard : [{x : 38, y : 270}, {x : 80, y : 270}], bubble : {x : 60, y : 200}},
        {name : {x : 580, y : 200}, icon : {x : 580, y : 270}, chips : {x : 580, y : 340}, dealer : {x : 520, y : 240}, blind : {x : 510, y : 230}, bet : {x : 500, y : 300}, holecard : [{x : 560, y : 270}, {x : 605, y : 270}], bubble : {x : 580, y : 200}},
        {name : {x : 580, y : 620}, icon : {x : 580, y : 690}, chips : {x : 580, y : 760}, dealer : {x : 520, y : 660}, blind : {x : 510, y : 630}, bet : {x : 500, y : 720}, holecard : [{x : 560, y : 700}, {x : 605, y : 700}], bubble : {x : 580, y : 620}}
      ],
      potPosition = {x : 325, y : 350},
      boardPositions = [
            {x : 190, y : 580},
            {x : 256, y : 580},
            {x : 322, y : 580},
            {x : 398, y : 580},
            {x : 465, y : 580}
        ];
    var  i, record = recordHelper.data, table = record.STAGE.TABLE, seats = table.SEAT, pokercard = record.STAGE.POKERCARD;
    if (table.SEATS == 5) {
        playerPositions = playerPositions5;
    }
    io.setBGImage('res/bg.png');
    io.addGroup('table'); //头像、名称、筹码组
    //io.addGroup('dinamic'); //可变物体
    /*for (i = 0; i < playerPositions.length; i++) { //占位背景
        io.addToGroup('table',
            new iio.SimpleRect(playerPositions[i].icon, 120, 150)
                    .setFillStyle('white')
                    .setAlpha(.1)
            );
    };*/
    function initTable() {
	    for (i = 0; i < seats.length; i++) {
	        (function(pos){
	            playerPositions[seats[i].NUMBER].icon.obj = new iio.Circle(playerPositions[seats[i].NUMBER].icon, 40)
	                                        .setStrokeStyle('white',2)
	                                        .addImage(seats[i].ICON, function(){
	                                                                io.addToGroup('table',playerPositions[pos].icon.obj);
	                                                            }); // 头像
	        })(seats[i].NUMBER);

	        playerPositions[seats[i].NUMBER].name.obj = new iio.Text(seats[i].NAME, playerPositions[seats[i].NUMBER].name)
	                                    .setFont('16px Microsoft YaHei')
	                                    .setTextAlign('center')
	                                    .setFillStyle('white'); // 名称
	        io.addToGroup('table', playerPositions[seats[i].NUMBER].name.obj);
	        playerPositions[seats[i].NUMBER].chips.objBG = new iio.SimpleRect(playerPositions[seats[i].NUMBER].chips.x, playerPositions[seats[i].NUMBER].chips.y - 5, 80, 20)
	                                        .setFillStyle('black')
	                                        .setAlpha(.3); // 筹码背景
	        io.addToGroup('table', playerPositions[seats[i].NUMBER].chips.objBG);
	        playerPositions[seats[i].NUMBER].chips.obj = new iio.Text(seats[i].CHIPS, playerPositions[seats[i].NUMBER].chips)
	                                    .setFont('16px Microsoft YaHei')
	                                    .setTextAlign('center')
	                                    .setFillStyle('white'); // 筹码
	        io.addToGroup('table', playerPositions[seats[i].NUMBER].chips.obj);
	    };

	    for (i = 1; i < playerPositions.length; i++) {
	    	if (typeof playerPositions[i].icon.obj == 'undefined' ) {
	    		(function(pos){
	    			playerPositions[i].icon.obj = new iio.Circle(playerPositions[i].icon, 41)
	    			                                  .addImage('res/empty.png',function(){
	    			                                  	    io.addToGroup('table',playerPositions[pos].icon.obj);
	    			                                  }); //空闲头像
	    		})(i);
	    	}
	    };

	    playerPositions[table.DEALER].dealer.obj = new iio.SimpleRect(playerPositions[table.DEALER].dealer,20)
	                                            .addImage('res/dealer.png',function(){
	                                            	io.addToGroup('table',playerPositions[table.DEALER].dealer.obj);
	                                            }); // 庄家标识
	    
	    potPosition.objBG = new iio.SimpleRect(potPosition,127,44)
	                            .addImage('res/pot.png',function(){
	                            	io.addToGroup('table',potPosition.objBG);
	                            });
	    potPosition.obj = new iio.Text('0', potPosition.x + 20,potPosition.y + 7)
	                            .setFont('20px Microsoft YaHei')
	                            .setTextAlign('center')
	                            .setFillStyle('white'); // 奖池
	    io.addToGroup('table', potPosition.obj);
    }
    

    function blindShow() { //盲注展示
    	playerPositions[table.SBLIND.NUMBER].bet.objBG = new iio.SimpleRect(playerPositions[table.SBLIND.NUMBER].bet.x,playerPositions[table.SBLIND.NUMBER].bet.y - 30,28)
    	                                                    .setAlpha(0)
    	                                                    .fadeIn(.2)
    	                                                    .addImage('res/chips.png',function(){
    	                                                    	io.addToGroup('table',playerPositions[table.SBLIND.NUMBER].bet.objBG);
    	                                                    });
        playerPositions[table.SBLIND.NUMBER].bet.obj = new iio.Text(table.SBLIND.CHIPS, playerPositions[table.SBLIND.NUMBER].bet)
                                                .setFont('16px Microsoft YaHei')
                                                .setTextAlign('center')
                                                .setFillStyle('white')
                                                .setAlpha(0)
                                                .fadeIn(.2); // 小盲注
        io.addToGroup('table', playerPositions[table.SBLIND.NUMBER].bet.obj);
        // minus chips
        if (typeof playerPositions[table.SBLIND.NUMBER].chips.obj != 'undefined') {
            playerPositions[table.SBLIND.NUMBER].chips.obj.setText(parseFloat(playerPositions[table.SBLIND.NUMBER].chips.obj.text) - parseFloat(table.SBLIND.CHIPS));
        }

        playerPositions[table.BBLIND.NUMBER].bet.objBG = new iio.SimpleRect(playerPositions[table.BBLIND.NUMBER].bet.x,playerPositions[table.BBLIND.NUMBER].bet.y - 30,28)
    	                                                    .setAlpha(0)
    	                                                    .fadeIn(.2)
    	                                                    .addImage('res/chips.png',function(){
    	                                                    	io.addToGroup('table',playerPositions[table.BBLIND.NUMBER].bet.objBG);
    	                                                    });
        playerPositions[table.BBLIND.NUMBER].bet.obj = new iio.Text(table.BBLIND.CHIPS, playerPositions[table.BBLIND.NUMBER].bet)
                                                .setFont('16px Microsoft YaHei')
                                                .setTextAlign('center')
                                                .setFillStyle('white')
                                                .setAlpha(0)
                                                .fadeIn(.2); // 大盲注
        io.addToGroup('table', playerPositions[table.BBLIND.NUMBER].bet.obj);
        // minus chips
        if (typeof playerPositions[table.SBLIND.NUMBER].chips.obj != 'undefined') {
            playerPositions[table.BBLIND.NUMBER].chips.obj.setText(parseFloat(playerPositions[table.BBLIND.NUMBER].chips.obj.text) - parseFloat(table.BBLIND.CHIPS));
        }
    }

    function holecardShow() { //底牌展示
        var holecard = pokercard.HOLECARD;
        if (typeof holecard.length == 'undefined') {
            holecard = [holecard];
        }
        for (var i = 0; i < holecard.length; i++) {
            (function(pos){
                var cards = holecard[i].CARD.split(' ');
                playerPositions[holecard[i].NUMBER].holecard[0].obj = new iio.SimpleRect(playerPositions[holecard[i].NUMBER].holecard[0], 66, 95)
                                            .rotate(-Math.PI/36)
                                            .setAlpha(0)
                                            .fadeIn(.02)
                                            .addImage('res/'+cards[0]+'.png', function(){
                                                                    io.addToGroup('table',playerPositions[pos].holecard[0].obj);
                                                                }); // 底牌1
                playerPositions[holecard[i].NUMBER].holecard[1].obj = new iio.SimpleRect(playerPositions[holecard[i].NUMBER].holecard[1], 66, 95)
                                            .rotate(Math.PI/36)
                                            .setAlpha(0)
                                            .fadeIn(.02)
                                            .addImage('res/'+cards[1]+'.png', function(){
                                                                    io.addToGroup('table',playerPositions[pos].holecard[1].obj);
                                                                }); // 底牌2
            })(holecard[i].NUMBER);
        };
        for (var i = 1; i < playerPositions.length; i++) {
        	if (typeof playerPositions[i].holecard[1].obj == 'undefined' && typeof playerPositions[i].name.obj != 'undefined') {
        		(function(pos){
                     playerPositions[i].holecard[1].obj = new iio.SimpleRect(playerPositions[i].holecard[1].x, playerPositions[i].holecard[1].y + 20, 44, 41)
        		                                            .addImage('res/closecard.png',function(){
                                                                io.addToGroup('table',playerPositions[pos].holecard[1].obj);
        		                                            });
        		})(i);
        	}
        };
    }

    function preFlopShow() { //preflop阶段下注
        var players = pokercard.PREFLOP.PLAYER;
        bubbleClear();
        bet(players);
    }
    
    function flopShow() { //flop阶段下注
        var players = pokercard.FLOP.PLAYER, cards = pokercard.FLOP.CARD.split(' '), pot = pokercard.FLOP.POT;
        bubbleClear();
        // 展示三张牌
        for (var i = 0; i < cards.length; i++) {
        	(function(pos){
                boardPositions[i].obj = new iio.SimpleRect(boardPositions[i], 66, 95)
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
        boardPositions[3].obj = new iio.SimpleRect(boardPositions[3], 66, 95)
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
    	boardPositions[4].obj = new iio.SimpleRect(boardPositions[4], 66, 95)
                                        .addImage('res/'+card+'.png', function(){
                                                    io.addToGroup('table',boardPositions[4].obj);
                                                });
    	// 下注
    	bet2pot(pot);
    	bet(players);
    }

    function showDown() {
    	bubbleClear();
    	var players = record.STAGE.SHOWDOWN.PLAYER;
    	for (var i = 0; i < players.length; i++) {
    		if (typeof playerPositions[players[i].NUMBER].holecard[0].obj == 'undefined') { // 亮底牌
    			var cards = players[i].CARD.split(' ');
    			(function(pos, cards){
	                playerPositions[pos].holecard[0].obj = new iio.SimpleRect(playerPositions[pos].holecard[0], 66, 95)
	                                            .rotate(-Math.PI/36)
	                                            .setAlpha(0)
	                                            .fadeIn(.02)
	                                            .addImage('res/'+cards[0]+'.png', function(){
	                                                                    io.addToGroup('table',playerPositions[pos].holecard[0].obj);
	                                                                }); // 底牌1
	                playerPositions[pos].holecard[1].obj = new iio.SimpleRect(playerPositions[pos].holecard[1], 66, 95)
	                                            .rotate(Math.PI/36)
	                                            .setAlpha(0)
	                                            .fadeIn(.02)
	                                            .addImage('res/'+cards[1]+'.png', function(){
	                                                                    io.addToGroup('table',playerPositions[pos].holecard[1].obj);
	                                                                }); // 底牌2
	            })(players[i].NUMBER,cards);
    		}
    		// 显示牌型
    		playerPositions[players[i].NUMBER].chips.objBG = new iio.SimpleRect(playerPositions[players[i].NUMBER].chips.x, playerPositions[players[i].NUMBER].chips.y - 5, 80, 20)
    		                                                     .setFillStyle('yellow');
	        io.addToGroup('table',playerPositions[players[i].NUMBER].chips.objBG);
	        playerPositions[players[i].NUMBER].chips.obj = new iio.Text(players[i].DESCRP, playerPositions[players[i].NUMBER].chips)
	                                                           .setFont('16px Microsoft YaHei')
	                                                           .setTextAlign('center')
	                                                           .setFillStyle('black');
	        io.addToGroup('table',playerPositions[players[i].NUMBER].chips.obj);
    		// 展示所赢筹码
    		playerPositions[players[i].NUMBER].bubble.objBG = new iio.SimpleRect(playerPositions[players[i].NUMBER].bubble.x, playerPositions[players[i].NUMBER].bubble.y - 5, 80, 20)
    		                                                     .setFillStyle('red');
	        io.addToGroup('table',playerPositions[players[i].NUMBER].bubble.objBG);
	        playerPositions[players[i].NUMBER].bubble.obj = new iio.Text(players[i].ACTION, playerPositions[players[i].NUMBER].bubble)
	                                                           .setFont('16px Microsoft YaHei')
	                                                           .setTextAlign('center')
	                                                           .setFillStyle('white');
	        io.addToGroup('table',playerPositions[players[i].NUMBER].bubble.obj);

    	};
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
                        if (typeof playerPosition.bubble.obj == 'undefined') {
                        	playerPosition.bubble.obj = new iio.SimpleRect(playerPosition.bubble, 82, 54)
                                                                .setPos(playerPosition.bubble.x,playerPosition.bubble.y + 20)
                                                                .addImage('res/'+action.status+'.png',function(){
                                                                	io.addToGroup('table',playerPosition.bubble.obj);
                                                                })
                                                                .enableUpdates(function(obj,dt,player){
                                                                      if(obj.pos.y < player[1]){
                                                                               obj.pos.y = player[1];
                                                                               execute(player[0]);
                                                                      }else if (obj.pos.y > player[1]){
                                                                            obj.pos.y -= .8;
                                                                      }
                                                                      return true;
                                                                },[players[pos],playerPosition.bubble.y]); // 气泡
                        } else{
                        	playerPosition.bubble.obj
                        	                .addImage('res/'+action.status+'.png')
                        		            .setPos(playerPosition.bubble.x,playerPosition.bubble.y + 20)
                        		            .enableUpdates(function(obj,player){
                                                                  if(obj.pos.y < player[1]){
                                                                           obj.pos.y = player[1];
                                                                           execute(player[0]);
                                                                  }else if (obj.pos.y > player[1]){
                                                                        obj.pos.y -= .8;
                                                                  }
                                                                  return true;
                                                            },[players[pos],playerPosition.bubble.y]);
                        }
                        
                        // plus bet
                        if (typeof playerPosition.bet.obj == 'undefined') {
                        	playerPosition.bet.objBG = new iio.SimpleRect(playerPosition.bet.x,playerPosition.bet.y - 30,28)
    	                                                    //.setAlpha(0)
    	                                                    //.fadeIn(.2)
    	                                                    .addImage('res/chips.png',function(){
    	                                                    	io.addToGroup('table',playerPosition.bet.objBG);
    	                                                    });
                            playerPosition.bet.obj = new iio.Text(action.money, playerPosition.bet)
                                                        .setFont('16px Microsoft YaHei')
		                                                .setTextAlign('center')
		                                                .setFillStyle('white');
                            io.addToGroup('table', playerPosition.bet.obj);
                        } else {
                            playerPosition.bet.obj.setText(parseFloat(playerPosition.bet.obj.text) + parseFloat(action.money));
                        }
                        // minus chips
                        if (typeof playerPosition.chips.obj != 'undefined') {
                            playerPosition.chips.obj.setText(parseFloat(playerPosition.chips.obj.text) - parseFloat(action.money));
                        }
                    break;
                case 'check':
                case 'folds':
                    if (typeof playerPosition.bubble.obj == 'undefined') {
                        	playerPosition.bubble.obj = new iio.SimpleRect(playerPosition.bubble, 82, 54)
                                                                .setPos(playerPosition.bubble.x,playerPosition.bubble.y + 20)
                                                                .addImage('res/'+action.status+'.png',function(){
                                                                	io.addToGroup('table',playerPosition.bubble.obj);
                                                                })
                                                                .enableUpdates(function(obj,dt,player){
                                                                      if(obj.pos.y < player[1]){
                                                                               obj.pos.y = player[1];
                                                                               execute(player[0]);
                                                                      }else if (obj.pos.y > player[1]){
                                                                            obj.pos.y -= .8;
                                                                      }
                                                                      return true;
                                                                },[players[pos],playerPosition.bubble.y]); // 气泡
                        } else{
                        	playerPosition.bubble.obj
                        	                .addImage('res/'+action.status+'.png')
                        		            .setPos(playerPosition.bubble.x,playerPosition.bubble.y + 20)
                        		            .enableUpdates(function(obj,player){
                                                                  if(obj.pos.y < player[1]){
                                                                           obj.pos.y = player[1];
                                                                           execute(player[0]);
                                                                  }else if (obj.pos.y > player[1]){
                                                                        obj.pos.y -= .8;
                                                                  }
                                                                  return true;
                                                            },[players[pos],playerPosition.bubble.y]);
                        }
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
            if (typeof playerPositions[seats[i].NUMBER].bet.obj != 'undefined') { //注码
                pot += parseFloat(playerPositions[seats[i].NUMBER].bet.obj.text);
                io.rmvObj(playerPositions[seats[i].NUMBER].bet.obj);
                playerPositions[seats[i].NUMBER].bet.obj = undefined;

                io.rmvObj(playerPositions[seats[i].NUMBER].bet.objBG);
                playerPositions[seats[i].NUMBER].bet.objBG = undefined;
            }
        }
        potPosition.obj.setText(typeof given == 'undefined' ? pot : given);
    }
    
   	function start(){
		initTable();
		setTimeout(blindShow,1000);
	    setTimeout(holecardShow,2000);
	    setTimeout(preFlopShow,4000);
	    setTimeout(flopShow,7000);
	    setTimeout(turnShow,10000);
	    setTimeout(riverShow,13000);
	    setTimeout(showDown,16000);
	}
	function stop(){
		io.rmvAll();
		function restorePositions(){
			// TODO 遍历playerPositions 设置 .obj = undefined;
		}
		io.draw();
	}


    function testPosition() {
        for (var i = 1; i < playerPositions.length; i++) { // 位置测试
            (function(pos){
                playerPositions[i].icon.obj = new iio.Circle(playerPositions[i].icon, 40)
                                            .setStrokeStyle('white',2)
                                            .addImage('res/icon.png', function(){
                                                                    io.addToGroup('table',playerPositions[pos].icon.obj);
                                                                }); // 头像                     
                playerPositions[i].name.obj = new iio.Text('seats[i].NAME', playerPositions[i].name)
                                    .setFont('16px Microsoft YaHei')
                                    .setTextAlign('center')
                                    .setFillStyle('white'); // 名称
		        io.addToGroup('table', playerPositions[i].name.obj);
		        playerPositions[i].chips.objBG = new iio.SimpleRect(playerPositions[i].chips.x, playerPositions[i].chips.y - 5, 80, 20)
		                                        .setFillStyle('black')
		                                        .setAlpha(.3); // 筹码背景
		        io.addToGroup('table', playerPositions[i].chips.objBG);
		        playerPositions[i].chips.obj = new iio.Text('99999', playerPositions[i].chips)
                                    .setFont('16px Microsoft YaHei')
                                    .setTextAlign('center')
                                    .setFillStyle('white'); // 筹码
        		io.addToGroup('table', playerPositions[i].chips.obj);
        		playerPositions[i].dealer.obj = new iio.SimpleRect(playerPositions[i].dealer,20)
                                            .addImage('res/dealer.png',function(){
                                            	io.addToGroup('table',playerPositions[pos].dealer.obj);
                                            }); // 庄家标识
                playerPositions[i].bet.objBG = new iio.SimpleRect(playerPositions[i].bet.x,playerPositions[i].bet.y - 30,28)
    	                                                    .setAlpha(0)
    	                                                    .fadeIn(.2)
    	                                                    .addImage('res/chips.png',function(){
    	                                                    	io.addToGroup('table',playerPositions[pos].bet.objBG);
    	                                                    });
		        playerPositions[i].bet.obj = new iio.Text(table.SBLIND.CHIPS, playerPositions[i].bet)
		                                                .setFont('16px Microsoft YaHei')
		                                                .setTextAlign('center')
		                                                .setFillStyle('white')
		                                                .setAlpha(0)
		                                                .fadeIn(.2); // 盲注
		        io.addToGroup('table', playerPositions[i].bet.obj);
				
                playerPositions[i].holecard[0].obj = new iio.SimpleRect(playerPositions[i].holecard[0], 66, 95)
                                            .rotate(-Math.PI/36)
                                            .setAlpha(0)
                                            .fadeIn(.02)
                                            .addImage('res/2h.png', function(){
                                                                    io.addToGroup('table',playerPositions[pos].holecard[0].obj);
                                                                }); // 底牌1
                playerPositions[i].holecard[1].obj = new iio.SimpleRect(playerPositions[i].holecard[1], 66, 95)
                                            .rotate(Math.PI/36)
                                            .setAlpha(0)
                                            .fadeIn(.02)
                                            .addImage('res/3d.png', function(){
                                                                    io.addToGroup('table',playerPositions[pos].holecard[1].obj);
                                                                }); // 底牌2
                playerPositions[i].bubble.obj = new iio.SimpleRect(playerPositions[i].bubble, 82, 54)
                                                    .addImage('res/raise.png',function(){
                                                    	io.addToGroup('table', playerPositions[pos].bubble.obj);
                                                    }); // 气泡
            })(i);
        };
        for (i = 0; i < boardPositions.length; i++) { //牌面
			        (function(pos){
			            boardPositions[i].obj = new iio.SimpleRect(boardPositions[i], 66, 95)
			                                    .addImage('res/Ad.png', function(){
			                                                io.addToGroup('table',boardPositions[pos].obj);
			                                            });
			        })(i);
			    };
    }
    io.setFramerate(60);
    recordHelper.io = io;
/*    recordHelper.testPosition = testPosition;
    recordHelper.blind = blindShow;
    recordHelper.holecard = holecardShow;
    recordHelper.pre = preFlopShow;
    recordHelper.act = actionStatus;
    recordHelper.flop = flopShow;
    recordHelper.turn = turnShow;
    recordHelper.river = riverShow;*/
    recordHelper.start = start;
    recordHelper.stop = stop;
    //testPosition();

  };
var recordHelper = {
    data : {},

};