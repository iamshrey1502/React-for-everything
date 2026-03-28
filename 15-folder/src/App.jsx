import React from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sections from './components/Sections';

const App = () => {
  return (
    <div className='text-5xl font-bold h-screen bg-black text-white'>
      <Navbar>
        <h2 className='text-red-500 text-sm'>You can recieve this in children propety of props in Navbar component</h2>
        <h2 className='text-red-500 text-sm'>if there are multiple elements you will recieve an array in children property</h2>
      </Navbar>
      <Sections/>
      <Footer/>
      </div>
  )
}

export default App