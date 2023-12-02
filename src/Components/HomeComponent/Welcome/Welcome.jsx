import React from 'react'
import AppleBucket from '../../../assets/AppleBucket.png'
import greenCoconut from '../../../assets/GreenCoconut.png'
import GreenApple from '../../../assets/GreenApple.png'

function Welcome() {
    return (
        <div>
            <div className="flex mt-4 justify-center items-center w-full h-full p-10 text-center font-Rubik">
                <div>
                    <img className="w-11/12" src={AppleBucket} alt="Apple bucket" />
                </div>
                <div className="flex flex-col">
                    <h1 className='text-5xl font-bold pb-6'>
                        Welcome To Our <br /> Organic Farms
                    </h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem saepe quod <br /> fugit nostrum possimus, quo quam enim qui totam consequuntur.
                    </p>
                    <div className="flex">
                        <div className="flex flex-col items-center justify-center text-center mt-5 w-full">
                            <img src={greenCoconut} alt="GreenCoconut" className='h-14 w-14' />
                            <h2 className='font-bold text-lg'>Organic Food</h2>
                            <p>Lorem ipsum dolor sit amet, <br /> amet consectetur elit.</p>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center mt-5 w-full">
                            <img src={GreenApple} alt="GreenApple" className='h-14 w-14' />
                            <h2 className='font-bold text-lg'>Healthy Food</h2>
                            <p>Lorem ipsum dolor sit amet, <br /> amet consectetur elit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome
