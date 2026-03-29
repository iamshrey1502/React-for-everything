import React from 'react'
import { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import { useParams } from 'react-router-dom';

const ProductsDetails = () => {
  const products=useContext(ProductDataContext);
  const {id}=useParams();
//   console.log(typeof(id));
  let selectedProduct="";
  if(products.length>0){
    selectedProduct=products.find((val)=>{
        return Number(id)===val.id;
    })

  }

  console.log(selectedProduct);
  return (
    <div>
        {/* <h1>Product Details</h1> */}
        <div>
             <h2>{selectedProduct.title}</h2>
             <img src={selectedProduct.image} alt="" />
        </div>
    </div>
  )
}

export default ProductsDetails