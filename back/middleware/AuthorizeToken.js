
const jwt = require("jsonwebtoken")

const authenticateToken=(req,res,next)=>{
const authHearder= req.headers["authorization"]
if(authHearder){
    const token=authHearder.split(" ")[1]

if(!token){
res.status(401).json('token non existent')
}
jwt.verify(token,process.env.JWTSECRET,(err,user)=>{
    if(err) throw err;

req.user= user;

next();

   
})
}
}