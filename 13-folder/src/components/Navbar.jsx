import React from 'react'
import {Link,NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
        <NavLink
        to="/"
        style={({isActive})=>({
            color:isActive?"red":"white"
        })}
        >
            Home
        </NavLink>

        <NavLink
        to="/about"
        style={({isActive})=>({
            color:isActive?"red":"white"
        })}
        >
            About
        </NavLink>

        <NavLink
        to="/courses"
        style={({isActive})=>({
            color:isActive?"red":"white"
        })}
        >
            Courses
        </NavLink>

    </div>
  )
}

export default Navbar


// in place of <Link> we can also use <NavLink> - it is an upgraded version of <Link> - used to add custom styles to the element.