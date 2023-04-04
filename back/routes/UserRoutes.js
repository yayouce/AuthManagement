const {SignupController, SigninController, LogoutController } = require('../controllers/UserController')
const {authenticateToken,authenticateTokenAndAdmin}= require('../middleware/AuthorizeToken');



const router = require('express').Router()
router.get('/get',(req,res)=>{
    const user={
name:"test get",
JWTSECRET:process.env.JWTSECRET
    }
    
    res.status(200).json(user)
})

router.get("/",authenticateToken,(req,res)=>res.json(req.user))
router.post('/signup',SignupController)
router.post('/login',SigninController)
router.get('/logout',LogoutController)



module.exports = router;