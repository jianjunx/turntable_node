
const {MongoClient} = require('mongodb')
const app = require('express')()
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))

const url = 'mongodb://localhost:27017/kfcdb';
app.post('/userinfo',(req,res)=>{
    MongoClient.connect(url, function (err, db) {
        const collection = db.collection('userInfo')
        collection.insertOne(req.body,(err,ret)=>{
            if(err) console.log();
            res.send(ret)
        })
        db.close();
    });
})

app.post('/seat',(req,res)=>{
    MongoClient.connect(url, function (err, db) {
        const collection = db.collection('seatInfo')
        collection.insertOne(req.body,(err,ret)=>{
            if(err) console.log();
            res.send(ret)
        })
        db.close();
    });
})

module.exports = app