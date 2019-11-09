const mongoose = require('mongoose')
const Schema = mongoose.Schema

const compreSchema = new Schema({
    User_email : String,
    User_Name : String,
    Course_No : String,
    Course_Title : String,
    Class_Rooms : Array,
    Date : Date,
    Time_Start : String,
    Time_end : String
})

const compreModel = mongoose.model('comre',compreSchema)
module.exports = compreModel