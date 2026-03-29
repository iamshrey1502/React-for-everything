import React from 'react'
import {useState, useEffect} from "react";
import axios from "axios"; 
import { createContext } from 'react';
import { getData } from '../api/ProductAPI';
import {getSelectedData} from "../api/ProductAPI";  

export const ProductDataContext=createContext();

const ProductContext = (props) => {
  const [product, setproduct] = useState([]);

  const setData=async ()=>{
    const data=await getData();
    setproduct(data);
  }

  useEffect(()=>{
    setData();
  },[])

  return (
    <div>
       <ProductDataContext.Provider value={product}>
        {props.children}
       </ProductDataContext.Provider>
    </div>
  )
}

export default ProductContext