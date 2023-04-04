
const jwt = require("jsonwebtoken")

const authenticateToken=(req,res,next)=>{
const authHearder= req.headers["authorization"]
const token=authHearder && authHearder.split(" ")[1]
if(token==null) return res.sendStatus(401)

jwt.verify(token,process.env.JWTSECRET,(err,user)=>{
    if(err) return res.sendStatus(403);
    req.user=user;
next();
})
}


// const authenticateTokenAndAdmin=(req,res,next)=>{

// authenticateToken(req,res,(err)=>{
// console.log(res)
// if(isAdmin===true){
//     return res.sendStatus(403)
// }

// next()

// })

// }



module.exports= {authenticateToken,authenticateTokenAndAdmin}