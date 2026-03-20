import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'
import Men from './components/Men'
import Women from './components/Women'


const App = () => {
  let gender="Male";
  return (
    <div>
      {(gender==="Male")?<Men/>:<Women/>};
      
    </div>
  )
}

export default App
//Conditional rendering