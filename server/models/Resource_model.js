const mongoose = require('mongoose')
const Schema = mongoose.Schema


const resourceSchema = new Schema({
    Room_no : "",
    PC_count : Number,
    Projector : Number
})

const resourceModel = mongoose.model('resources',resourceSchema) //coolaction name in your database

module.exports = resourceModel 
