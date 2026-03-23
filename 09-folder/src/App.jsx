import React,{useState} from 'react'
import Card from './components/Card';

const App = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");

  const localData=JSON.parse(localStorage.getItem("allUsers"))||[];// Default fallback value pattern // it is used to provide default value

  const [users, setUsers] = useState(localData);



  const submitHandler=(e)=>{
    e.preventDefault();

    let newusers=[...users,{name,email,role,image}];
    // console.log(newusers);
    setUsers(newusers);
    localStorage.setItem("allUsers",JSON.stringify(newusers));

    setName("");
    setEmail("");
    setRole("");
    setImage("");

    console.log("Form submitted");
  }

  const deleteHandler=(idx)=>{
    let copyusers=[...users];
    copyusers.splice(idx,1);
    setUsers(copyusers);
    // console.log("Delete user");
  }
  
  return (
    <div className='bg-black h-screen w-screen text-white p-10'>
      <form onSubmit={(e)=>{
        submitHandler(e);
      }}
      className='h-[350px] w-[350px] border-4 p-5 flex flex-col items-center gap-5 mb-4'>
        <input onChange={(e)=>{
          setName(e.target.value);
          // console.log(e.target.value);
          // console.log("Changing");
        }}
        type="text" placeholder="Enter your name here" className='border-2 p-2 rounded-md' value={name}/>

        <input onChange={(e)=>{
          setEmail(e.target.value);
          // console.log(e.target.value);
          // console.log("Changing");
        }}
        type="text" placeholder="Enter your email here" className='border-2 p-2 rounded-md' value={email}/>

        <input onChange={(e)=>{
          setRole(e.target.value);
          // console.log(e.target.value);
          // console.log("Changing");
        }}
        type="text" placeholder="Enter your role here" className='border-2 p-2 rounded-md' value={role}/>

        <input onChange={(e)=>{
          setImage(e.target.value);
          // console.log(e.target.value);
          // console.log("Changing");
        }}
        type="text" placeholder="Enter your image url here" className='border-2 p-2 rounded-md' value={image}/>

        <button className='bg-blue-500 p-2 rounded-lg font-bold active:scale-90 m-4'>Create User</button>
      </form>
      <div className='h-auto bg-[#333] p-4 flex gap-4'>
        {users.map(function(val,idx){
          return <Card key={idx} index={idx} name={val.name} email={val.email} role={val.role} image={val.image} delete={deleteHandler}/>
        })}
        
      </div>
    </div>
  )
}

export default App