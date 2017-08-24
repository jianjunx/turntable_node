const {join} = require('path')

exports.clearView = (req, res) => {
    res.sendFile(join(__dirname, '../views/clear.html'))
}

exports.resultView = (req, res) => {
    res.sendFile(join(__dirname, '../views/resultView.html'))
}

exports.indexView = (req, res) => {
    res.sendFile(join(__dirname, '../views/index.html'))
}