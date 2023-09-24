import { useContext } from 'react';

import { styled, Box, Typography } from "@mui/material";
import { AuthenticationContext } from "../../../context/AuthenticationContext";
import {setConversation} from "../../../services/api" 


const Component = styled(Box)`
    height: 45px;
    display: flex;
    padding: 13px 0;
    cursor: pointer;
`;
    
const Image = styled('img') ({
    width: 50,
    height: 50,
    objectFit: 'cover',
    borderRadius: '50%',
    padding: '0 14px'
});

const Container = styled(Box)`
    display: flex;
`;

const Timestamp = styled(Typography)`
    font-size: 12px;
    margin-left: auto;
    color: #00000099;
    margin-right: 20px;
`;

const Text = styled(Typography)`
    display: block;
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
`;

const Conversation = ({ user }) => {
    const {account,setPerson} = useContext(AuthenticationContext);

    const personHandler = async ()=>{
        setPerson(user);
        const data = await setConversation({senderID : account.sub , recieverID : user.sub});
        console.log(data);
    }
    return (
        <Component onClick={personHandler}>
            <Box>
                <Image src={user.picture} alt="display picture" />
            </Box>
            <Box style={{width: '100%'}}>
                <Container>
                    <Typography>{user.name}</Typography>
                </Container>
               
            </Box>
        </Component>
    )
}

export default Conversation;