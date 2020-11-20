const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    UserID : {
        type : String,
        maxlength : 20,
        unique : true,
        require : true
    },
    name : {
        type : String,
        maxlength : 50,
        require : true
    },
    password: {
        type : String,
        minlength: 5,
        require : true
    },
    PhoneNum : {
        type : Number,
        maxlength : 11,
        require : true
    },
    Address : {
        type : String,
        maxlength : 30,
        require : true
    },
    position : {
        type: String,
        default: "입주민",
        require : true
    },
    state : {
        type : Number,
        default : 0,
        require : true
    },
    Term : {
        type : Date
    },
    ReApp : {
        type : Number,
        default : 0
    }
})

const User = mongoose.model('User', userSchema)

module.exports = { User }