//PokerPlayback
var PokerPlayback = function (io) {
    var playerPositions = [
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
      potPosition = {x : 330, y : 350},
      boardPositions = [
            {x : 230, y : 450},
            {x : 276, y : 450},
            {x : 322, y : 450},
            {x : 368, y : 450},
            {x : 414, y : 450}
        ];
    var  i;
    io.setBGColor('rgba(0, 126, 255, 0.4)');
    io.addGroup('table'); //头像、名称、筹码组
    /*for (i = 0; i < playerPositions.length; i++) {
        io.addToGroup('table',
            new iio.SimpleRect(playerPositions[i].icon, 120, 150)
                    .setFillStyle('white')
                    .setAlpha(.1)
            );
    };*/
    for (i = 0; i < playerPositions.length; i++) {
        (function(pos){
            playerPositions[i].icon.obj = new iio.Circle(playerPositions[i].icon, 30)
                                        .setStrokeStyle('white',2)
                                        .addImage('res/icon.png', function(){
                                                                io.addToGroup('table',playerPositions[pos].icon.obj);
                                                            }); // 头像
        })(i);

        playerPositions[i].name.obj = new iio.Text('名称asdfdsafdsa', playerPositions[i].name)
                                    .setFont('14px Microsoft YaHei')
                                    .setTextAlign('center')
                                    .setFillStyle('white'); // 名称
        io.addToGroup('table', playerPositions[i].name.obj);
     /*   playerPositions[i].chips.bgobj = new iio.SimpleRect(playerPositions[i].chips.x, playerPositions[i].chips.y - 5, 80, 20)
                                        .setFillStyle('black')
                                        .setAlpha(.3); // 筹码背景
        io.addToGroup('table', playerPositions[i].chips.bgobj);*/
        playerPositions[i].chips.obj = new iio.Text('8888.0000', playerPositions[i].chips)
                                    .setFont('12px Microsoft YaHei')
                                    .setTextAlign('center')
                                    .setFillStyle('white'); // 筹码
        io.addToGroup('table', playerPositions[i].chips.obj);


        playerPositions[i].dealer.obj = new iio.Text('D', playerPositions[i].dealer)
                                            .setFont('20px Microsoft YaHei')
                                            .setTextAlign('center')
                                            .setFillStyle('white'); // 庄家标识
        io.addToGroup('table', playerPositions[i].dealer.obj);
        playerPositions[i].blind.obj = new iio.Text('SB100', playerPositions[i].blind)
                                            .setFont('13px Microsoft YaHei')
                                            .setTextAlign('center')
                                            .setFillStyle('white'); // 庄家标识
        io.addToGroup('table', playerPositions[i].blind.obj);
        playerPositions[i].bet.obj = new iio.Text('bet200', playerPositions[i].bet)
                                            .setFont('13px Microsoft YaHei')
                                            .setTextAlign('center')
                                            .setFillStyle('white'); // 庄家标识
        io.addToGroup('table', playerPositions[i].bet.obj);
    };
    potPosition.obj = new iio.Text('POT10000', potPosition)
                            .setFont('30px Microsoft YaHei')
                            .setTextAlign('center')
                            .setFillStyle('white'); // 奖池
    io.addToGroup('table', potPosition.obj);
    for (i = 0; i < boardPositions.length; i++) {
        (function(pos){
            boardPositions[i].obj = new iio.SimpleRect(boardPositions[i], 45, 65)
                                    .addImage('res/Ad.png', function(){
                                                io.addToGroup('table',boardPositions[pos].obj);
                                            });
        })(i);
    };
    console.log(io);
  };
var recordHelper = {
    json : {},

};