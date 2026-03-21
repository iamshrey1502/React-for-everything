import React,{useState} from 'react'

const App = () => {
  const [username, setUsername] = useState("");
  const [allusers, setAllusers] = useState([]);

  const submitHandler=(e)=>{
    e.preventDefault();
    // console.log("submitted");
    // console.log(username);
    let newArray=[...allusers];
    newArray.push(username);
    console.log(newArray);
    setAllusers(newArray);
    setUsername("");
  }


  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e);
      }}>
        <input type="text" placeholder='Enter your name' value={username} required
        onChange={(e)=>{
           setUsername(e.target.value);// In this case you are not directly interacting with DOM
           //console.log(e.target.value);// you are aksing react to change the input for you

        }}/>
        <button>Submit</button>
      </form>
      {allusers.map(function(val,idx){
        return <h1 key={idx}>{val}</h1>
      })}
    </div>
  )
}

export default App

//Twoway binding -> this whole thing of not directly interacting with DOM, but through React is known as Two-way binding