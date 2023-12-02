import React from 'react'


function SliderCard(props) {
    return (
        <>
            <div className="flex w-full justify-around items-center bg-green-100 border-2 border-green-200" >
                <div className="flex flex-col gap-8">
                    <p className='text-xl font-Rubik font-bold text-cyan-800'>EXTRA 50% OFF ON ALL PRODUCTS</p>
                    <h1 className='text-5xl font-Rubik text-green-700'>Building Your health <br /> Eating Organic</h1>
                    <button className='rounded-full bg-slate-300 w-fit p-1 pr-4 pl-4 font-bold'>BUY NOW</button>
                </div>
                <div>
                    <img className='max-h-96' src={props.src} alt="vegitableImage" />
                </div>
            </div>
        </>
    )
}

export default SliderCard;
