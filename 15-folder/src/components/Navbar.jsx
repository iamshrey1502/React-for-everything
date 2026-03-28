import React from 'react'

const Navbar = (props) => {
    console.log(props.children);
  return (
    <div className='w-full h-25 bg-emerald-500 p-2'>
        Navbar {props.children[0]} {props.children[1]}
    </div>
  )
}

export default Navbar