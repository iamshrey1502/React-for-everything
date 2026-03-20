import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'
import Men from './components/Men'
import Women from './components/Women'


const App = () => {

  let btnClicked=()=>{
    console.log("Clicked");
  }
  
  
  return (
    <div>
      <button 
      onClick={btnClicked}
      className='active:scale-90 bg-blue-400 text-bold text-black rounded-lg border-4 m-20 p-3'>Click me</button>
    </div>
  )
}

export default App
