const {join} = require('path')
const database = require(join(__dirname, '../database/database.js'))

exports.postUserInfo = (req, res) => {
    database.insertOne('userInfo', req.body, (err, docs) => {
        if (err) console.log(err);
        res.send(docs)
    })
}

exports.getUserInfo = (req, res) => {
    database.findAll('userInfo', {}, (err, docs) => {
        if (err) console.log(err);
        res.send(docs);
    })
}

exports.getSeatInfo = (req, res) => {
    database.getCount('seatInfo', (err, len) => {
        if (err) console.log(err);
        res.send({
            'len': len
        })

    })
}

exports.postSeatInfo = (req, res) => {
    database.insertOne('seatInfo', req.body, (err, docs) => {
        if (err) console.log(err);
        res.send(docs)
    })
}
