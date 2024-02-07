const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstname : {
        type : String,
        required : true
    },
    lastname : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    mobileno : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : false
    }
}, {timestamps : true})

module.exports = mongoose.model("users",userSchema);