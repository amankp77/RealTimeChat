import axios from 'axios'
const URL = "http://localhost:6969"


const addUser = async (user)=>{
       await axios.post(`${URL}/login`,user);

}

const getUsers = async ()=>{
    const user = await axios.get(`${URL}/getuser`);
    return user.data;
}

const setConversation = async (convo)=>{  
       const response = await axios.post(`${URL}/conversation/add`, convo);
       return response.data;
}

export {addUser,getUsers,setConversation}