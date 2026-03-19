import React from 'react'
import Card from './components/Card'
import Button from "./components/Button"

const App = () => {
  const users=['Trav','Tony','Robin','Cathy'];
  
  return (
    <div className='p-10 h-screen'>
      {users.map(function(val){
        return <Card user={val}/>
      })}

 
      
    </div>
  )
}

export default App




      // {arr.map(function(val){
      //   return <h1>{val}</h1>; 
      // })}