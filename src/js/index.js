 /**
  * 根据转盘旋转角度判断获得什么奖品
  * @param deg
  * @returns {*}
  */
 var arr = []

 function pushArr(code, len) {
     for (var i = 0; i < len; i++) {
         arr.push(code)
     }
 }
 pushArr(1, 2)
 pushArr(2, 200)
 pushArr(3, 300)
 pushArr(4, 498)

 var whichAward = function (deg) {
     console.log(deg);
     if (deg >= 0 && deg < 90) {
         $('.mask').show()
         $('.mask-mony').attr('src','./imgs/no4.png')
         
         console.log('4等奖');

         return 'four'

     } else if (deg >= 90 && deg < 180) {

         $('.mask').show()
        $('.mask-mony').attr('src','./imgs/no2.png')
         console.log('2等奖');

         return 'tow'
     } else if (deg >= 180 && deg < 270) {

         $('.mask').show()
         $('.mask-mony').attr('src','./imgs/no3.png')
         
         console.log('3等奖');
         
         return 'three'
     } else {
         console.log('一等奖');
         $.get('./fs/mwrite.php?extend=x', function (res) {
             console.log(res);
         })
         $('.mask').show()
        //  $('.submit').show()
        $('.mask-mony').on('tap',function(e){
            $('.mask').html(`<div class="mask-img">
            <div class="mask-close">×</div>
            <form class="submit">
                <h3>请输入您的信息</h3>
                <input name="name" type="text" placeholder="您的姓名">
                <input name="mobile" type="bumber" placeholder="您的手机号">
                <input name="wechat" type="text" placeholder="您的微信号">
                <input name="address" type="text" placeholder="您的地址">
                <input type="submit" id="submit">
            </form>
        </div>`)  

        $('.submit').on('submit', function (e) {
            e.preventDefault();
            $.ajax({
                url: './fs/fwrite.php',
                type: 'get',
                data: $(this).serialize(),
                success: function (res) {
       
                    $('.submit').html('<h1>提交成功</h1>')
       
                    setTimeout(function () {
                    $('.mask').hide()
                    }, 3000)
                }
            })
        })
        })
         return 'one'
     }
 }

 function randomDeg() {
     var tp = arr[Math.floor(Math.random() * arr.length)]
     console.log('tp:' + tp);
     var tl = Math.floor(Math.random() * 90)
     if (tp == 1) {
         return 0 + tl
     } else if (tp == 2) {
         return 90 + tl
     } else if (tp == 3) {
         return 180 + tl
     } else if (tp == 4) {
         console.log(270, tl);
         console.log(270 + tl);
         return 270 + tl
     }
 }

 var KinerLottery = new KinerLottery({
     rotateNum: 8, //转盘转动圈数
     body: "#box", //大转盘整体的选择符或zepto对象
     direction: 0, //0为顺时针转动,1为逆时针转动

     disabledHandler: function (key) {

         switch (key) {
             case "noStart":
                 alert("活动尚未开始");
                 break;
             case "completed":
                 alert("您已经参与过活动了");
                 break;
         }

     }, //禁止抽奖时回调

     clickCallback: function () {
         var that = this
         //此处访问接口获取奖品
         $.get('./fs/mread.php', function (res) {
             if (res.length >= 100) {
                 arr.shift()
                 arr.shift()
             }
             that.goKinerLottery(20);
             //  randomDeg()
         })
     }, //点击抽奖按钮,再次回调中实现访问后台获取抽奖结果,拿到抽奖结果后显示抽奖画面

     KinerLotteryHandler: function (deg) {
         whichAward(deg)

         localStorage.setItem('flang', 'ok')
         document.querySelector('.KinerLotteryBtn').classList.add('completed')
         document.querySelector('.KinerLotteryBtn').classList.remove('start')

     } //抽奖结束回调
 });

 //  判断是否参加过活动

 if (localStorage.getItem('flang')) {
     document.querySelector('.KinerLotteryBtn').classList.add('completed')
     document.querySelector('.KinerLotteryBtn').classList.remove('start')
 }

 // 表单提交


//  $('.mask').on('tap', function () {
//      $(this).hide()
//  })
 $('.mask-close').on('tap', function () {
     $('.mask').hide()
 })
 // 阻止事件冒泡
//  $('.mask-img').on('tap', function (e) {
//      e.stopPropagation()
//  })

 



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