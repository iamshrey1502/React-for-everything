import React from 'react'
import { useParams } from 'react-router-dom'

const Anycourse = () => {
 const params=useParams();// it is a hook provided by react-router-dom which is used to get the parameters from the url. It returns an object which contains the parameters. We can use this object to get the value of the parameters.
 console.log(params.id);

  return (
    <div>
        <h1 className='text-9xl underline text-emerald-500 font-bold absolute top-1/2 left-1/2 -translate-1/2'>Anycourse page {params.id}</h1>
    </div>
  )
}

export default Anycourse