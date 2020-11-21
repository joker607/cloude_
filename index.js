const express = require('express')
const app = express()
const port = 5000

const bodyParser = require('body-parser')
const config = require('./config/key')
//application/x-www-from-urlencoded


const { User } = require("./models/User")

app.use(bodyParser.urlencoded({extended:true}));

//application/json
app.use(bodyParser.json());

const mongoose = require('mongoose')
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

app.get("/", (req, res) => {

  res.send("Hello World!, 이김팀 테스트2");

});

app.listen(port, () => {

  console.log(`Example app listening at http://localhost:${port}`);
  
});