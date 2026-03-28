import React from 'react'
import { useContext } from 'react'
import { userDataContext } from '../context/UserContext';

const Navbar = (props) => {
    const data=useContext(userDataContext);// another hook
    // console.log(data);
    
  return (
    <div className='w-full h-25 bg-emerald-500 p-2'>
        Navbar {data}
    </div>
  )
}

export default Navbar