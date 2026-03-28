import React from 'react'
import { createContext } from 'react'

export const userDataContext=createContext();

const UserContext = (props) => {
  let user = "Shrey";
  return (
    
    <userDataContext.Provider value={user}>
        {props.children}
    </userDataContext.Provider>
  )
}

export default UserContext