const http = require('http')
const app = require('./App')

require("./db")


const server = http.createServer(app);









server.listen(process.env.PORT,()=>{
console.log(`server is running on port ${process.env.PORT}`);
})