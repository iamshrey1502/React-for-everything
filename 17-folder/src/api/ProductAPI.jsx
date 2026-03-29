import axios from "axios";

export const getData=async ()=>{
    const response =await axios.get("https://fakestoreapi.com/products");
    // console.log(response.data);
    return response.data;
    
}

export const getSelectedData=async (id)=>{
    const response =await axios.get(`https://fakestoreapi.com/products/${id}`);
    // console.log(response.data);
    return response.data;
}
