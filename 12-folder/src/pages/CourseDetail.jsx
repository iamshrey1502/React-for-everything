import React from 'react'
import { useParams } from 'react-router-dom'


const CourseDetail = () => {
    const{id}=useParams();
  return (
    <div>
        <h1 className='text-9xl underline text-emerald-500 font-bold absolute top-1/2 left-1/2 -translate-1/2'>{id} Course Details page </h1>
    </div>
  )
}

export default CourseDetail