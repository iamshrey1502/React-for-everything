import React from 'react'
import { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import {Link} from "react-router-dom";

const Products = () => {
  const products=useContext(ProductDataContext);

  return (
    <div className='all-products'>
   {products.length>0?products.map(function(val,idx){
        return <Link className='product' key={idx} to={`/products/${val.id}`}>
          <div>
             <h2>{val.title}</h2>
             <img src={val.image} alt="" />
          </div>

        </Link>
    }):<h1>Loading...</h1>}
    </div>
  )
}

export default Products