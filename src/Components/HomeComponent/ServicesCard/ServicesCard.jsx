import React from 'react'
import Organic from '../../../assets/Organic.png'
import OrganicFartilizer from '../../../assets/OrganicFartilizer.png'
import OrganicFood from '../../../assets/OrganicFood.png'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ServicesCard() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <div className="w-full pt-14 pb-32 bg-my-image flex">
      <div className='w-3/4 m-auto'>
        <div className="mt-20 test ">
          <Slider {...settings}>
            {
              data.map((item) => (
                <div className='duration-300 bg-white h-[450px] text-green-950 rounded-2xl border-4 border-white  hover:border-4 hover:border-green-500 box-border outline-none font-Rubik text-center'>
                  <div className='h-32 rounded-t-xl bg-transparent flex justify-center items-center'>
                    <img src={item.img} alt="Organic farming" className='h-20 w-20' />
                  </div>
                  <div className='flex flex-col justify-center items-center gap-4 p-4'>
                    <p className='text-3xl font-semibold'>{item.heading}</p>
                    <p className='text-lg'>{item.description}</p>
                    <button className='bg-green-400 text-white text-lg px-6 py-1 rounded-xl hover:border-2 hover:bg-cyan-50 hover:text-black'>{item.button}</button>
                  </div>
                </div>
              ))
            }
          </Slider>
        </div>
      </div>
    </div>
  )
}


const data = [
  {
    img: `${Organic}`,
    heading: `Organic Farming`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis velit eaque aut accusamus libero porro eos sit minus.`,
    button: `READ MORE`
  },
  {
    img: `${OrganicFartilizer}`,
    heading: `Organic Fartilizer`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis velit eaque aut accusamus libero porro eos sit minus.`,
    button: `READ MORE`
  },
  {
    img: `${OrganicFood}`,
    heading: `Organic Food`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis velit eaque aut accusamus libero porro eos sit minus.`,
    button: `READ MORE`
  },
  {
    img: `${Organic}`,
    heading: `Eco Friendly`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis velit eaque aut accusamus libero porro eos sit minus.`,
    button: `READ MORE`
  },
  {
    img: `${OrganicFood}`,
    heading: `Pesticide Free `,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis velit eaque aut accusamus libero porro eos sit minus.`,
    button: `READ MORE`
  },
]

export default ServicesCard;