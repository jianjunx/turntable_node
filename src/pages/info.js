const manRoute = require('express').Router()
const fs = require('fs')
const {join} = require('path')

manRoute.get('/clear',(req,res)=>{
    fs.readFile(join(__dirname,'./clear.html'),(err,data)=>{
        if(err) console.log(err);
        res.end(data)
    })
})

manRoute.get('/result',(req,res)=>{
    fs.readFile(join(__dirname,'./resultView.html'),(err,data)=>{
        if(err) console.log(err);
        res.end(data)
    })
})

module.exports = manRoute;