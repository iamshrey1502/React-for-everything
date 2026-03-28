import React from 'react'
import {useState} from "react";

const Navbar = (props) => {
 const [newtheme, setnewtheme] = useState("");
  return (
    <div>
        <h1>
            Theme is {props.theme};
        </h1>
        <button onClick={()=>{
            props.theme=="light"?props.settheme("dark"):props.settheme("light"); // state management in children
        }}>
        Change theme 
        </button>

        <form onSubmit={(e)=>{
        e.preventDefault(); 
        // console.log(newtheme);
        setnewtheme("");
        props.changeTheme(newtheme);  

        }} >
        <input onChange={(e)=>{
          setnewtheme(e.target.value);
        }}
        type="text" placeholder='Enter theme' value={newtheme}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Navbar