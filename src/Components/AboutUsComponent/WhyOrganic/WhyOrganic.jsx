import React from 'react'
import borderLeaf from '../../../assets/border-leaf.png'
import whyOrganic from '../../../assets/why-organic.webp'


function WhyOrganic() {
    return (
        <>
            <div className="flex flex-col justify-center items-center w-full font-Rubik">
                <div className="container shadow-sm mb-6">
                    <div className="w-full mx-auto flex items-center justify-center flex-col mb-16">
                        <h1 className='font-bold text-lg'>WHY ORGANIC</h1>
                        <img src={borderLeaf} alt="borderLeaf" />
                    </div>
                    <div className="w-full flex">
                        <div className="flex w-full  px-4">
                            <div className="flex flex-col gap-4">
                                <div>
                                    <h3 className='text-green-700 text-lg'>Organically <b>Produced </b></h3>
                                    <p>No chemicals or pesticides are used during cultivation, production, preservation.</p>
                                </div>
                                <div>
                                    <h3 className='text-green-700 text-lg'>Daily <b>Hand Picked</b></h3>
                                    <p>Vegetables or fruits are picked individually and very carefully to deliver only quality.</p>
                                </div>
                                <div>
                                    <h3 className='text-green-700 text-lg'>Supported by <b>Nature</b></h3>
                                    <p>Organic farming methods are used that does no harm to the nature.</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-3/4'>
                            <img src={whyOrganic} alt="whyOrganic" />
                        </div>
                        <div className="flex w-full font-Rubik px-4 flex-col gap-4">
                            <div>
                                <h3 className='text-green-700 text-lg'>Tastes <b>better</b></h3>
                                <p>OUR Organic products ensure amazing, mesmerizing taste.</p>
                            </div>
                            <div>
                                <h3 className='text-green-700 text-lg'>Super <b>Healthy</b></h3>
                                <p>Organic Fruits, vegetables, groceries are grown, ripen and preserved in traditional way which helps keep the high nutrition values of products intact, our products helps you to be healthier.</p>
                            </div>
                            <div>
                                <h3 className='text-green-700 text-lg'>Supports <b>Local Economy</b></h3>
                                <p>Our farming techniques and platform helps generate good revenue for farmers which they deserve.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyOrganic;