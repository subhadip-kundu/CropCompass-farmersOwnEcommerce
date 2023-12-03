import React from 'react'
import farm from '../../../assets/farm.jpg'
import FarmCar from '../../../assets/FarmCar.webp'
import borderLeaf from '../../../assets/border-leaf.png'

function PickFromFarm() {
    return (
        <>
            <div className="w-full flex items-center justify-center font-Rubik ">
                <div className="container shadow-sm py-12">
                    <div className="flex justify-center items-center w-full">
                        <div className='w-full '>
                            <img src={FarmCar} alt="FarmCar" className='mx-auto' />
                        </div>
                        <div className='flex flex-col justify-center items-center gap-5'>
                            <header className="flex flex-col w-full mx-auto items-center justify-center">
                                <h4 className="uppercase font-bold text-lg">Directly Pick From Farm</h4>
                                <img src={borderLeaf} alt="borderLeaf" />
                            </header>

                            <div>
                                <img src={farm} alt="farm" />
                            </div>
                            <div>
                                <p>
                                    Its all about the family and freshness here. This family owned operation is all about good food and good times. None can defeat the taste of Fresh Vegetables or the flavour of Fresh Fruits Picked directly from the farm. Orgpick is here to Erase your efforts for searching and Trusting the Fresh Vegetables and Fruits.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PickFromFarm;