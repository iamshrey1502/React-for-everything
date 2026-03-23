import React,{useState} from 'react'
import axios from "axios";

const App = () => {

  const [alldata, setAlldata] = useState([]);

  const getData=async ()=>{
    const response= await axios.get("https://picsum.photos/v2/list");// always return a promise
    
    let newdata=[...alldata,...response.data];
    setAlldata(newdata);
    console.log(response.data);
    // console.log("Data Fetched");
  }
  return (
    <div>
      <button onClick={()=>{
        getData();
      }}>Get Data</button>

      {alldata.map(function(val,idx){
        return <h1 key={idx}>{val.author} {idx+1}</h1>
      })}
    </div>
  )
}

export default App

//CSR(Client Side Rendering) -> React, Angular, Vue
//data comes in JSON format
//slow 
// Imporoves SEO(Search Engine Optimization)

 



//SSR(Server Side Rendering)-> Next.js, Nuxt.js, EJS pages
//data comes in HTML format
//fast
//low SEO
