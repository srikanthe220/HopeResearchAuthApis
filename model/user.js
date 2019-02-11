const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    _id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
    
});
// UserSchema.methods.setPassword = (password)=>{
//    this.salt=crypto.randomBytes(16).toString('hex');
//    this.hash=crypto.pbkdf2Sync(password,this.salt,1000,64,'sha512').toString('hex');
// };

 module.exports=mongoose.model('User',UserSchema);