import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export let UserContext = createContext();

export default function UserContextProvider({ children }) {

  const [userData, setUserData] = useState(null);


  useEffect (() => {

    if (localStorage.getItem('usertoken')) {
      setUserData(localStorage.getItem('usertoken'))
  } 
  

  }, []) 
  
  
   






 
  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}
