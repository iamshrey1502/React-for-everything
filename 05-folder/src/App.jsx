import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <div>
      <Navbar title="Shrey" color="yellow" links={["Home" , "About", "Men", "Women"]}/>
      <Navbar title="Shrey" color="lightblue" links={["Home" , "About", "Men", ]}/>
      <Navbar title="Shrey" color="red" links={["Home" , "About", "Men", "Women", "Others"]}/>
    </div>
  )
}

export default App