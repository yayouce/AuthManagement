const {SignupController, SigninController } = require('../controllers/UserController')

const router = require('express').Router()
router.get('/get',(req,res)=>{
    const user={
name:"test get",
JWTSECRET:process.env.JWTSECRET

    }
    res.status(200).json(user)
})
router.post('/signup',SignupController)
router.post('/login',SigninController)




module.exports = router;