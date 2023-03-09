const User = require("../models/User");
const bcrypt=require('bcrypt')
const jwt = require("jsonwebtoken")
require('cookie-parser')

const bcryptSalt =bcrypt.genSaltSync(10)

const SignupController =async(req,res)=> {

const  {name,email,password,isAdmin}=req.body

const userDoc =await User.create( {
    name,
    email,
    password:bcrypt.hashSync(password,bcryptSalt),
    isAdmin
})
userDoc.save()
.then(user=>{res.status(201).json(user)})
.catch(err=>res.status(500).json("err"))

}
 

const SigninController=async(req,res,next)=> {
User.findOne({email:req.body.email}).then(user=>{
    if(!user){
        res.status(401).json("utilisateur non trouvé!!!!")
    }
    
    bcrypt.compare(req.body.password,user.password)
    .then(valid=>{
        if(!valid){
            res.status(500).json("mauvais mot de pass")
        }

      const tokenUser = jwt.sign(
        {id:user._id,
        isAdmin:user.isAdmin
        },
process.env.JWTSECRET,{expiresIn:"2d"}
      )
      //set le cookie at http only  je passe le token générer
      
      res.cookie('token',tokenUser,{httpOnly:true,maxAge:86400000,signed:true})//2 jours
      res.status(201).json({...user._doc,tokenUser})

        })
        .catch(err=>console.log(err))


})


}






module.exports = {SignupController,SigninController}