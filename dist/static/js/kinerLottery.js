"use strict";!function(t,o,n){function i(t){this.opts=n.extend(!0,{},e,t),this.doing=!1,this.init()}var e={rotateNum:5,body:"",disabledHandler:function(){},clickCallback:function(){},KinerLotteryHandler:function(t){}};i.prototype.setOpts=function(t){this.opts=n.extend(!0,{},e,t),this.init()},i.prototype.init=function(){var t=this;this.defNum=360*this.opts.rotateNum,n("body").on("tap",".KinerLotteryBtn",function(){if(n(this).hasClass("start")&&!t.doing)t.opts.clickCallback.call(t);else{var o=n(this).hasClass("no-start")?"noStart":n(this).hasClass("completed")?"completed":"illegal";t.opts.disabledHandler(o)}}),n(this.opts.body).find(".KinerLotteryContent").get(0).addEventListener("webkitTransitionEnd",function(){t.doing=!1;var o=n(t.opts.body).attr("data-deg");0==t.opts.direction?(n(t.opts.body).attr("data-deg",360-o),n(t.opts.body).find(".KinerLotteryContent").css({"-webkit-transition":"none",transition:"none","-webkit-transform":"rotate("+o+"deg)",transform:"rotate("+o+"deg)"}),t.opts.KinerLotteryHandler(360-o)):(n(t.opts.body).attr("data-deg",o),n(t.opts.body).find(".KinerLotteryContent").css({"-webkit-transition":"none",transition:"none","-webkit-transform":"rotate("+-o+"deg)",transform:"rotate("+-o+"deg)"}),t.opts.KinerLotteryHandler(o))})},i.prototype.goKinerLottery=function(t){if(!this.doing){var o=t+this.defNum,i=0==this.opts.direction?o:-o;this.doing=!0,n(this.opts.body).find(".KinerLotteryBtn").addClass("doing"),n(this.opts.body).find(".KinerLotteryContent").css({"-webkit-transition":"all 5s",transition:"all 5s","-webkit-transform":"rotate("+i+"deg)",transform:"rotate("+i+"deg)"}),n(this.opts.body).attr("data-deg",t)}},t.KinerLottery=i}(window,document,$);