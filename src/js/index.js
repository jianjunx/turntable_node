 /**
     * 根据转盘旋转角度判断获得什么奖品
     * @param deg
     * @returns {*}
     */
    var arr = []
    function pushArr(code,len){
        for(var i=0;i<len;i++){
            arr.push(code)
        }
    }
    pushArr(1,10)
    pushArr(2,20)
    pushArr(3,30)
    pushArr(4,40)

var whichAward = function(deg) {
    if(deg>=0&&deg<90){


        return 'one'
    }else if(deg>=90&&deg<180){


        return 'tow'
    }else if(deg>=180&&deg<270){


        return 'three'
    }else{

        
        return 'four'
    }
}

function randomDeg(){
    var tp = arr[Math.floor(Math.random()*100)]
    console.log('tp:'+tp);
    var tl = Math.floor(Math.random()*90)
    if(tp==1){
        return 0+tl
    }else if(tp==2){
        return 90+tl
    }else if(tp==3){
        return 180+tl
    }else if(tp==4){
        return 270+tl
    }
}

var KinerLottery = new KinerLottery({
    rotateNum: 8, //转盘转动圈数
    body: "#box", //大转盘整体的选择符或zepto对象
    direction: 0, //0为顺时针转动,1为逆时针转动

    disabledHandler: function(key) {

        switch (key) {
            case "noStart":
                alert("活动尚未开始");
                break;
            case "completed":
                alert("活动已结束");
                break;
        }

    }, //禁止抽奖时回调

    clickCallback: function() {

        //此处访问接口获取奖品
        // function random() {
        //     console.log()
        //     return randomDeg();
        // }

        this.goKinerLottery(randomDeg());

    }, //点击抽奖按钮,再次回调中实现访问后台获取抽奖结果,拿到抽奖结果后显示抽奖画面



    KinerLotteryHandler: function(deg) {

            // alert("恭喜您获得:" + whichAward(deg));
            whichAward(deg)


        } //抽奖结束回调
});

/** 屏蔽分享 */
// function onBridgeReady() {
//     WeixinJSBridge.call('hideOptionMenu');
//     }
    
    
//     if (typeof WeixinJSBridge == "undefined") {
//     if (document.addEventListener) {
//     document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
//     } else if (document.attachEvent) {
//     document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
//     document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
//     }
//     } else {
//     onBridgeReady();
//     }
