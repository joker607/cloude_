const express = require('express')
const app = express()
const port = 5000

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const config = require('./config/key')
//application/x-www-from-urlencoded


const { User } = require("./models/User")

app.use(bodyParser.urlencoded({extended:true}));

//application/json
app.use(bodyParser.json());
app.use(cookieParser())

const mongoose = require('mongoose')
const { userInfo } = require('os')
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false
}).then(()=>console.log('MongoDB Connected...'))
.catch(err=> console.log(err))


app.post('/register',(req,res)=>{
  //회원 가입 할때 필요한 정보들을 client에서 가저오면 그것들을 DB에 저장한다.
  const user = new User(req.body)
  
  user.save((err, userInfo) => {
    if(err) return res.json({success : false, err})
    return res.status(200).json({
      success: true
    })
  })
})


app.post('/api/users/login', (req, res) => {
  
  //요청된 아이디를 DB에서 찾기.
  
  

  User.findOne({ UserID : req.body.UserID}, (err, user) => {
    if(!user){
      return res.json({
        loginSuccess : false,
        message : "아이디를 다시 확인해주세요."
      })
    }
    //요청된 아이디가 DB에 있다면 비밀번호가 맞는지 확인
    user.comparePassword(req.body.Password , (err, isMatch) => {
      if(!isMatch)
      return res.json({loginSuccess : false, message : "비밀번호를 다시 확인해주세요."})



    //비밀번호가 맞다면 토큰을 생성하기
      user.generateToken((err, user) => {
        if(err) return res.status(400).send(err);

        //토큰을 저장한다. 어디에? 쿠키.
        res.cookie("x_auth",user.token)
        .status(200)
        .json({loginSuccess: true, UserID : user._id})
      
      })
    
    })

  })


})

app.get("/", (req, res) => {

  res.send("Hello World!, 이김팀 테스트2");

});




app.listen(port, () => {

  console.log(`Example app listening at http://localhost:${port}`);
  
});