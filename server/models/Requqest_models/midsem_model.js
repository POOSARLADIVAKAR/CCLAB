const mongoose = require('mongoose')
const Schema = mongoose.Schema

const midsemSchema = new Schema({
    User_email : String,
    User_Name : String,
    Course_No : String,
    Course_Title : String,
    Class_Rooms : Array,
    Date : Date,
    Time_Start : String,
    Time_end : String,
    Granted : Boolean,
    Belongs_to : String,
    Rejected : Boolean,
    Comment : String,
    PhoneNo : Number
})

const midsemModel = mongoose.model('midsem',midsemSchema)
module.exports = midsemModel