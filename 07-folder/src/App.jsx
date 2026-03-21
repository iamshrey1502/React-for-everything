import React from 'react'

const App = () => {

  const submitHandler=(e)=>{
    e.preventDefault();
    console.log("submitted");
  }
  return (
    <div className='bg-black h-screen text-white p-10'>
      {/* <h1 className='text-9xl text-bold text-emerald-600'>App</h1> */}
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='h-[50%] w-[50%] bg-[#333] p-5'>
        <input className='border-2 p-3 m-2' type="text" placeholder="Enter your name"/>
        <button className='p-3 border-2'>Submit</button>
      </form>
    </div>
  )
}

export default App

//acion attribute inside form will come to our use in backend