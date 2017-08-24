const {MongoClient} = require('mongodb')

const connect = (collectionName, callback) => {
    const url = 'mongodb://localhost:27017/kfcdb';
    MongoClient.connect(url, (err, db) => {
        const collection = db.collection(collectionName)
        callback(db, collection)
    })
}


exports.insertOne = (collectionName,paramets,callback) => {
    connect(collectionName,(db,collection)=>{
        collection.insertOne(paramets,callback(err,doc))
        db.close()
    })
}

exports.findAll = (collectionName,paramets,callback)=>{
    connect(collectionName,(db,collection)=>{
        collection.find(paramets).toArray(callback(err,docs))
        db.close()
    })
}

exports.getCount = (collectionName,callback)=>{
    connect(collectionName,(db,collection)=>{
        collection.count(callback(err,len))
        db.close()
    })
} 