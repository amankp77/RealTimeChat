const express = require('express');
const {startDB} = require('./database/db')
const bodyParser = require('body-parser')
const  cors = require('cors');



const route = require('./Routes/route');
const app = express();

//Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',route);



app.listen(6969,async ()=>{
    console.log("Server is running on 6969");
    await startDB()
})

