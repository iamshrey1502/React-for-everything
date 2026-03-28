import React from 'react'
import { ThemeDataContext } from '../context/ThemeContext'
import {useContext} from "react";

const Section2 = () => {
const themeData=useContext(ThemeDataContext);
  return (
    <div>{themeData}</div>
  )
}

export default Section2