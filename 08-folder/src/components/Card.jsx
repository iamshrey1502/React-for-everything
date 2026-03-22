import React from 'react'

const Card = (props) => {
return (
<div key={props.idx} className='Card'>
        <h1>{props.val.name}</h1>
        <h2>{props.val.role}</h2>
        <h2>{props.val.email}</h2>
        <img src={props.val.url} alt="" />
        <button onClick={()=>{
          props.deleteHandler (props.idx);
        }}>Remove</button>
</div>
  )
}

export default Card