import React from 'react'
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import {Routes,Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import Men from "./pages/Men";
import Women from "./pages/Women"
import Courses from "./pages/Courses";
import Anycourse from "./pages/Anycourse";
import CourseDetail  from './pages/CourseDetail';
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/products" element={<Products/>}/>
        {/* Nested Routes */}
        <Route path="/products/men" element={<Men/>}/>
        <Route path="/products/women" element={<Women/>}/>
        {/* Dynamic Routes */}
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/courses/:id" element={<Anycourse/>}/>
        <Route path="/courses/:id/coursedetail" element={<CourseDetail/>}/>
        {/* Not Found page */}
        <Route path="/*" element={<NotFound/>}/>

      </Routes>
    
    </div>
  )
}

export default App

//React Router Dom - used to perform routing in react application(CSR routing).
//SPA - Single Page Application - only one html page is there and we are changing the content of that page based on the route. It is also called client side routing because all the routing is done in the client side.
//MPA - Multi Page Application - multiple html pages are there and we are navigating to different pages based on the route. It is also called server side routing because all the routing is done in the server side. 
// there are multiple routers in react router dom - BrowserRouter, HashRouter, MemoryRouter, etc. We will use BrowserRouter for now. It uses the HTML5 history API to keep the UI in sync with the URL. It is the most commonly used router in react applications.