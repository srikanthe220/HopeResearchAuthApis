var mongoose = require('mongoose')
const User=mongoose.model('User');

function createUser(req,response,next){
    var body=req.body;
    if(body.email == "" || body.email == null || body.name =="" || body.name==null || body.password==null||body.password=="") {
            response.send({message:"missing required fields to create user"});
    }
    else{
        var newUser={
            _id:body.email,
            name:body.name,
            password:body.password
        }
       
        new User(newUser).save().then((res)=>{
            console.log(res)
            response.send({status:"user added sucessfully"});
        }).catch(err=>{
           // console.log(err)
            if(err.code==11000){
                response.send({status:"failed to add user",
                        reason:"account already present "
                    })
            }
            else{
                console.log(res)
                response.send({status:"failed to add user"})
            }
           
        })
    }
    
    //res.send(userService.createUser(body));
}



function register(req,res,next){

    var body=req.body;
    console.log(body)
   if(body.email == "" || body.email == null || body.password==null||body.password=="") {
       response.send({message:"missing required fields to login "});
}else{
   User.findOne({_id:body.email,password:body.password},(err,result)=>{
       console.log(result);
       if(err){
           res.send({"message":"not logged in...!"})

       }
       if(result!=null){
           res.send({"message":"logged in successfully"})
       }
       else{
           res.send({"error_msg":"Incorrect email/Password"})
       }
})
}

}





function forgetResetPassword(req,response,next){
    var queryParam = req.query;
    console.log(queryParam.email)
    if(queryParam.email == "" || queryParam.email == null || queryParam.password==null||queryParam.password=="") {
        response.send({message:"missing required fields to reset password for a user"});
        }
        else{
            User.findOneAndUpdate({_id:queryParam.email},{password:queryParam.password},(err,res)=>{
                if(err){
                    console.log(err)
                }
                if(res==null){
                    response.send({"message":"User has not created the account"})
                }
               else{
                   response.send({"message":"updated ur password"})
               }
            })
        }
  
}

module.exports={
    createUser:createUser,
    forgetResetPassword:forgetResetPassword,
    register:register
}