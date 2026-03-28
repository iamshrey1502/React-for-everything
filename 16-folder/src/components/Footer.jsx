import React from 'react'
import { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Footer = () => {
const [theme,settheme] =useContext(ThemeDataContext)
  return (
    <div className='footer'>
        <h1>Footer</h1>
        <h2>Theme:{theme}</h2>
        <button
        onClick={()=>{
            theme==="light"?settheme("dark"):settheme("light");
        }}
        >Change Theme</button>
    </div>
  )
}

export default Footer