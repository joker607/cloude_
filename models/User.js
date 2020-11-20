const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    UserID : {
        type : String,
        maxlength : 20,
       // unique : true,
        //require : true
    },
    
    Password: {
        type : String,
        minlength: 5,
        //require : true
    },
    Name : {
        type : String,
        maxlength : 50,
       // require : true
    },
    PhoneNum : {
        type : Number,
        maxlength : 11,
        //require : true
    },
    Address : {
        type : String,
        maxlength : 30,
        //require : true
    },
    Position : {
        type: String,
        default: "입주민",
        //require : true
    },
    State : {
        type : Number,
        default : 0,
        //require : true
    },
    Term : {
        type : Date
    },
    ReApp : {
        type : Number,
        default : 0
    },
    email:{
        type : String,
        trim : true,
        unique: 1
    }
})

const User = mongoose.model('User', userSchema)

module.exports = { User }