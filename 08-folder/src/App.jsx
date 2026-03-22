import React,{useState} from 'react'
import Card from './components/Card'

const App = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [url, setUrl] = useState("");

  const [users, setUsers] = useState([]);

  const submitHandler=(e)=>{
    e.preventDefault();
    let newusers=[...users,{name,email,role,url}];
    setUsers(newusers);
    setName("");
    setEmail("");
    setRole("");
    setUrl("");
    // console.log(newusers);
    // console.log("Form submitted");
    // console.log(name,email,role,url);
  }

  const deleteHandler=(idx)=>{
    let copyUsers=[...users];
    copyUsers.splice(idx,1);
    setUsers(copyUsers);
    // console.log("deleted");
  }

  return (
    <div id="main">
      <form onSubmit={(e)=>{
        submitHandler(e);
      }}>
        <input className="input" type="text" placeholder='Enter your name' required value={name} 
        onChange={(e)=>{
          // console.log("changing...");
          // console.log(e.target.value);
          setName(e.target.value);
        }}/>

        <input className="input" type="text" placeholder='Enter your email' required value={email} 
        onChange={(e)=>{
          // console.log("changing...");
          // console.log(e.target.value);
          setEmail(e.target.value);
        }}/>

        <input className="input" type="text" placeholder='Enter your role' required value={role} 
        onChange={(e)=>{
          // console.log("changing...");
          // console.log(e.target.value);
          setRole(e.target.value);
        }}/>

        <input className="input" type="text" placeholder='Enter your image url' required value={url} 
        onChange={(e)=>{
          // console.log("changing...");
          // console.log(e.target.value);
          setUrl(e.target.value);
        }}/>

        <button id="button">Create User</button>

      </form>
      <div className="content">
      {users.map(function(val,idx){
         
        return <Card key={idx} val={val} idx={idx} deleteHandler={deleteHandler}/>
      })}
      </div>
      
    </div>
  )
}

export default App

// default nature of form is to reload the page when we submit the form, to avoid this we can use preventDefault() method of event object.

// Tailwind CSS is mobile-first, everything that you made is for mobile devices.