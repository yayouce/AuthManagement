const http = require('http')
const app = require('./App')

const env= require('dotenv')
require("./db")


env.config();

const server = http.createServer(app);









server.listen(process.env.PORT,()=>{
console.log(`server is running on port ${process.env.PORT}`);
})