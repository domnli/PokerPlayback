//PokerPlayback
var PokerPlayback = function (io) {
    var playerPositions = [
        {},
        {name : {x : 330, y : 700}, icon : {x : 330, y : 750}, chips : {x : 330, y : 800}, dealer : {x : 280, y : 680}, blind : {x : 340, y : 680}, bet : {x : 340, y : 650}, holecard : [{x : 315, y : 750}, {x : 346, y : 750}]},
        {name : {x : 80, y : 560}, icon : {x : 80, y : 610}, chips : {x : 80, y : 660}, dealer : {x : 130, y : 600}, blind : {x : 130, y : 630}, bet : {x : 160, y : 630}, holecard : [{x : 65, y : 610}, {x : 96, y : 610}]},
        {name : {x : 80, y : 360}, icon : {x : 80, y : 410}, chips : {x : 80, y : 460}, dealer : {x : 130, y : 400}, blind : {x : 130, y : 430}, bet : {x : 160, y : 430}, holecard : [{x : 65, y : 410}, {x : 96, y : 410}]},
        {name : {x : 80, y : 160}, icon : {x : 80, y : 210}, chips : {x : 80, y : 260}, dealer : {x : 130, y : 200}, blind : {x : 130, y : 230}, bet : {x : 160, y : 230}, holecard : [{x : 65, y : 210}, {x : 96, y : 210}]},
        {name : {x : 240, y : 30}, icon : {x : 240, y : 80}, chips : {x : 240, y : 130}, dealer : {x : 290, y : 70}, blind : {x : 240, y : 150}, bet : {x : 240, y : 170}, holecard : [{x : 225, y : 80}, {x : 256, y : 80}]},
        {name : {x : 400, y : 30}, icon : {x : 400, y : 80}, chips : {x : 400, y : 130}, dealer : {x : 450, y : 70}, blind : {x : 400, y : 150}, bet : {x : 400, y : 170}, holecard : [{x : 385, y : 80}, {x : 416, y : 80}]},
        {name : {x : 560, y : 160}, icon : {x : 560, y : 210}, chips : {x : 560, y : 260}, dealer : {x : 510, y : 200}, blind : {x : 510, y : 230}, bet : {x : 480, y : 230}, holecard : [{x : 545, y : 210}, {x : 576, y : 210}]},
        {name : {x : 560, y : 360}, icon : {x : 560, y : 410}, chips : {x : 560, y : 460}, dealer : {x : 510, y : 400}, blind : {x : 510, y : 430}, bet : {x : 480, y : 430}, holecard : [{x : 545, y : 410}, {x : 576, y : 410}]},
        {name : {x : 560, y : 560}, icon : {x : 560, y : 610}, chips : {x : 560, y : 660}, dealer : {x : 510, y : 600}, blind : {x : 510, y : 630}, bet : {x : 480, y : 630}, holecard : [{x : 545, y : 610}, {x : 576, y : 610}]}
      ],
      playerPositions5 = [
        {},
        {name : {x : 330, y : 700}, icon : {x : 330, y : 750}, chips : {x : 330, y : 800}, dealer : {x : 280, y : 680}, blind : {x : 340, y : 680}, bet : {x : 340, y : 650}, holecard : [{x : 315, y : 750}, {x : 346, y : 750}]},
        {name : {x : 80, y : 360}, icon : {x : 80, y : 410}, chips : {x : 80, y : 460}, dealer : {x : 130, y : 400}, blind : {x : 130, y : 430}, bet : {x : 160, y : 430}, holecard : [{x : 65, y : 410}, {x : 96, y : 410}]},
        {name : {x : 80, y : 160}, icon : {x : 80, y : 210}, chips : {x : 80, y : 260}, dealer : {x : 130, y : 200}, blind : {x : 130, y : 230}, bet : {x : 160, y : 230}, holecard : [{x : 65, y : 210}, {x : 96, y : 210}]},
        {name : {x : 560, y : 160}, icon : {x : 560, y : 210}, chips : {x : 560, y : 260}, dealer : {x : 510, y : 200}, blind : {x : 510, y : 230}, bet : {x : 480, y : 230}, holecard : [{x : 545, y : 210}, {x : 576, y : 210}]},
        {name : {x : 560, y : 360}, icon : {x : 560, y : 410}, chips : {x : 560, y : 460}, dealer : {x : 510, y : 400}, blind : {x : 510, y : 430}, bet : {x : 480, y : 430}, holecard : [{x : 545, y : 410}, {x : 576, y : 410}]},
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
    io.setBGColor('rgba(0, 126, 255, 0.4)');
    io.addGroup('table'); //头像、名称、筹码组
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

/*    for (var i = 1; i < playerPositions.length; i++) { // 位置测试
        (function(pos){
            playerPositions[i].holecard[0].obj = new iio.SimpleRect(playerPositions[i].holecard[0], 30, 45)
                                        .addImage('res/2d.png', function(){
                                                                io.addToGroup('table',playerPositions[pos].holecard[0].obj);
                                                            }); // 底牌1
            playerPositions[i].holecard[1].obj = new iio.SimpleRect(playerPositions[i].holecard[1], 30, 45)
                                        .addImage('res/2d.png', function(){
                                                                io.addToGroup('table',playerPositions[pos].holecard[1].obj);
                                                            }); // 底牌2
        })(i);
    };*/

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
        playerPositions[table.SBLIND.NUMBER].blind.obj = new iio.Text('S ' + table.SBLIND.CHIPS, playerPositions[table.SBLIND.NUMBER].blind)
                                                .setFont('13px Microsoft YaHei')
                                                .setTextAlign('center')
                                                .setFillStyle('white')
                                                .setAlpha(0)
                                                .fadeIn(.02); // 小盲注
        io.addToGroup('table', playerPositions[table.SBLIND.NUMBER].blind.obj);

        playerPositions[table.BBLIND.NUMBER].blind.obj = new iio.Text('B ' + table.BBLIND.CHIPS, playerPositions[table.BBLIND.NUMBER].blind)
                                                .setFont('13px Microsoft YaHei')
                                                .setTextAlign('center')
                                                .setFillStyle('white')
                                                .setAlpha(0)
                                                .fadeIn(.02); // 大盲注
        io.addToGroup('table', playerPositions[table.BBLIND.NUMBER].blind.obj);
    }

    function preFlopShow() {
        var players = pokercard.PREFLOP.PLAYER;
    }
    holecardShow();
    recordHelper.show = blindShow;
    io.setFramerate(60);
    console.log(io);
    recordHelper.io = io;
  };
var recordHelper = {
    data : {},

};