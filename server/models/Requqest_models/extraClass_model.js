const mongoose = require('mongoose')
const Schema = mongoose.Schema

const extraClassSchema = new Schema({
    User_email : String,
    User_Name : String,
    Course_No : String,
    Course_Title : String,
    Class_Rooms : Array,
    Date : Date,
    Time_Start : String,
    Time_end : String
})

const extraClassModel = mongoose.model('extraClass',extraClassSchema)
module.exports = extraClassModel