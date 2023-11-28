const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE).then(()=>{
    console.log("connection success");
}).catch((error) =>{
    console.log(error);
});