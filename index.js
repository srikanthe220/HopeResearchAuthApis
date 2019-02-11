var express=require('express')
var bodyParser=require('body-parser')
var constants=require('./utils')
var mongoose = require('mongoose')
require('./model/user')
var service=require("./userApiService")
var app=express();
mongoose.connect(constants.mongodb_uri,{useNewUrlParser:true}).then(()=>{
  console.log("mongo db connected")
}).catch(err=>{
    console.log("mongo db connection error")
})
mongoose.connection.on('connected',()=>{
    console.log('connected to mongodb: 27017')
})
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.get("/",(req,res)=>{
       console.log("get function ")
       res.send("created")
});
app.post("/user/createUser",service.createUser)
app.put("/user/forgetAndReset",service.forgetResetPassword)
app.post("/user/login",service.register)

// function createUser(req,response,next){
//     var body=req.body;
//     if(body.email == "" || body.email == null || body.name =="" || body.name==null || body.password==null||body.password=="") {
//             response.send({message:"missing required fields to create user"});
//     }
//     else{
//         var newUser={
//             _id:body.email,
//             name:body.name,
//             password:body.password
//         }
       
//         new User(newUser).save().then((res)=>{
//             console.log(res)
//             response.send({status:"user added sucessfully"});
//         }).catch(err=>{
//            // console.log(err)
//             if(err.code==11000){
//                 response.send({status:"failed to add user",
//                         reason:"account already present "
//                     })
//             }
//             else{
//                 response.send({status:"failed to add user"})
//             }
           
//         })
//     }
    
//     //res.send(userService.createUser(body));
// }



// function register(req,res,next){

//     var body=req.body;
//     console.log(body)
//    if(body.email == "" || body.email == null || body.password==null||body.password=="") {
//        response.send({message:"missing required fields to login "});
// }else{
//    User.findOne({_id:body.email,password:body.password},(err,result)=>{
//        console.log(result);
//        if(err){
//            res.send({"message":"not logged in...!"})

//        }
//        if(result!=null){
//            res.send({"message":"logged in successfully"})
//        }
//        else{
//            res.send({"error_msg":"Incorrect email/Password"})
//        }
// })
// }

// }





// function forgetResetPassword(req,response,next){
//     var queryParam = req.query;
//     console.log(queryParam.email)
//     if(queryParam.email == "" || queryParam.email == null || queryParam.password==null||queryParam.password=="") {
//         response.send({message:"missing required fields to reset password for a user"});
//         }
//         else{
//             User.findOneAndUpdate({_id:queryParam.email},{password:queryParam.password},(err,res)=>{
//                 if(err){
//                     console.log(err)
//                 }
//                else{
//                    response.send({"message":"updated ur password"})
//                }
//             })
//         }
  
// }


var server = app.listen(constants.port,()=>{
    let port = server.address().port;
    console.log("app listening at http://localhost:",port)
})