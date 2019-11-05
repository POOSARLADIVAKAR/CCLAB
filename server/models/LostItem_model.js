const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LostItemSchema = new Schema({
    Room_no : String,
    Date : String,
    Item : String,
    Collected : Boolean
})

const lostItemModel = mongoose.model('lostItems',LostItemSchema) //coolaction name in your database

module.exports = lostItemModel