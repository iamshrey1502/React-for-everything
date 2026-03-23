import React from 'react'
import {useEffect} from "react";
import {useState} from "react";

const App = () => {

  const [num, setnum] = useState(0);
  const [title, settitle] = useState("");

  useEffect(()=>{ // another hook in react used to execute things in sidestack.
    console.log("running");
  },[num]);// dependency array   
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={()=>{
        setnum(num+1);
      }}
      >Increase</button>
      <input type="text" placeholder="Enter text" value={title} onChange={(e)=>{
        settitle(e.target.value)
      }} />

    </div>
  )
}

export default App