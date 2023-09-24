import { useContext} from 'react';

import { Box } from '@mui/material';

// import { UserContext } from '../../../context/UserProvider';
// import { AuthenticationContext } from '../../../context/AuthenticationContext';
// import { getConversation } from '../../../service/api';

//components
import ChatHeader from './ChatHeader';
import Messages from './Messages';
import Footer from './Footer';

const ChatBox = () => {
    
    // const { account } = useContext(AccountContext);

    // const [conversation, setConversation] = useState({});
    
    // useEffect(() => {
    //     const getConversationDetails = async () => {
    //         let data = await getConversation({ senderId: account.sub, receiverId: person.sub });
    //         setConversation(data);
    //     }
    //     getConversationDetails();
    // }, [person.sub]);

    return (
        <Box style={{height: '75%'}}>
            <ChatHeader />
            <Messages />
            <Footer/>
        </Box>
    )
}

export default ChatBox;