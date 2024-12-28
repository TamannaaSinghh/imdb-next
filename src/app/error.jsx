"use client"
import React from 'react'
import { useEffect } from 'react'
const error = ({error, reset}) => {
    useEffect(() => {
        console.log(error);
    }, [error])
  return (
    <div className='text-center mt-10'>
<h1>Something went wrong! Please try again later.</h1>
<button className='hover:text-amber-600 text-gray-800 p-2 bg-gray-200 rounded-lg mt-10' onClick={() => reset()}>Try Again!</button>
    </div>
  )
}

export default error