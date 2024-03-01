import React from 'react'
import { Link } from 'react-router-dom';

function TopSection() {
  return (
    <>
      <div className=" flex-col w-full bg-about-us-topsection-bg-img text-center font-Rubik font-medium justify-center flex items-center gap-5 py-28 bg-cover">
        <h1 className='text-5xl text-white  first-letter:text-6xl'>
          Want Our Natural Organic <br /> Food Visit Our Organic Store.
        </h1>
        <button className="bg-orange-600 text-white rounded-3xl pl-6 pr-6 p-2 text-sm w-fit h-fit  justify-center flex items-center  hover:text-orange-600 hover:border-2 hover:border-orange-600 hover:bg-white box-border border-2 border-transparent"><Link to={'/contact-us'}>CONTACT US</Link></button>
      </div>
    </>
  )
}

export default TopSection;