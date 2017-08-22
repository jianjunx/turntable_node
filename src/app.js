const fs = require('fs')
const {join} = require('path')
const express = require('express');

const app = express();
const info = require(join(__dirname,'./pages/info'))
const write = require(join(__dirname,'./service/write'))
const read = require(join(__dirname,'./service/read'))


app.use(express.static(join(__dirname,'./static')))
app.use('/info',info)
app.use('/put',write)
app.use('/get',read)

// 拦截所有请求
app.get('/', function (req, res) {
  const data = fs.readFile(join(__dirname,'./index.html'),(err,v)=>{
      res.end(v);
  })  
});

// 监听 3000端口
const server = app.listen(3000, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});