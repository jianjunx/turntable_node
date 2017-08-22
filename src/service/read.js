
const {MongoClient} = require('mongodb');

const express = require('express')
const manRouter = express.Router()

const url = 'mongodb://localhost:27017/kfcdb';

manRouter.get('/length', (req, res) => {
    MongoClient.connect(url, function (err, db) {
        const collection = db.collection('seatInfo')
        collection.count((err, len) => {
            if(err) console.log(err);
            res.send({'len':len})
        })
        db.close();
    });
})

manRouter.get('/result',(req,res)=>{
    MongoClient.connect(url, function (err, db) {
        const collection = db.collection('userInfo')
        collection.find({}).toArray(function(err, docs) {
            if(err) console.log(err);
            res.send(docs)
          });
        db.close();
    });

})

module.exports = manRouter;