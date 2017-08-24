const express = require('express');
const router = express.Router();
const {join} = require('path')
const mainCtrl = require(join(__dirname,'../controller/manCtrl.js'))
const viewCtrl = require(join(__dirname),'../controller/viewCtrl.js')

// 处理/userinfo请求
router.get('/userinfo',mainCtrl.getUserInfo)
router.post('/userinfo',mainCtrl.postUserInfo)
// 处理/seat请求
router.get('/seat',mainCtrl.getSeatInfo)
router.post('/seat',mainCtrl.postSeatInfo)

// 处理返回view页面请求
router.get('/',viewCtrl.indexView)
router.get('/clear',viewCtrl.clearView)
router.get('/result',viewCtrl.resultView)

module.exports = router