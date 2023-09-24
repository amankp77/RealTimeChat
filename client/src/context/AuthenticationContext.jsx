import {useState, createContext} from 'react'


const AuthenticationContext = createContext(null);


const AuthenticationComponent = ({children}) => {
  const [account, setAccount] = useState(null)
  const [person, setPerson] = useState({})

  return (
    <AuthenticationContext.Provider  value={
        {account,
        setAccount,
        setPerson,
        person
        }
    }>
    {children}
    
    </AuthenticationContext.Provider>
  )
}

export {AuthenticationContext ,AuthenticationComponent}
