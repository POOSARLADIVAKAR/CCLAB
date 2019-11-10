const mongoose = require('mongoose')
const Schema = mongoose.Schema

const workshopSchema = new Schema({
    User_email : String,
    User_Name : String,
    Name_of_Workshop : String,
    Name_of_Club : String,
    Class_Rooms : Array,
    Date : Date,
    Time_Start : String,
    Time_end : String,
    Granted : Boolean,
    Belongs_to : String
})

const workshopModel = mongoose.model('workshop',workshopSchema)
module.exports = workshopModel