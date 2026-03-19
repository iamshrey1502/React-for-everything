import React from 'react'
import Card from './components/Card'
import Button from "./components/Button"

const App = () => {

  
  return (
    <div className='p-10 h-screen'>
      <Card user='Shrey' />
      <Card user='Rahul' />
      <Card user='Pratyush' />
      <Button text='Visit'/>
      <Button text='Now'/>

 
      
    </div>
  )
}

export default App




      // {arr.map(function(val){
      //   return <h1>{val}</h1>; 
      // })}