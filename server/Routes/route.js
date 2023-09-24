const express = require('express')
const {addUser,getUser} = require('../Controller/user')
const {addConversation} = require('../Controller/conversation')

const route = express.Router();

route.post('/login',addUser);

route.get('/getuser',getUser);


route.post('/conversation/add',addConversation);


module.exports = route