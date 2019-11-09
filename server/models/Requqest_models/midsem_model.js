const mongoose = require('mongoose')
const Schema = mongoose.Schema

const midsemSchema = new Schema({
    User : String,
    Course_No : String,
    Course_Title : String,
    Class_Rooms : Array,
    Date : Date,
    Time_Start : String,
    Time_end : String
})

const midsemModel = mongoose.model('midsem',midsemSchema)
module.exports = midsemModel