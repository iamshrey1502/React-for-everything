import React from 'react'
import {useContext} from "react";
import {ThemeDataContext} from "../context/ThemeContext";

const Section1 = () => {
    const themeData=useContext(ThemeDataContext);
  return (
    <div>
        {themeData}
    </div>
  )
}

export default Section1