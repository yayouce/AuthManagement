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
.catch(err=>res.sendStatus(500))

}


const SigninController=async(req,res,next)=> {
User.findOne({email:req.body.email}).then(user=>{
    if(!user || !user.password){
        res.status(401).json("utilisateur non trouvé!!!!")
        next()
    }

    bcrypt.compare(req.body.password,user.password)
    .then(valid=>{
        if(!valid){
            res.status(406).json('mot de pass incorrect!!')
            next()
        }

      const tokenUser = jwt.sign(
        {id:user._id,
        isAdmin:user.isAdmin
        },
       process.env.JWTSECRET,{expiresIn:"2d"}
      )
      //set le cookie at http only  je passe le token générer
      
      res.cookie('token',tokenUser,{httpOnly:true,maxAge:86400000,signed:true})//2 jours
      
      res.status(202).json(tokenUser)
      next()

    })
        .catch(err=>console.log(err))


})


}

const LogoutController = (req,res,next)=>{

if(cookie){
res.cookie('token', '', { expires: new Date(0) }).json('cookie mit à jour');

}
else{
    res.status(404).json("cookie non trouvé!!!")
}


 
   
  }
  






module.exports = {SignupController,SigninController,LogoutController}