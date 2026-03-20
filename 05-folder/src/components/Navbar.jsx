import React from 'react'

const Navbar = (props) => {
    console.log(props.color)
  return (
    <div style={{backgroundColor:props.color}} className='w-screen bg-red-300 flex items-center justify-between p-5 border-4 my-3'>
        <h2>{props.title}</h2>
        <div className='flex gap-20'>
            {props.links.map(function(val,idx){
                return <h4 key={idx}>{val}</h4>
            })}
        </div>
    </div>
  )
}

export default Navbar