const mongoose = require('mongoose')
require('dotenv').config();


const startDB = async ()=>{
try{
   await mongoose.connect(process.env.MONGO_URI)
   console.log("Connect to Database")
}
catch(err){
    console.log("ERROR",err)
}
}

module.exports = {startDB}