// import express from 'express';
const express = require('express')
// import bodyParser from 'body-parser';
const bodyParser = require('body-parser');
// import cors from 'cors';
const cors = require('cors');
// import dotenv from 'dotenv';
const dotenv = require('dotenv');


const route = require('./Routes/route.js')
const {startDB} = require('./database/db.js')


dotenv.config();
const app = express();

const PORT = 6969;



startDB();

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', route);