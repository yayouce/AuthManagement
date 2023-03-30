const {SignupController, SigninController, LogoutController } = require('../controllers/UserController')

const router = require('express').Router()
router.get('/get',(req,res)=>{
    const user={
name:"test get",
JWTSECRET:process.env.JWTSECRET
    }
    
    res.status(200).json(user)
})

router.get("/",(req,res)=>res.send('<h1>HOME PAGE</h1>'))
router.post('/signup',SignupController)
router.post('/login',SigninController)
router.get('/logout',LogoutController)



module.exports = router;