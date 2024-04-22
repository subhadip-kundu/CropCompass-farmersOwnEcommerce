import React from 'react';
import submit from "../assets/Submitted.png"

function Success() {
  return (
    <div className='w-full flex items-center justify-center h-[85vh]'>
      <img className='max-w-screen-md' src={submit} alt="Submit image" />
    </div>
  )
}

export default Success;