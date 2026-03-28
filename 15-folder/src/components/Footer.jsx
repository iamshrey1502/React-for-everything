import React from 'react'
import { useContext } from 'react'
import { userDataContext } from '../context/UserContext'



const Footer = () => {
  const data  =  useContext(userDataContext);
  return (
    <div className='w-full h-15 absolute bottom-0 bg-red-500'>
        <h1>Footer {data}</h1>
    </div>
  )
}

export default Footer