import React, { useEffect, useState } from 'react';
import Shoping from './Shoping.jsx';
import RiceImage from '../../assets/Rice.jpeg';
import WheatImage from '../../assets/Wheat.jpeg';
import NutsImage from '../../assets/Nuts.jpeg';
import SugarImage from '../../assets/Suger.jpeg';
import SpicesImage from '../../assets/Spices.jpg';
import FruitsImage from '../../assets/Fruits.jpeg';
import VegetablesImage from '../../assets/Vegitablee.jpeg';
import PulsesImage from '../../assets/Pulses.jpeg';
import { useNavigate } from 'react-router-dom';

const categories = [
    { name: "Rice", image: RiceImage },
    { name: "Wheat", image: WheatImage },
    { name: "Nuts", image: NutsImage },
    { name: "Sugar", image: SugarImage },
    { name: "Spices", image: SpicesImage },
    { name: "Fruits", image: FruitsImage },
    { name: "Vegetables", image: VegetablesImage },
    { name: "Pulses", image: PulsesImage }
];

function CategoryCard({ backgroundImage, categoryName, onClick }) {
    return (
        <div className="relative hover:scale-105 cursor-pointer">
            <div onClick={onClick} className="block w-full h-full">
                <div className="bg-cover bg-no-repeat rounded-lg overflow-hidden hover:shadow-xl" style={{ backgroundImage, width: '100%', height: '100%' }}>
                    <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
                    <p className="absolute bottom-0 left-0 px-4 py-2 font-medium text-white text-lg z-10">{categoryName}</p>
                </div>
            </div>
        </div>
    );
}

function FoodGrid() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (selectedCategory !== undefined && selectedCategory !== null) {
            let path = `/shoping`;
            navigate(path);
            console.log("selectedCategory in FoodGrid Condition :", selectedCategory);
        }
    }, [selectedCategory, navigate]);

    const onClicked = (categoryName) => {
        setSelectedCategory(categoryName);
    };

    console.log("selectedCategory in FoodGrid:", selectedCategory);



    return (
        <div className="flex flex-col w-full font-Rubik">
            <div className="rounded-lg px-4 py-1 text-center text-[2.5rem]">
                <p className="font-medium">Categories</p>
            </div>
            <div className="grid grid-cols-4 gap-4 p-4 min-h-[70vh]">
                {categories.map(category => (
                    <CategoryCard
                        key={category.name}
                        backgroundImage={`url(${category.image})`}
                        categoryName={category.name}
                        onClick={() => onClicked(category.name)}
                    />
                ))}
            </div>
        </div>
    );
}

export default FoodGrid;
