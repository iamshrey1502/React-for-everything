import React from 'react'

const Card = (props) => {
    console.log(props)
  return (
    <div className='bg-black px-5 py-3 m-5 rounded-md w-fit'>
        <h1 className='text-white text-4xl'>{props.user}</h1>

    </div>
  )
}

export default Card

//props is a object used during props drilling-> passing data to components