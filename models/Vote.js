const mongoose = require('mongoose');
const saltRounds = 10
const jwt = require('jsonwebtoken');
const { isError } = require('util');


const voteSchema = mongoose.Schema({
    VoteID : {
        type : String,
        maxlength : 10,
       // unique : true,
        //require : true
    },
    
    StartDay: {
        type : String
        //require : true
    },
    EndDay : {
        type : Date
       // require : true
    },
    VoteHead : {
        type : String,
        maxlength : 100,
        //require : true
    },
    VoteType : {
        type : Number
        //require : true
        // 0은 입주민대표회의 임원, 1은 입주민대상, 2는 선관위 내부
    },
    MultCho : {
        type: Boolean
        //require : true
        // True : 복수선택가능 False : 복수선택 불가능
    },
    Selc1 : {
        type : String,
        maxlength : 100
        //require : true
    },
    Selc2 : {
        type : String,
        maxlength : 100
        //require : true
    }
})

const Vote = mongoose.model('Vote', voteSchema)

module.exports = { Vote }