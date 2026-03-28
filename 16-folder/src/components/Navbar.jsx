import React from 'react'
import { ThemeDataContext } from '../context/ThemeContext'
import {useContext} from "react";

const Navbar = () => {
    const [theme,settheme] = useContext(ThemeDataContext);
  return (
    <div className='nav'>
        <h1>Navbar</h1>
        <h2>Theme:{theme}</h2>
        <button
        onClick={()=>{
            theme==="light"?settheme("dark"):settheme("light");
        }}
        >Change Theme</button>
    </div>
  )
}

export default Navbar