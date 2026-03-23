import React from 'react'

const Card = (props) => {
  return (
    <div>
        <div className='bg-white h-[300px] w-[200px] flex flex-col items-center gap-2 p-4 text-black rounded-lg text-center'>
            <img className='h-[100px] w-[100px] rounded-full object-cover object-center' src={props.image} alt="" />
            <h1 className='font-bold'>{props.name}</h1>
            <h2 className='text-blue-500'>{props.role}</h2>
            <h2>{props.email}</h2>
            <button onClick={()=>{
                props.delete(props.index);
            }} 
            className='bg-red-600 text-sm rounded-md p-2 font-semibold active:scale-90'>Delete User</button>
        </div>
    </div>
  )
}

export default Card