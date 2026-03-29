import React from 'react'
import axios from "axios";
import {useEffect} from "react";
import {useState} from "react";
import { Routes,Route } from 'react-router-dom';
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductsDetails from "./pages/ProductsDetails";

const App = () => {
 

  return (
    // <div>
    //   {/* <button onClick={()=>{
    //     getData();
    //   }}>Get All Data </button>
    //   <button onClick={()=>{
    //     getOneData(3);
    //   }}>Get One Data </button> */} 
    // </div>
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<ProductsDetails/>}/>
      </Routes>
    </div>

  )
}

export default App