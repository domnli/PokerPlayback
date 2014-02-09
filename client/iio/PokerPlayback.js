//PokerPlayback
var PokerPlayback = function (io) {
    var playerPositions = [
        {},
        {name : {x : 330, y : 700}, icon : {x : 330, y : 750}, chips : {x : 330, y : 800}, dealer : {x : 280, y : 680}, blind : {x : 340, y : 680}, bet : {x : 340, y : 650}},
        {name : {x : 80, y : 560}, icon : {x : 80, y : 610}, chips : {x : 80, y : 660}, dealer : {x : 130, y : 600}, blind : {x : 130, y : 630}, bet : {x : 160, y : 630}},
        {name : {x : 80, y : 360}, icon : {x : 80, y : 410}, chips : {x : 80, y : 460}, dealer : {x : 130, y : 400}, blind : {x : 130, y : 430}, bet : {x : 160, y : 430}},
        {name : {x : 80, y : 160}, icon : {x : 80, y : 210}, chips : {x : 80, y : 260}, dealer : {x : 130, y : 200}, blind : {x : 130, y : 230}, bet : {x : 160, y : 230}},
        {name : {x : 240, y : 30}, icon : {x : 240, y : 80}, chips : {x : 240, y : 130}, dealer : {x : 290, y : 70}, blind : {x : 240, y : 150}, bet : {x : 240, y : 170}},
        {name : {x : 400, y : 30}, icon : {x : 400, y : 80}, chips : {x : 400, y : 130}, dealer : {x : 450, y : 70}, blind : {x : 400, y : 150}, bet : {x : 400, y : 170}},
        {name : {x : 560, y : 160}, icon : {x : 560, y : 210}, chips : {x : 560, y : 260}, dealer : {x : 510, y : 200}, blind : {x : 510, y : 230}, bet : {x : 480, y : 230}},
        {name : {x : 560, y : 360}, icon : {x : 560, y : 410}, chips : {x : 560, y : 460}, dealer : {x : 510, y : 400}, blind : {x : 510, y : 430}, bet : {x : 480, y : 430}},
        {name : {x : 560, y : 560}, icon : {x : 560, y : 610}, chips : {x : 560, y : 660}, dealer : {x : 510, y : 600}, blind : {x : 510, y : 630}, bet : {x : 480, y : 630}}
      ],
      playerPositions5 = [
        {},
        {name : {x : 330, y : 700}, icon : {x : 330, y : 750}, chips : {x : 330, y : 800}, dealer : {x : 280, y : 680}, blind : {x : 340, y : 680}, bet : {x : 340, y : 650}},
        {name : {x : 80, y : 360}, icon : {x : 80, y : 410}, chips : {x : 80, y : 460}, dealer : {x : 130, y : 400}, blind : {x : 130, y : 430}, bet : {x : 160, y : 430}},
        {name : {x : 80, y : 160}, icon : {x : 80, y : 210}, chips : {x : 80, y : 260}, dealer : {x : 130, y : 200}, blind : {x : 130, y : 230}, bet : {x : 160, y : 230}},
        {name : {x : 560, y : 160}, icon : {x : 560, y : 210}, chips : {x : 560, y : 260}, dealer : {x : 510, y : 200}, blind : {x : 510, y : 230}, bet : {x : 480, y : 230}},
        {name : {x : 560, y : 360}, icon : {x : 560, y : 410}, chips : {x : 560, y : 460}, dealer : {x : 510, y : 400}, blind : {x : 510, y : 430}, bet : {x : 480, y : 430}},
      ],
      potPosition = {x : 325, y : 350},
      boardPositions = [
            {x : 230, y : 450},
            {x : 276, y : 450},
            {x : 322, y : 450},
            {x : 368, y : 450},
            {x : 414, y : 450}
        ];
    var  i, record = recordHelper.data, table = record.STAGE.TABLE, seats = table.SEAT;
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

    playerPositions[table.SBLIND.NUMBER].blind.obj = new iio.Text('S ' + table.SBLIND.CHIPS, playerPositions[table.SBLIND.NUMBER].blind)
                                            .setFont('13px Microsoft YaHei')
                                            .setTextAlign('center')
                                            .setFillStyle('white'); // 小盲注
    io.addToGroup('table', playerPositions[table.SBLIND.NUMBER].blind.obj);
    payChipsAnim(playerPositions[table.SBLIND.NUMBER].blind.obj, playerPositions[table.SBLIND.NUMBER].icon, playerPositions[table.SBLIND.NUMBER].blind);

    playerPositions[table.BBLIND.NUMBER].blind.obj = new iio.Text('B ' + table.BBLIND.CHIPS, playerPositions[table.BBLIND.NUMBER].blind)
                                            .setFont('13px Microsoft YaHei')
                                            .setTextAlign('center')
                                            .setFillStyle('white'); // 大盲注
    io.addToGroup('table', playerPositions[table.BBLIND.NUMBER].blind.obj);
    payChipsAnim(playerPositions[table.BBLIND.NUMBER].blind.obj, playerPositions[table.BBLIND.NUMBER].icon, playerPositions[table.BBLIND.NUMBER].blind);
    /*
    for (i = 0; i < boardPositions.length; i++) { //牌面
        (function(pos){
            boardPositions[i].obj = new iio.SimpleRect(boardPositions[i], 45, 65)
                                    .addImage('res/Ad.png', function(){
                                                io.addToGroup('table',boardPositions[pos].obj);
                                            });
        })(i);
    };*/
    function payChipsAnim(obj, from, to) { //从 pos.x - x, pox.y - y移动到pos
        obj.setPos(from);
        obj.enableKinematics().setVel(from.x == to.x ? 0 : from.x > to.x ? -2 : 2, from.y == to.y ? 0 : from.y > to.y ? -2 : 2);
        io.setFramerate(60, function(){
            if (to.x == obj.pos.x && to.y == obj.pos.y) {
                io.cancelFramerate();
            }
        });
    }
    console.log(io);
    recordHelper.io = io;
  };
var recordHelper = {
    data : {},

};