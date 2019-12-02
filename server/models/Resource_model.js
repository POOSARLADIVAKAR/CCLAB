const mongoose = require('mongoose')
const Schema = mongoose.Schema


const resourceSchema = new Schema({
    Room_no : "",
    Systems : Number,
    Projector : Number,
    Operating_systems : String,
    Softwares : String
})

const resourceModel = mongoose.model('resources',resourceSchema) //coolaction name in your database

module.exports = resourceModel 
