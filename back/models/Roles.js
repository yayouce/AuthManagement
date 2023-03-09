const mongoose = require('mongoose')

const RolesSchema = mongoose.Schema({
   Admin:{type:Boolean,default:false},
   user:{type:Boolean,default:false},
   visiteur:{type:Boolean,default:false},
    superAdmin:{type:Boolean,default:false},
},{timestamp:true})




module.exports=mongoose.model('Roles',RolesSchema);
