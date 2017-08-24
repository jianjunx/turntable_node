const {join} = require('path')
const database = require(join(__dirname, '../database/database.js'))

// 添加用户信息的方法
exports.postUserInfo = (req, res) => {
    database.insertOne('userInfo', req.body, (err, docs) => {
        if (err) console.log(err);
        res.send(docs)
    })
}
// 获取用户信息的方法
exports.getUserInfo = (req, res) => {
    database.findAll('userInfo', {}, (err, docs) => {
        if (err) console.log(err);
        res.send(docs);
    })
}
// 获取当前中奖总数的处理函数
exports.getSeatInfo = (req, res) => {
    database.getCount('seatInfo', (err, len) => {
        if (err) console.log(err);
        res.send({
            'len': len
        })

    })
}
// 添加中奖数量的函数
exports.postSeatInfo = (req, res) => {
    database.insertOne('seatInfo', req.body, (err, docs) => {
        if (err) console.log(err);
        res.send(docs)
    })
}
