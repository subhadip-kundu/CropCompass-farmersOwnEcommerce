import React from 'react';
import RiceImage from '../../assets/Rice.jpeg';
import WheatImage from '../../assets/Wheat.jpeg';
import NutsImage from '../../assets/Nuts.jpeg';
import SugarImage from '../../assets/Suger.jpeg';
import SpicesImage from '../../assets/Spices.jpg';
import FruitsImage from '../../assets/Fruits.jpeg';
import VegetablesImage from '../../assets/Vegitablee.jpeg';
import PulsesImage from '../../assets/Pulses.jpeg';
import { Link } from 'react-router-dom';


const onClick = () => {
    console.log('Image clicked!');
};


function CategoryCard({ backgroundImage, categoryName, to }) {
    return (
        <div className="relative hover:scale-105 cursor-pointer">
            <Link to={to} onClick={onClick} className="block w-full h-full">
                <div className="bg-cover bg-no-repeat rounded-lg overflow-hidden hover:shadow-xl" style={{ backgroundImage, width: '100%', height: '100%' }}>
                    <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
                    <p className="absolute bottom-0 left-0 px-4 py-2 font-medium text-white text-lg z-10">{categoryName}</p>

                </div> 
            </Link>
        </div>
    );
}

function FoodGrid() {
    return (
        <div className="flex flex-col w-full font-Rubik">
            <div className="rounded-lg px-4 py-1 text-center text-[2.5rem]">
                <p className="font-medium">Categories</p>
            </div>
            <div className="grid grid-cols-4 gap-4 p-4 min-h-[70vh]">
                <CategoryCard backgroundImage={`url(${RiceImage})`} categoryName="Rice" to={'Rice'} />
                <CategoryCard backgroundImage={`url(${WheatImage})`} categoryName="Wheat" to={'Wheat'} />
                <CategoryCard backgroundImage={`url(${NutsImage})`} categoryName="Nuts" to={'Nuts'} />
                <CategoryCard backgroundImage={`url(${SugarImage})`} categoryName="Sugar" to={'Sugar'} />
                <CategoryCard backgroundImage={`url(${SpicesImage})`} categoryName="Spices" to={'Spices'} />
                <CategoryCard backgroundImage={`url(${FruitsImage})`} categoryName="Fruits" to={'Rice'} />
                <CategoryCard backgroundImage={`url(${VegetablesImage})`} categoryName="Vegetables" to={'Vegetables'} />
                <CategoryCard backgroundImage={`url(${PulsesImage})`} categoryName="Pulses" to={'Pulses'} />
            </div>
        </div>
    );
}

export default FoodGrid;
