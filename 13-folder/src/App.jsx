import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>

      </Routes>
    </div>
  )
}

export default App

//React makes SPA(Single Page Application) - that means it renders only one single HTML page(URL change hone pr kuch nhi hota)

//React Route - Logic for rendering different components based on the URL path
//React Router DOM - use browser's history API to keep UI in sync with the URL

//Types of Router
//1. Browser Router - uses HTML5 history API to keep UI in sync with the URL(99% we will be using this), good SEO.
//2. Hash Router - uses the hash portion of the URL to keep UI in sync with the URL (used for older verions of browsers), Poor SEO.
//3. Memory Router - used mostly for React Native
//4. Static Router - used for server-side rendering, does not manipulate the browser's history(Next JS)


// Always make / route
 