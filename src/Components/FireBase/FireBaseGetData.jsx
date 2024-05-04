// import React, { useState, useEffect } from 'react';
// import Shoping from './Shoping';
// import { collection, getDocs } from "firebase/firestore";
// import { firestore } from '../FireBase/Firebase';

// const ParentComponent = () => {
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const querySnapshot = await getDocs(collection(firestore, "CropCompassFarmerInputFormContainData"));
//                 const productsData = [];
//                 querySnapshot.forEach((doc) => {
//                     productsData.push({ id: doc.id, ...doc.data() });
//                 });
//                 setProducts(productsData);
//             } catch (error) {
//                 console.error("Error fetching products:", error);
//             }
//         };
//         fetchData();
//     }, []);

//     return (
//         <div>
//             <Shoping products={products} />
//         </div>
//     );
// };

// export default ParentComponent;
