 /**
  * 根据转盘旋转角度判断获得什么奖品
  * @param deg
  * @returns {*}
  */
 var whichAward = function (deg) {
     console.log('角度：' + deg);
     if (deg >= 260 && deg < 280) {
         window.localStorage.setItem('prize', 'no4')
         $('.mask').show()
         $('.mask-mony').attr('src', './imgs/no4.png').on('tap', function () {
             alert('这是要跳转页面的操作')

             window.localStorage.removeItem('prize')             
         })
         console.log('4等奖');
         return 'four'

     } else if (deg >= 210 && deg <= 230) {
         window.localStorage.setItem('prize', 'no2')
         $('.mask').show()
         $('.mask-mony').attr('src', './imgs/no2.png').on('tap', function () {
             alert('这是要跳转页面的操作')

             window.localStorage.removeItem('prize')
         })

         return 'tow'
     } else if (deg >= 310 && deg <= 330) {
         window.localStorage.setItem('prize', 'no3')
         $('.mask').show()
         $('.mask-mony').attr('src', './imgs/no3.png').on('tap', function () {
             alert('这是要跳转页面的操作')

             window.localStorage.removeItem('prize')
         })

         return 'three'
     } else if (deg <= 360 && deg >= 340) {
         window.localStorage.setItem('prize', 'no1')
         $.get('./fs/mwrite.php?extend=x', function (res) {
             //  console.log(res);
         })
         $('.mask').show()
         $('.mask-mony').on('tap', function (e) {
             $('.mask').html(`<div class="mask-img">
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
                        window.localStorage.removeItem('prize')
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

 //  概率判断
 function randomDeg(i) {
     var nub = Math.floor(Math.random() * 4) + i
     //  var nub = 600;
     var plus = Math.floor(Math.random() * 20)
     if (nub == 0 || nub == 1) {
         return 0 + plus
     } else if (nub > 1 && nub <= 200) {
         return 130 + plus
     } else if (nub > 200 && nub <= 500) {
         return 30 + plus
     } else if (nub > 500 && nub < 1000) {
         return 80 + plus
     }
 }

 // 推出后可以继续领取
 function retry(prize) {
     
     console.log(prize);
     if (!prize) {
         alert('您已经领取过奖品了哦！')
         return
     }
     $('.mask').show()
     $('.mask-mony').attr('src', './imgs/' + prize + '.png').on('tap', function () {
         alert('这是要跳转页面的操作')
         
         window.localStorage.removeItem('prize')
     })
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
             console.log(window.localStorage.getItem('prize'));
                 retry(window.localStorage.getItem('prize'))
                 break;
         }
     }, //禁止抽奖时回调

     clickCallback: function () {
         var that = this
         //此处访问接口获取奖品
         $.get('./fs/mread.php', function (res) {
             //  if (res.length >= 100) {
             //     // that.goKinerLottery(randomDeg(2));                
             //     return
             //  }
             that.goKinerLottery(randomDeg(0));
             //  randomDeg(0)
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