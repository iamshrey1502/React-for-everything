import React from 'react'
import Navbar from "./components/Navbar";
import {useState} from "react";

const App = () => {
  
  const [theme, settheme] = useState("dark"); 

  const changeTheme=(newTheme)=>{
    settheme(newTheme);
  }

  return (
    <div>
      <Navbar theme={theme} settheme={settheme} changeTheme={changeTheme}/>

    </div>
  )
}

export default App

//Context API-> inbuilt feature of React that comes into play when we have to send data from App.jsx to its grandchildrens, earlier we need to send data through its childrens and then grandchildren.
// It provides a centralized space to keep data coming from backend/server, and which component wants to access it can access it from that centralized space whenever they need.
// so they dont need a long chain of passing data to every component in between source and destination
// Context API-> Cnetralization of data(Acess and modification of Data).
// Context API -> replacemnt of props drilling 


// flow of data in React is unidirectional, data always flows from parent to its child
// we cant directly send data from child to parent 
// there is a trick to do that(via making a fnc in parent component and calling that fnc in children component with passing data as argument).
// This trick of passing data from child to parent is most asked in interviews!
