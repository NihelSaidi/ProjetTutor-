//import mongoose
const mongoose = require('mongoose');
//generate schema
const userSchema = mongoose.Schema({
   name: String,
    email : String,
    password : String,
    tel :String,
});

//generate model
const user = mongoose.model('user', userSchema);

//Export model
module.exports = user ;