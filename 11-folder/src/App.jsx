import React from 'react'
import axios from "axios";
import {useEffect} from "react";
import {useState} from "react";

const App = () => {

  const [alldata, setalldata] = useState([]);
  const [num, setnum] = useState(0);

  const getData=async ()=>{
    const response= await axios.get("https://randomuser.me/api/");
    // console.log(response.data.results[0].name.first);
    setalldata(response.data.results[0].name.first);
  }
  useEffect(()=>{
    getData();
  },[num]);
  return (
    <div>
      {alldata}
      <h1>{num}</h1>
      <button onClick={()=>{
        setnum(num+1);
      }}>
      Click here to get random person
      </button>
    </div>
  )
}

export default App