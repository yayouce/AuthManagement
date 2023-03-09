const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,Unique:true},
    password:{type:String},
    isAdmin:{type:Boolean,default:false}
},{timestamp:true})




module.exports=mongoose.model('User',UserSchema);

