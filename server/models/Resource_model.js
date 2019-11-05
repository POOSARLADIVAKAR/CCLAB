const mongoose = require('mongoose')
const Schema = mongoose.Schema


const resourceSchema = new Schema({
    Room_no : "",
    Systems : Number,
    Projector : Number,
    Seats : Number,
    Linux : Number,
    Windows : Number,
    Matlab : Number,
    AutoCad : Number,
    QTspim : Number
})

const resourceModel = mongoose.model('resources',resourceSchema) //coolaction name in your database

module.exports = resourceModel 
