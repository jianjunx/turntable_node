const {MongoClient} = require('mongodb')
// 封装获取db对象公共方法
const connect = (collectionName, callback) => {
    const url = 'mongodb://localhost:27017/kfcdb';
    MongoClient.connect(url, (err, db) => {
        const collection = db.collection(collectionName)
        callback(db, collection)
    })
}

// 插入一条数据
exports.insertOne = (collectionName,paramets,callback) => {
    connect(collectionName,(db,collection)=>{
        collection.insertOne(paramets,callback(err,doc))
        db.close()
    })
}

// 查询全部数据
exports.findAll = (collectionName,paramets,callback)=>{
    connect(collectionName,(db,collection)=>{
        collection.find(paramets).toArray(callback(err,docs))
        db.close()
    })
}

// 获取集合的长度
exports.getCount = (collectionName,callback)=>{
    connect(collectionName,(db,collection)=>{
        collection.count(callback(err,len))
        db.close()
    })
} 