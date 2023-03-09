const mongoose = require('mongoose')
 const db= mongoose.connect(`mongodb+srv://diarra:abdel22112002@cluster0.0br4cwh.mongodb.net/?retryWrites=true&w=majority`)
.then(()=>{
    console.log("connection at database!!!")
})
.catch(err=>console.log(err,"errreur de bd"))


module.exports=db