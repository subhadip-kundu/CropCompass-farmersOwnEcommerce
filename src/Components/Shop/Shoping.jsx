import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import { collection, getDocs } from "firebase/firestore";
import { firestore } from '../FireBase/Firebase';

const Shoping = () => {
    const categories = useSelector((state) => state.category.value);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(firestore, "CropCompassFarmerInputFormContainData"));
                const fetchedProducts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setProducts(fetchedProducts);
            } catch (error) {
                console.error("Error fetching products:", error);
                setError("Error fetching products. Please try again later.");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>; // Display a loading indicator while data is being fetched
    }

    if (error) {
        return <div>{error}</div>; // Display an error message if there's an error fetching data
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products
                .filter(product => categories ? product.category === categories : true) // Filter products based on categories
                .map(product => (
                    <ProductCard key={product.id} item={product} />
                ))
            }
        </div>
    );
};

export default Shoping;



 // Example data
    // const products = [
    //     {
    //         id: 1,
    //         name: 'Product 1',
    //         price: 10,
    //         category: 'Rice',
    //         image: 'product1.jpg'
    //     },
    //     {
    //         id: 2,
    //         name: 'Product 2',
    //         price: 20,
    //         category: 'Nuts',
    //         image: 'product2.jpg'
    //     }
    // ];

    // return (
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    //         {products
    //             .filter((pro) => pro.category === categories)
    //             .map(product => (
    //                 <ProductCard key={product.id} item={product} />
    //             ))
    //         }
    //     </div>
    // );