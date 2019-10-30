const mongoose = require('mongoose')
const Schema = mongoose.Schema

const complaintSchema = new Schema({
    Logged_user : String,
    Room_no : String,
    Issue : String,
    Solved : Boolean
})

const complaintModel = mongoose.model('complaints',complaintSchema) //coolaction name in your database

module.exports = complaintModel