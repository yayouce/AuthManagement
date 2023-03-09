const express = require('express')
const User = require('./models/User')
const UserRoutes=require("./routes/UserRoutes")
const env= require('dotenv')
const cookieParser = require('cookie-parser')
const app = express()

env.config();
app.use(express.json())
app.use(cookieParser(process.env.COOKIESECRETKEY));


app.use("/api/users",UserRoutes)




module.exports= app;