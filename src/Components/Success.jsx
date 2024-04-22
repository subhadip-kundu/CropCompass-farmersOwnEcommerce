import React from 'react';
import submit from "../assets/Submitted.png"

function Success() {
  return (
    <div className='w-full flex items-center justify-center'>
      <img className='max-w-screen-md' src={submit} alt="Submit image" />
    </div>
  )
}

export default Success;