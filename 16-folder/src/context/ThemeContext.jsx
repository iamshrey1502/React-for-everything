import React from 'react'
import {createContext} from "react";
import {useState} from "react";

export const ThemeDataContext=createContext()

const ThemeContext = (props) => {
    const data = "Shrey";
    const [theme, settheme] = useState("light");
  return (
    <div>
        <ThemeDataContext.Provider value={[theme,settheme]}>
        {props.children}
        </ThemeDataContext.Provider>
    </div>
  )
}

export default ThemeContext