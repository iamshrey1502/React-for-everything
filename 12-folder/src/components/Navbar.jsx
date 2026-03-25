import React from 'react'
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className='flex bg-red-500 text-white justify-between p-5'>
        <h2>Navbar</h2>
        <div className='flex gap-5 '>
            <Link to="/" >Home</Link>
            <Link to="/about">About</Link>
            <Link to="/products">Products</Link>
        </div>
    </div>
  )
}

export default Navbar

//Link -> given by react-router-dom used to navigate different routes without reloading the page. It is used to create links in our application. It takes a prop called "to" which is used to specify the path to navigate to. It is similar to anchor tag in HTML but it does not reload the page. 