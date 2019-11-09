const mongoose = require('mongoose')
const Schema = mongoose.Schema

const workshopSchema = new Schema({
    User_email : String,
    User_Name : String,
    Course_No : String,
    Course_Title : String,
    Class_Rooms : Array,
    Date : Date,
    Time_Start : String,
    Time_end : String
})

const workshopModel = mongoose.model('workshop',workshopSchema)
module.exports = workshopModel