import { io } from 'socket.io-client';
import {useState,useEffect,useRef, createContext} from 'react'


const AuthenticationContext = createContext(null);



const AuthenticationComponent = ({children}) => {
  
  const [activeUsers, setActiveUsers] = useState([]);
      
  const [newMessageFlag, setNewMessageFlag] = useState(false);
  const socket = useRef();
  
  useEffect(() => {
      socket.current = io('ws://localhost:9000');
  }, [])
  const [account, setAccount] = useState(null)
  const [person, setPerson] = useState({})
 

  return (
    <AuthenticationContext.Provider  value={
        {account,
        setAccount,
        setPerson,
        person,
        activeUsers,
        setActiveUsers,
        socket,
        newMessageFlag,
        setNewMessageFlag
        }
    }>
    {children}
    
    </AuthenticationContext.Provider>
  )
}

export {AuthenticationContext ,AuthenticationComponent}
