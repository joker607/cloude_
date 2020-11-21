const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10


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
    }
})

userSchema.pre('save', function(next) {
    var user = this;

    if(user.isModified('Password')){
    //비밀번호를 암호화 시킨다.
    bcrypt.genSalt(saltRounds, function(err, salt){
        if(err) return next(err)

        bcrypt.hash(user.Password,salt, function(err, hash){
        if(err) return next(err)
        user.Password = hash
        next()
             })

        })
    } else{
        next()
    }
})

const User = mongoose.model('User', userSchema)

module.exports = { User }