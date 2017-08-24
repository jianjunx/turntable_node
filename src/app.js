const {join} = require('path')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userInfo = require(join(__dirname,'./route/index.js'))

// 使用bodyParser中间件
app.use(bodyParser.urlencoded({ extended: false }))
// 设置静态文件目录
app.use(express.static(join(__dirname,'./static')))

// 拦截所有请求并交给userInfo模块处理
app.use('/',userInfo)

// 监听 3000端口
const server = app.listen(3000, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});