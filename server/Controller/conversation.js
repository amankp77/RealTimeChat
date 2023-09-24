
const {Conversations} = require('../Models/conversation')

const addConversation = async (req,res)=>{
    const sender = req.body.senderID;
    const reciever = req.body.recieverID;
    try{
     const exist = await Conversations.findOne({members : { $all : [sender,reciever]}});

     if(exist){
        return res.status(200).json(exist);
     }
     
     const created = await Conversations.create({
        members: [sender , reciever]
     });
     res.json(created);
    
    }
    catch(err){
        console.log(err);
    }


}




module.exports = {addConversation}