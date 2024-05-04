import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import { collection, getDocs } from "firebase/firestore";
import { firestore, storage } from '../FireBase/Firebase';

const Shoping = async() => {
    const categories = useSelector((state) => state.category.value);
    console.log("selectedCategory in Shoping:", categories);


   
//get data from firebase
const querySnapshot = await getDocs(collection(firestore
    , "CropCompassFarmerInputFormContainData"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
  console.log(doc.id, " => ", doc.data().category);

});



    // Example data
    const products = [
        {
            id: 1,
            name: 'Product 1',
            price: 10,
            category: 'Rice',
            image: 'product1.jpg'
        },
        {
            id: 2,
            name: 'Product 2',
            price: 20,
            category: 'Nuts',
            image: 'product2.jpg'
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products
                .filter((pro) => pro.category === categories)
                .map(product => (
                    <ProductCard key={product.id} item={product} />
                ))
            }
        </div>
    );
};

export default Shoping;


